// pages/balance/balance.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    has_address: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var has_address = this.data.has_address;
    //获取本地数据
    wx.getStorage({
      key: 'people_name',
      success: function (res) {
        that.setData({ people_name: res.data});
        that.setData({
          has_address: !has_address
        })
        console.log(res.data, has_address);
      }
    });
    wx.getStorage({
      key: 'people_phone',
      success: function (res) {
        console.log(res.data);
        that.setData({ people_phone: res.data });
      }
    });
    wx.getStorage({
      key: 'people_region',
      success: function (res) {
        console.log(res.data);
        that.setData({ people_region: res.data });
      }
    });
    wx.getStorage({
      key: 'people_address',
      success: function (res) {
        console.log(res.data);
        that.setData({ people_address: res.data });
      }
    });
    wx.getStorage({
      key: 'people_code',
      success: function (res) {
        console.log(res.data);
        that.setData({ people_code: res.data });
      }
    });
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