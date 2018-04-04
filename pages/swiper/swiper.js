Page({
  data: {
    imgUrls: [
      "../../img/product1.jpg",
      "../../img/product2.jpg",
      "../../img/product3.jpg",
      "../../img/product4.jpg",
      "../../img/product5.jpg",
      "../../img/product6.jpg"
    ],
    currentIndex:1,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 600,
    indicatorActiveColor: "blue",
    indicatorColor: "#666",
    circular:true,
  },
  slideChange:function(events){
      var index=events.detail.current+1;
      this.setData({ currentIndex: index });
    console.log(this.data.currentIndex);
  }
});
