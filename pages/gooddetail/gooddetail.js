// pages/gooddetail/gooddetail.js
var app = getApp();

var Pai = require('../../dist/index');

Page(Object.assign({}, Pai.Toast, {

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  closeDialog(){
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  addCart() {
    this.setData({
      showDialog: !this.data.showDialog
    });
    this.showPaiToast('加入购物车成功');
  }
}))