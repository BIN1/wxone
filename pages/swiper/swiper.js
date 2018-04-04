Page({
  data: {
    imgUrls: [
      "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-18/mini_1492510802_5082.jpg",
      "http://www.kuaizu365.cn/Public/images/upload/goods/2016-03-25/mini_1458885806_7474.jpg",
      "http://www.kuaizu365.cn/Public/images/upload/goods/2017-04-11/mini_1491882355_7416.png",
      "http://www.kuaizu365.cn//Public/images/upload/goods/2016-10-12/mini_1476236559_2464.jpg",
      "http://www.kuaizu365.cn/Public/images/upload/goods/2016-06-28/mini_1467094552_7002.jpg",
      "http://www.kuaizu365.cn/Public/images/upload/goods/2016-04-22/mini_1461290901_3352.jpg"
    ],
    currentIndex: 1,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 600,
    indicatorActiveColor: "blue",
    indicatorColor: "#666",
    circular: true
  },
  slideChange: function(events) {
    var index = events.detail.current + 1;
    this.setData({ currentIndex: index });
    console.log(this.data.currentIndex);
  }
});
