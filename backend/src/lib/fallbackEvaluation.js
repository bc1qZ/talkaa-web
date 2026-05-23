export function buildFallbackEvaluation({ set, question, transcript, questionIndex }) {
  return {
    setId: set.id,
    part: set.part,
    question,
    questionIndex,
    nextQuestionIndex: questionIndex + 1 < set.questions.length ? questionIndex + 1 : 0,
    transcript: transcript || "I live in a very busy city, so yes, it gets crowded, especially during rush hour.",
    overallBand: 5.5,
    scores: {
      fluency: 5.5,
      vocabulary: 5.5,
      grammar: 5.0,
      pronunciation: 5.0
    },
    summary: "评分服务未接通时，这里先回退到演示结果。接入真实语音模型后，这一页会展示真实转写与真实评分。",
    briefFeedback: [
      {
        title: "流利度与连贯性",
        body: "结构已经清楚了，但如果想稳定到 7 分以上，还需要更自然地展开理由和细节，而不是停在短句。"
      },
      {
        title: "词汇",
        body: "可以尝试 packed, bustling, heavily congested 这类更具体的词。"
      },
      {
        title: "语法",
        body: "先保证简单句稳定，再加从句和更灵活的表达。"
      },
      {
        title: "发音",
        body: "当前为演示估算。正式版应结合音频声学特征做更真实的判断。"
      }
    ],
    band75Targets: [
      {
        title: "先把回答稳定拉到完整小段",
        body: "7.5 不要求每句都很难，但通常不会太短。先做到答案、原因、细节这三步完整。"
      },
      {
        title: "词汇要更具体，不只是基础词",
        body: "7 到 7.5 的提升，往往来自把 very crowded 这种基础表达换成更贴切的词。"
      },
      {
        title: "句式开始有变化就会明显加分",
        body: "先稳定使用 because、which 这类从句，比一开始追求特别复杂的句式更有效。"
      }
    ],
    polishedAnswer: set.polishedAnswer || "",
    improvementEdits: [
      {
        title: "提升表达密度",
        original: "The city is very crowded.",
        improved: "The city is usually packed, especially during the morning and evening rush hours.",
        reason: "更具体，也更接近高分口语表达。"
      }
    ],
    reportDate: new Date().toISOString().slice(0, 10)
  };
}
