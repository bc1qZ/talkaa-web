const recorderManager = wx.getRecorderManager();

function startRecord() {
  return new Promise((resolve) => {
    recorderManager.onceStart(() => resolve());
    recorderManager.start({
      duration: 120000,
      sampleRate: 16000,
      numberOfChannels: 1,
      encodeBitRate: 48000,
      format: "mp3",
      frameSize: 50
    });
  });
}

function stopRecord() {
  return new Promise((resolve) => {
    recorderManager.onceStop((res) => resolve(res));
    recorderManager.stop();
  });
}

module.exports = {
  recorderManager,
  startRecord,
  stopRecord
};
