// pages/center/center.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    nick: '',
  },

  /**
   * 跳到登录页面
   */
  Login() {
    wx.navigateTo({
      url: 'login',
    })
  },

  /**
   * 跳到注册页面
   */
  Register() {
    wx.navigateTo({
      url: 'register',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender 
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          avatar: avatarUrl,
          nick: nickName
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
