const { questionBank } = require("../../utils/question-bank");

Page({
  data: {
    topic: null
  },

  onLoad(options) {
    const app = getApp();
    const topic = app.globalData.activeSet || questionBank.find((item) => item.id === options.id) || questionBank[0];
    this.setData({ topic });
  },

  goBack() {
    wx.navigateBack();
  },

  startPractice() {
    wx.navigateTo({
      url: `/pages/practice/index?setId=${this.data.topic.id}&questionIndex=0`
    });
  },

  showSample() {
    wx.showModal({
      title: "教我回答",
      content: this.data.topic.polishedAnswer,
      showCancel: false
    });
  }
});
