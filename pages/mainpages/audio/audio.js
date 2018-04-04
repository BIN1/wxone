Page({
  onReady: function(e) {
    // 使用wx.createAudioContext获取audio上下文context
    this.audioCtx = wx.createAudioContext("myAudio");
  },
  data: {
    poster: "../../../img/ambiguous.png",
    name: "暧昧",
    author: "薛之谦",
    src: "http://www.luojianbin.cn/wx/ambiguous.mp3"
  },
  audioPlay: function(event) {
    this.audioCtx.play();
  },
  audioPause: function() {
    this.audioCtx.pause();
  },
  audioEnd: function() {
    console.log("音乐播放完");
  },
  audioUpdate: function(event) {
    var timeStamp = event.timeStamp;
    var mins = Math.floor(timeStamp / 1000 / 60);
    var secs = Math.floor((timeStamp - mins * 60 * 1000) / 1000);
    console.log(mins, secs);
  },
  audioStart: function() {
    this.audioCtx.seek(0);
  }
});