const { questionBank } = require("../../utils/question-bank");
const { startRecord, stopRecord } = require("../../utils/recorder");
const { evaluateSpeaking } = require("../../utils/api");

Page({
  data: {
    topic: null,
    questionIndex: 0,
    question: "",
    timerLeft: 30,
    recordedSeconds: 0,
    progress: 20,
    isRecording: false,
    transcriptHint: "",
    tempFilePath: "",
    evaluating: false
  },

  onLoad(options) {
    const topic = questionBank.find((item) => item.id === options.setId) || questionBank[0];
    const questionIndex = Number(options.questionIndex || 0);
    this.setData({
      topic,
      questionIndex,
      question: topic.questions[questionIndex],
      progress: ((questionIndex + 1) / topic.questions.length) * 100
    });
  },

  onUnload() {
    this.clearTimer();
  },

  goBack() {
    wx.navigateBack();
  },

  async playQuestion() {
    wx.showToast({
      title: "请接入真人音频或 TTS",
      icon: "none"
    });
  },

  async startPracticeRecord() {
    if (this.data.isRecording) {
      return;
    }
    try {
      await startRecord();
      this.setData({
        isRecording: true,
        timerLeft: 30,
        recordedSeconds: 0,
        tempFilePath: "",
        transcriptHint: ""
      });
      this.startTimer();
    } catch (error) {
      wx.showToast({
        title: "录音启动失败",
        icon: "none"
      });
    }
  },

  async stopAndEvaluate() {
    if (this.data.evaluating) {
      return;
    }
    this.clearTimer();
    try {
      const res = await stopRecord();
      this.setData({
        isRecording: false,
        tempFilePath: res.tempFilePath
      });
      await this.submitEvaluation();
    } catch (error) {
      wx.showToast({
        title: "录音结束失败",
        icon: "none"
      });
    }
  },

  cancelRecord() {
    this.clearTimer();
    this.setData({
      isRecording: false,
      timerLeft: 30,
      recordedSeconds: 0
    });
    wx.navigateBack();
  },

  startTimer() {
    this.clearTimer();
    this.timer = setInterval(() => {
      const nextLeft = this.data.timerLeft - 1;
      const nextRecorded = this.data.recordedSeconds + 1;
      if (nextLeft <= 0) {
        this.setData({
          timerLeft: 0,
          recordedSeconds: nextRecorded
        });
        this.stopAndEvaluate();
        return;
      }
      this.setData({
        timerLeft: nextLeft,
        recordedSeconds: nextRecorded
      });
    }, 1000);
  },

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },

  async submitEvaluation() {
    this.setData({ evaluating: true });
    wx.showLoading({
      title: "正在评分"
    });
    try {
      const result = await evaluateSpeaking({
        filePath: this.data.tempFilePath,
        setId: this.data.topic.id,
        questionIndex: this.data.questionIndex,
        transcriptHint: this.data.transcriptHint
      });
      const app = getApp();
      app.globalData.lastEvaluation = result;
      wx.navigateTo({
        url: `/pages/feedback/index?setId=${this.data.topic.id}&questionIndex=${this.data.questionIndex}`
      });
    } catch (error) {
      wx.showToast({
        title: "评分失败，请检查服务端",
        icon: "none"
      });
    } finally {
      this.setData({ evaluating: false });
      wx.hideLoading();
    }
  }
});
