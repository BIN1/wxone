Page({
  data: {
    post: "back",
    flash: "auto",
    src: "",
    videoSrc:""
  },
  switch: function() {
    let pt = this.data.post;
    console.log(pt);
    if (pt == "back") {
      this.setData({ post: "front" });
    } else {
      this.setData({ post: "back" });
    }
  },
  takePhoto: function() {
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality: "high",
      success: res => {
        this.setData({
          src: res.tempImagePath
        });
      },
      fail: error => {
        console.log(error);
      }
    });
  },
  startRecord: function() {
    const ctx = wx.createCameraContext();
    ctx.startRecord({
      success: res => {
          console.log(res);
        console.log(`录像开始：${res}`);
      },
      timeoutCallback: rt => {
        console.log('中断');
      }
    });
  },
  stopRecord:function(){
      const ctx = wx.createCameraContext();
      let self=this;
      ctx.stopRecord({
          success:res => {
              let tempVideoPath=res.tempVideoPath
              console.log(tempVideoPath);
              self.setData({
                  videoSrc:tempVideoPath
              })
              console.log(`录像结束：${res}`)
          }
      })
  }
});