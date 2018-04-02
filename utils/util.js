const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  toPage:toPage
}
// 底部导航按钮跳转
function toPage(event,nav) {
  var navId=event.target.id;
  var url=nav[navId-1].url;
  if(url===undefined || url ==''){
    return;
  }
  // 关闭当前页面跳转
  wx.redirectTo({
    url:'../'+url
  })
}
