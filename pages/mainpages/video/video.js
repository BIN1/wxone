function getRandomColor() {
    let reg=[];
    for(let i=0;i<3;i++){
        let color=Math.floor(Math.random()*256).toString(16);
        color=color.length == 1 ? "0" : color;
        rgb.push(color);
    };
    return "#"+rgb.join(',');
}
Page({
  onReady: function(res) {
    this.myVideoContext = wx.createVideoContext("myVideo");
  },
  inputValue: "",
  data: {
    src: "http://www.luojianbin.cn/wx/wx.mp4",
    danmulist: [
      {
        text: "第一秒出现的弹慕",
        color: "#f00",
        time: 1
      },
      {
        text: "第4秒出现的弹慕",
        color: "#f00",
        time: 4
      }
    ]
  },
  bindInputBlur: function(e) {
    this.inputValue = e.detail.value;
  },
  bindButtonTap: function() {
    var that = this;
    wx.chooseVideo({
      sourceType: ["album", "camera"],
      camera: ["front", "back"],
      success: function(res) {
        console.log(res);
        that.setData({
          src: res.tempFilePath
        });
      }
    });
  },
  bindSendDanmu: function() {
    this.myVideoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor
    });
  }
});