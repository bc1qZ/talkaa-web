const app = getApp();

function request({ url, method = "GET", data = {}, header = {} }) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${app.globalData.apiBaseUrl}${url}`,
      method,
      data,
      header,
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
          return;
        }
        reject(new Error(res.data && res.data.message ? res.data.message : "请求失败"));
      },
      fail: reject
    });
  });
}

function evaluateSpeaking({ filePath, setId, questionIndex, transcriptHint }) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: `${app.globalData.apiBaseUrl}/api/evaluate-speaking`,
      filePath,
      name: "audio",
      formData: {
        setId,
        questionIndex,
        transcriptHint: transcriptHint || ""
      },
      success: (res) => {
        try {
          const parsed = JSON.parse(res.data);
          resolve(parsed);
        } catch (error) {
          reject(new Error("评分返回格式无效"));
        }
      },
      fail: reject
    });
  });
}

function fetchQuestionBank() {
  return request({
    url: "/api/question-bank"
  });
}

module.exports = {
  request,
  evaluateSpeaking,
  fetchQuestionBank
};
