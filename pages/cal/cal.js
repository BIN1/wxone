//logs.js
const util = require("../../utils/util.js");

Page({
  data: {
    id1: "back",
    id2: "clear",
    id3: "negative",
    id4: "+",
    id5: "9",
    id6: "8",
    id7: "7",
    id8: "-",
    id9: "6",
    id10: "5",
    id11: "4",
    id12: "x",
    id13: "3",
    id14: "2",
    id15: "1",
    id16: "÷",
    id17: "0",
    id18: ".",
    id19: "history",
    id20: "=",
    screenData: "0", //显示在面板中的数据
    lastIsOperetor: false, //标识上次点击是否运算符
    arr: [], //每次点击的符号
    logs: [] //缓存的运算结果
  },
  //计算机按钮点击
  clickButton: function(event) {
    var id = event.target.id;
    // 拼接点击的数据
    if (id == this.data.id1) {
      // 退格
      var data = this.data.screenData;
      if (data != 0) {
        data = data.substring(0, data.length - 1);
      }
      if (data == "" || data == "-") {
        data = 0;
      }
      this.setData({ screenData: data });
      this.data.arr.pop(); //清除数组最后一个元素
    } else if (id == this.data.id2) {
      // 清屏
      this.setData({ screenData: "0" });
      this.data.arr.length = 0;
    } else if (id == this.data.id3) {
      // 正负号
      var data = this.data.screenData;
      if (data != 0) {
        var firstWord = data.substring(0, 1);
        if (firstWord == "-") {
          data = data.substring(1, data.length);
          this.data.arr.shift(); // 清除数组第一个元素中的负号
        } else {
          data = "-" + data;
          this.data.arr.unshift("-"); // 设置数组第一个元素值开头添加"-"
        }
      }
      this.setData({ screenData: data });
    } else if (id == this.data.id20) {
      // 执行运算 计算结果
      var data = this.data.screenData;
      if (data != 0) {
        this.runData(data);
      }
    } else {
      // 拼接点击的数据
      // 禁止连续点击运算符号
      if (
        id == this.data.id4 ||
        id == this.data.id8 ||
        id == this.data.id12 ||
        id == this.data.id16
      ) {
        if (this.data.lastIsOperator == true || this.data.screenData == "0") {
          return;
        }
      }
      var data;
      if (this.data.screenData == 0) {
        data = id;
      } else {
        data = this.data.screenData + id;
      }
      this.setData({ screenData: data });
      this.data.arr.push(id);
      // 当点击的是运算符号时
      if (
        id == this.data.id4 ||
        id == this.data.id8 ||
        id == this.data.id12 ||
        id == this.data.id16
      ) {
        this.setData({ lastIsOperator: true });
      } else {
        this.setData({ lastIsOperator: false });
      }
    }
  },
  /**
   * 历史记录按钮点击
   */
  history: function() {
    wx.navigateTo({ url: "../calLog/calLog" });
  },
  /**
   * 执行运算
   */
  runData: function(data) {
    var lastWord = data.substring(data.length - 1, data.legth);
    if (isNaN(lastWord)) {
      // 最后字符不是数字 不执行运算
      return;
    }
    var num = "";
    var lastOperator;
    var arr = this.data.arr;
    var optarr = [];
    for (var i in arr) {
      if (
        isNaN(arr[i]) == false ||
        arr[i] == this.data.id18 ||
        arr[i] == this.data.id3
      ) {
        // 如果连续是数字 就把数字组在一起
        num += arr[i];
      } else {
        lastOperator = arr[i];
        optarr.push(num);
        optarr.push(arr[i]);
        num = "";
      }
    }
    optarr.push(Number(num)); // 继续把最后一个数字添加到数组中

    var result = Number(optarr[0]) * 1.0; // 初始化数字类型 使支持小数点运算

    for (var i = 1; i < optarr.length - 1; i++) {
      if (isNaN(optarr[i])) {
        switch (optarr[i]) {
          case this.data.id4:
            result += Number(optarr[i + 1]);
            break;
          case this.data.id8:
            result -= Number(optarr[i + 1]);
            break;
          case this.data.id12:
            result *= Number(optarr[i + 1]);
            break;
          case this.data.id16:
            result /= Number(optarr[i + 1]);
            break;
        }
      }
    }
    this.data.logs.push(data + "=" + result); // 将每次运算的数据追加到缓存数组中
    wx.setStorageSync("callogs", this.data.logs); // 将本地缓存的运算数组缓存在本地
    this.data.arr.length = 0;
    this.data.arr.push(result);
    this.setData({ screenData: result + "" });
  }
});
