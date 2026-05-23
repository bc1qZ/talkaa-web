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

  nextQuestion() {
    const { result } = this.data;
    wx.redirectTo({
      url: `/pages/practice/index?setId=${result.setId}&questionIndex=${result.nextQuestionIndex}`
    });
  }
});
