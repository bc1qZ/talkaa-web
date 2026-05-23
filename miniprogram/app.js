App({
  globalData: {
    apiBaseUrl: "https://your-api-domain.com",
    activeSet: null,
    lastEvaluation: null
  },

  onLaunch() {
    const today = new Date().toISOString().slice(0, 10);
    wx.setStorageSync("lastLaunchDate", today);
  }
});
