//logs.js
const util = require("../../utils/util.js");

Page({
    data:{
        hidden:false,
        city:"",
        today:{},//当前天气
        future:{},//未来天气
        weatherImage:"",
        nowDate:""
    },
    onLoad:function (options) {
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        var day=date.getDate();
        //加载位置并加载天气
        this.loadLocation();
        this.setData({ nowDate: year + "-" + month + "-" + day });
    },
    //获取当前位置
    loadLocation:function () {
        var page=this;
        wx.getLocation({
            type:"gcj02",
            success:function (pos) {
                var l=pos.latitude;
                var y=pos.longitude;
                page.loadCityInfo(l,y);
            }
        })
    },
    // 根据坐标获取城市名
    loadCityInfo:function (l,y) {
        var page=this;
        wx.request({
          url: "https://wechat.zhaoxinnian.com/api/index/city/location/"+l+','+y,
          header:{"content-type":"application/json"},
          success:function (res) {
            //   设置当前位置城市
            var city=res.data.data.city;
            page.setData({city:city+"市"});
            page.loadWeather(page.data.city);
          }
        });
    },
    // 查询天气
    loadWeather:function (city) {
        var page=this;
        wx.request({
          url:
            "https://wechat.zhaoxinnian.com/api/index/weather/city/" +
            city,
            header: { "content-type": "application/json" },
            success: function(res) {
                var future = res.data.data.forecast;
                var today = res.data.data.now;
                today.ganmao = "温馨提示：" + res.data.data.ganmao;
                today.wendu = res.data.data.wendu + "℃";
                page.setData({ weatherImage: today.img });
                page.setData({ today: today, future: future });
                console.log("加载天气");
                page.setData({ hidden: true });
            }
        });
    }
});
