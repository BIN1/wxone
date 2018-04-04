//logs.js
const util = require("../../utils/util.js");

Page({
    data:{

    },
    onLoad:function (options) {
        
    },
    clickTab:function(event){
        var id=event.target.id;
        wx.navigateTo({
            url:'../mainpages/'+id+'/'+id
        })
        console.log(id)
    }
});
