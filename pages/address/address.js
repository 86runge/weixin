// pages/address/address.js
var app = getApp();

var Pai = require('../../dist/index');

Page(Object.assign({}, Pai.Toast, {

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    region: ['湖北省', '武汉市', '武昌区'],
    customItem: '全部'
  },

  /**
   * 提示框
   */
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

  /**
   * 地区选择器
   */
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 表单提交
   */
  formSubmit: function (e) {
    var objData = e.detail.value;
    console.log(objData);
    var phone_reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (objData.people_name == "") {
      this.showPaiToast('请填写用户名');
      return false;
    }
    if (!phone_reg.test(objData.people_phone)) {
      this.showPaiToast('请填写正确的电话');
      return false;
    }
    if (objData.people_address == "") {
      this.showPaiToast('请填写详细地址');
      return false;
    }
    wx.setStorage({
      key: 'people_name',
      data: objData.people_name
    });
    wx.setStorage({
      key: 'people_phone',
      data: objData.people_phone
    });
    wx.setStorage({
      key: 'people_region',
      data: objData.people_region
    });
    wx.setStorage({
      key: 'people_address',
      data: objData.people_address
    });
    wx.setStorage({
      key: 'people_code',
      data: objData.people_code
    });
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
}))