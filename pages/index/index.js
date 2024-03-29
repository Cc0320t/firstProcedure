Page({
  data: {
    loading: false,
    color: '#000',
    background: '#f8f8f8',
    show: true,
    animated: false,
    imageText: [
      {
        id: Date.now(),
        text: '沉默的爱',
        img: '../../images/flower.png'
      },
      {
        id: Date.now(),
        text: '唱你的歌',
        img: '../../images/double.png' 
      },
      {
        id: Date.now(),
        text: '清澈水眸',
        img: '../../images/man.png' 
      },
      {
        id: Date.now(),
        text: '平畴夕照',
        img: '../../images/sea.png' 
      },
      {
        id: Date.now(),
        text: '求而不得',
        img: '../../images/sundown.png' 
      },
      {
        id: Date.now(),
        text: '好好先生',
        img: '../../images/sadness.png' 
      },
      {
        id: Date.now(),
        text: '情怀两不知',
        img: '../../images/blackFace.png' 
      },
      {
        id: Date.now(),
        text: '来往不逢人',
        img: '../../images/metro.png' 
      }
    ],
    textContent: '绿槐高柳咽新蝉。薰风初入弦。\n 碧纱窗下水沉烟。棋声惊昼眠。\n微雨过，小荷翻。榴花开欲然。\n玉盆纤手弄清泉。琼珠碎却圆。',
    textContent1: '林断山明竹隐墙。乱蝉衰草小池塘。\n 村舍外，古城旁。杖藜徐步转斜阳。\n 殷勤昨夜三更雨，又得浮生一日凉。',
  },
  onClick() {
    this.setData({
      textContent: this.data.textContent1,
      textContent1: this.data.textContent
    });
  },
  handelClickOne(e) {
    console.log('点击事件');
  },
  handelClickTwo(e) {
    console.log('点击事件1');
  },
  handelClickThree(e) {
    console.log('点击事件2');
  },
  // handelChangeImg(e) {
  //   console.log(e.detail);
  // },
  handelClickImage(e) {
    console.log(e.currentTarget.dataset);
  },
  toggleLoading() {
    this.setData({
      loading: !this.data.loading
    })
  },
  changeColor() {
    this.setData({
      color: '#07C160'
    })
  },
  changeBgColor() {
    this.setData({
      background: '#ededed'
    })
  },
  toggleShow() {
    this.setData({
      show: !this.data.show
    })
  },
  toggleAnimated() {
    this.setData({
      animated: !this.data.animated,
      show: !this.data.show
    })
  }
})

// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   toggleLoading() {
//     this.setData({
//       motto: 'cc'
//     });
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
