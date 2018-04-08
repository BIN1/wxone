Page({
    data:{
        switch1:true,
        switch2:false
    },
  switchChange: function(event) {
      this.setData({ switch1: event.detail.value });
    console.log("switch 发生change事件，携带值为：", event.detail.value);
  },
  switchChange2: function(event) {
      this.setData({ switch2: event.detail.value });
    console.log("switch2 发生change事件，携带值为：", event.detail.value);
  }
});