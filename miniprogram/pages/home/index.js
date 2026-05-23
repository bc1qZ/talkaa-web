const { questionBank } = require("../../utils/question-bank");

Page({
  data: {
    todayText: "2026 年 5 月",
    tasks: questionBank
  },

  openTopic(event) {
    const { id } = event.currentTarget.dataset;
    const app = getApp();
    app.globalData.activeSet = this.data.tasks.find((item) => item.id === id);
    wx.navigateTo({
      url: `/pages/topic/index?id=${id}`
    });
  }
});
