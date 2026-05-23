Page({
  data: {
    result: null
  },

  onLoad() {
    const app = getApp();
    this.setData({
      result: app.globalData.lastEvaluation
    });
  },

  goBack() {
    wx.navigateBack();
  },

  retry() {
    const result = this.data.result;
    wx.redirectTo({
      url: `/pages/practice/index?setId=${result.setId}&questionIndex=${result.questionIndex}`
    });
  },

  openReport() {
    const result = this.data.result;
    wx.navigateTo({
      url: `/pages/report/index?setId=${result.setId}&questionIndex=${result.questionIndex}`
    });
  },

  copyPolished() {
    wx.setClipboardData({
      data: this.data.result.polishedAnswer
    });
  }
});
