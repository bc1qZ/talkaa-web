import fs from "node:fs/promises";
import { band8Rubric } from "../lib/rubric.js";

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export async function evaluateWithOpenAI({ audioPath, set, question, transcriptHint }) {
  const apiKey = requireEnv("OPENAI_API_KEY");
  const model = process.env.OPENAI_EVAL_MODEL || "gpt-4o-mini-transcribe";
  const textModel = process.env.OPENAI_REPORT_MODEL || "gpt-4.1";
  const audioBuffer = await fs.readFile(audioPath);

  const transcriptRes = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    body: buildTranscriptionFormData(audioBuffer, audioPath, model, transcriptHint)
  });
  if (!transcriptRes.ok) {
    throw new Error(`Transcription failed with status ${transcriptRes.status}`);
  }
  const transcriptJson = await transcriptRes.json();
  const transcript = transcriptJson.text || transcriptHint || "";

  const reportRes = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: textModel,
      input: [
        {
          role: "system",
          content: [{ type: "text", text: band8Rubric.systemPrompt.trim() }]
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: JSON.stringify({
                setId: set.id,
                part: set.part,
                titleEn: set.titleEn,
                question,
                transcript,
                band8Rubric
              })
            }
          ]
        }
      ],
      text: {
        format: {
          type: "json_object"
        }
      }
    })
  });
  if (!reportRes.ok) {
    throw new Error(`Report generation failed with status ${reportRes.status}`);
  }
  const reportJson = await reportRes.json();
  const content = reportJson.output?.[0]?.content?.[0]?.text || "{}";
  const parsed = JSON.parse(content);

  return {
    transcript,
    ...parsed
  };
}

function buildTranscriptionFormData(audioBuffer, audioPath, model, transcriptHint) {
  const form = new FormData();
  const fileName = audioPath.split("/").pop() || "answer.mp3";
  form.append("file", new Blob([audioBuffer]), fileName);
  form.append("model", model);
  if (transcriptHint) {
    form.append("prompt", transcriptHint);
  }
  return form;
}
