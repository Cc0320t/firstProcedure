//logs.js 
// util 格式化时间  util.formatTime()
const util = require('../../utils/util.js')
Page({
  data: {
    testArr: []
  },
  onLoad() {
    wx.request({
      url: 'http://localhost:3307/api/getUserList',
      method: 'GET', // 请求的方法
      data: {}, // 请求的数据
      success: (res) => {
        console.log(res);
        this.setData({
          testArr: res.data.result
        });
      }
    });
  },
  onShow() {}
})
