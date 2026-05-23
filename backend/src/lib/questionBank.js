import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const bankPath = path.resolve(__dirname, "../../data/question-bank.json");

export async function readQuestionBank() {
  const raw = await fs.readFile(bankPath, "utf8");
  return JSON.parse(raw);
}

export async function writeQuestionBank(payload) {
  await fs.writeFile(bankPath, JSON.stringify(payload, null, 2), "utf8");
}

export function getSetById(bank, setId) {
  return bank.sets.find((item) => item.id === setId);
}
