Component({
  properties: {
    innerText: {
      type: String,
      value: "哦吼"
    }
  },
  data: {
    inner: '别点我'
  },
  methods: {
    onClick(e) {
      console.log('e',e);
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
  }
})