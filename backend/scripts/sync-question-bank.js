import { readQuestionBank, writeQuestionBank } from "../src/lib/questionBank.js";

async function syncQuestionBank() {
  const bank = await readQuestionBank();
  const nextVersion = new Date().toISOString().slice(0, 10);

  const updated = {
    ...bank,
    version: nextVersion,
    nextPlannedUpdate: getNextMonthFirstDay(),
    lastSyncNote:
      "这里预留给真实题库同步流程。生产环境可以接抓取源、编辑后台或人工审核后的 CMS。"
  };

  await writeQuestionBank(updated);
  console.log(`Question bank synced to version ${updated.version}`);
}

function getNextMonthFirstDay() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1, 1);
  return date.toISOString().slice(0, 10);
}

syncQuestionBank().catch((error) => {
  console.error(error);
  process.exit(1);
});
