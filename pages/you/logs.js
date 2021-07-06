//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: {}
  },
  onLoad: function () {

  },
  outLogin() {
    // const accountInfo = wx.getAccountInfoSync();
    // console.log(accountInfo.miniProgram.appId) // 小程序 appId
    // console.log(accountInfo.plugin.appId) // 插件 appId
    // console.log(accountInfo.plugin.version) // 插件版本号， 'a.b.c' 这样的形式
    wx.showToast({
      title: '已退出',
      icon: 'success',
      duration: 2000
    })
  }
})
