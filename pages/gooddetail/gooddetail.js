// pages/gooddetail/gooddetail.js
var app = getApp();

var Pai = require('../../dist/index');

Page(Object.assign({}, Pai.Toast, Pai.Quantity, {

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    quantity: {
      quantity: 1,
      min: 1,
      max: 999
    },
    spec_list: [
      { spec: '葡萄 250g', price: 5.30 },
      { spec: '栗子 250g', price: 15.30 },
      { spec: '苹果 550g', price: 25.30 },
      { spec: '猕猴桃 250g', price: 5.30 },
      { spec: '蓝莓 250g', price: 14.30 },
      { spec: '桃子 450g', price: 5.30 },
      { spec: '香蕉 250g', price: 9.30 },
      { spec: '橘子 350g', price: 4.30 }
    ]
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
  closeDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  addCart() {
    this.setData({
      showDialog: !this.data.showDialog
    });
    this.showPaiToast('加入购物车成功');
  },
  handlePaiQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  }
}))