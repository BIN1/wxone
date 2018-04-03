const util = require("../../utils/util.js");
Page({
    data:{
        logs:[]//本地缓存的运算数据
    },
    onLoad:function (options) {
        var logs=wx.getStorageSync('callogs');
        this.setData({logs:logs});
    }
})
