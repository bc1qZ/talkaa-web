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
        body: "结构清楚，但离 8 分以上还差更自然的延展和更成熟的衔接。"
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
    band8Targets: [
      {
        title: "流利度要更像自然对话",
        body: "Band 8 通常能自然展开观点，不会只停在短句和基本说明。"
      },
      {
        title: "词汇要更精准",
        body: "Band 8 需要更灵活的近义词和搭配，而不只是基本词。"
      },
      {
        title: "句式要更丰富",
        body: "建议稳定使用原因句、让步句和定语从句来展示能力。"
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
