// pages/center/register.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    code: '',
  },

  /**
   * 注册提交
   */
  registerSubmit(e) {
    var formData = e.detail.value;
    var code = this.data.code;
    console.log(code);
    if (formData.name == '') {
      wx.showModal({
        title: '提示',
        content: '用户名不能为空',
        showCancel: false
      });
      return
    }
    if (formData.password == '') {
      wx.showModal({
        title: '提示',
        content: '密码不能为空',
        showCancel: false
      });
      return
    }
    if (formData.password != formData.sub_pwd) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
        showCancel: false
      });
      return
    }
    if (formData.test_code != code) {
      wx.showModal({
        title: '提示',
        content: '验证码不正确',
        showCancel: false
      });
      return
    }
    wx.request({
      url: util.apiUrl + '/server/register.php',
      data: formData,
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        wx.showToast({
          title: res.data,
          icon: 'success',
          duration: 2000,
          success: function () {
            wx.switchTab({
              url: '../index/index',
            })
          }
        })
      }
    })
  },

  /**
   * 获取验证码
   */
  getCode() {
    var that = this;
    wx.request({
      url: util.apiUrl + '/server/code.php',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        that.setData({
          code: res.data
        })
        wx.showModal({
          title: '验证码',
          content: res.data,
          showCancel: false
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '用户注册'
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