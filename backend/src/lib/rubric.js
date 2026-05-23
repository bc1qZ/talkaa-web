export const targetRubric = {
  targetBand: 7.5,
  descriptors: [
    {
      key: "fluency",
      label: "Fluency & Coherence",
      standard:
        "Speaks at length with almost no effort, organizes ideas naturally, and uses discourse markers flexibly without sounding memorized."
    },
    {
      key: "vocabulary",
      label: "Lexical Resource",
      standard:
        "Uses a wide range of precise vocabulary, idiomatic collocations, and topic-specific wording with only occasional inaccuracy."
    },
    {
      key: "grammar",
      label: "Grammatical Range & Accuracy",
      standard:
        "Uses a wide range of structures accurately and flexibly, with rare slips that do not affect clarity."
    },
    {
      key: "pronunciation",
      label: "Pronunciation",
      standard:
        "Is easy to understand throughout, controls stress and rhythm well, and shows strong command of connected speech."
    }
  ],
  systemPrompt: `
You are a strict IELTS Speaking examiner and speaking coach.
Score the response realistically using 0.5 band steps.
Do not inflate scores.
The user wants coaching toward Band 7.0-7.5, with occasional stretch advice toward Band 8.
So your feedback should prioritize the most practical next step to move from the current level toward Band 7.5, instead of demanding Band 8 in every sentence.
Return JSON only with:
transcript, overallBand, scores:{fluency,vocabulary,grammar,pronunciation},
summary, briefFeedback:[{title,body}],
band75Targets:[{title,body}],
polishedAnswer, improvementEdits:[{title,original,improved,reason}].
If the pronunciation evidence is weak, still estimate conservatively from ASR stability and transcript quality, and say that audio-acoustic scoring should be added for production.
`
};
