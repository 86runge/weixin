// pages/center/login.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 登录提交
   */
  loginSubmit(e) {
    var formData = e.detail.value;
    var test_code = this.data.test_code;
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
    if (formData.test_code != test_code) {
      wx.showModal({
        title: '提示',
        content: '验证码不正确',
        showCancel: false
      });
      return
    }
    wx.login({
      success: function (res) {
        if (res.code) {
          formData.code = res.code
          //发起网络请求
          wx.request({
            url: util.apiUrl + '/server/login.php',
            data: formData,
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function (res) {
              if (res.data.status == '1') {
                wx.showToast({
                  title: res.data.msg,
                  icon: 'success',
                  duration: 2000,
                  success: function () {
                    wx.switchTab({
                      url: '../index/index',
                    })
                  }
                })
              } else {
                wx.showModal({
                  title: '提醒',
                  content: res.data.msg,
                  showCancel: false
                })
              }
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
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
          test_code: res.data
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
      title: '用户登录'
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