import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readQuestionBank, getSetById } from "./lib/questionBank.js";
import { evaluateWithOpenAI, synthesizeSpeechWithOpenAI } from "./adapters/openaiAdapter.js";
import { buildFallbackEvaluation } from "./lib/fallbackEvaluation.js";

const app = express();
const upload = multer({ dest: path.resolve(".tmp") });
const port = Number(process.env.PORT || 8787);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webRoot = path.resolve(__dirname, "../..");

app.use(cors());
app.use(express.json());
app.use(express.static(webRoot));

app.get("/health", (_req, res) => {
  res.json({
    ok: true
  });
});

app.get("/api/question-bank", async (_req, res) => {
  const bank = await readQuestionBank();
  res.json(bank);
});

app.post("/api/tts", async (req, res) => {
  const text = String(req.body?.text || "").trim();
  const instructions = String(req.body?.instructions || "").trim();
  const voice = String(req.body?.voice || "coral").trim();

  if (!text) {
    res.status(400).json({ message: "Text is required" });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(501).json({ message: "TTS is not configured" });
    return;
  }

  try {
    const audioBuffer = await synthesizeSpeechWithOpenAI({
      text,
      instructions,
      voice
    });

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-store");
    res.send(audioBuffer);
  } catch (error) {
    res.status(500).json({
      message: error.message || "TTS failed"
    });
  }
});

app.post("/api/evaluate-speaking", upload.single("audio"), async (req, res) => {
  const bank = await readQuestionBank();
  const set = getSetById(bank, req.body.setId);

  if (!set) {
    res.status(404).json({ message: "Question set not found" });
    return;
  }

  const questionIndex = Number(req.body.questionIndex || 0);
  const question = set.questions[questionIndex];

  try {
    let result;
    if (process.env.OPENAI_API_KEY && req.file?.path) {
      const raw = await evaluateWithOpenAI({
        audioPath: req.file.path,
        set,
        question,
        transcriptHint: req.body.transcriptHint || ""
      });
      result = {
        setId: set.id,
        part: set.part,
        question,
        questionIndex,
        nextQuestionIndex: questionIndex + 1 < set.questions.length ? questionIndex + 1 : 0,
        reportDate: new Date().toISOString().slice(0, 10),
        ...raw
      };
    } else {
      result = buildFallbackEvaluation({
        set,
        question,
        transcript: req.body.transcriptHint || "",
        questionIndex
      });
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Evaluation failed"
    });
  } finally {
    if (req.file?.path) {
      await fs.rm(req.file.path, { force: true });
    }
  }
});

app.get("/", (_req, res) => {
  res.sendFile(path.join(webRoot, "index.html"));
});

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    next();
    return;
  }
  res.sendFile(path.join(webRoot, "index.html"));
});

app.listen(port, () => {
  console.log(`Talkaa mini backend listening on ${port}`);
});
