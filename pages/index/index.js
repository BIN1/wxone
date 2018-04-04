//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    goodsItem: [
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-18/mini_1492510802_5082.jpg",
        name:
          "全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-03-25/mini_1458885806_7474.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-11/mini_1491882355_7416.png",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn//Public/images/upload/goods/2016-10-12/mini_1476236559_2464.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-06-28/mini_1467094552_7002.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-04-22/mini_1461290901_3352.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-18/mini_1492510802_5082.jpg",
        name:
          "全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-03-25/mini_1458885806_7474.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-11/mini_1491882355_7416.png",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn//Public/images/upload/goods/2016-10-12/mini_1476236559_2464.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-06-28/mini_1467094552_7002.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      },
      {
        img:
          "http://www.kuaizu365.cn/Public/images/upload/goods/2016-04-22/mini_1461290901_3352.jpg",
        name: "全新HP 400 G3 DM home版 迷你台式机",
        price: "290.00",
        retent: "12"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  toswiper: function() {
    wx.navigateTo({
      url: "../swiper/swiper"
    });
  },
  onLoad: function() {
    console.log(this.data.goodsItem);
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  lower: function(options) {
    var goods = [{ img: "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-18/mini_1492510802_5082.jpg", name: "全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机,全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }, { img: "http://www.kuaizu365.cn/Public/images/upload/goods/2016-03-25/mini_1458885806_7474.jpg", name: "全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }, { img: "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-11/mini_1491882355_7416.png", name: "全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }, { img: "http://www.kuaizu365.cn//Public/images/upload/goods/2016-10-12/mini_1476236559_2464.jpg", name: "全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }, { img: "http://www.kuaizu365.cn/Public/images/upload/goods/2016-06-28/mini_1467094552_7002.jpg", name: "全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }, { img: "http://www.kuaizu365.cn/Public/images/upload/goods/2016-04-22/mini_1461290901_3352.jpg", name: "全新HP 400 G3 DM home版 迷你台式机", price: "290.00", retent: "12" }];
    goods = this.data.goodsItem.concat(goods);
    this.setData({ goodsItem: goods });
  },
  upper: function() {
    console.log("滚到顶部了");
  }
});
