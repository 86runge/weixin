// pages/gooddetail/gooddetail.js
var app = getApp();

var Pai = require('../../dist/index');

Page(Object.assign({}, {

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    dis_btn: 'dis_btn',
    single_price: '',
    sub_price: '15.20 - 58.60',
    good_num: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title = options.title;
    // 根据传过来的id 拿到制定商品
    this.setData({
      title: options.title
    })
  },

  /**
   * 数量选择
   */
  reduceNo(e) {
    var dis_btn = this.data.dis_btn;
    var num = e.target.dataset.num;
    var good_num = num - 1;
    console.log(good_num);
    if (num < 3) {
      good_num = 1;
      this.setData({
        dis_btn: 'dis_btn'
      })
    }
    if (good_num > 1) {
      this.setData({
        dis_btn: ''
      })
    }
    var single_price = this.data.single_price;
    var sub_price = (good_num * single_price).toFixed(2);
    this.setData({
      good_num: good_num,
      sub_price: sub_price,
    });
  },

  addNo(e) {
    var dis_btn = this.data.dis_btn;
    var num = e.target.dataset.num;
    var good_num = num + 1;
    var single_price = this.data.single_price;
    var sub_price = (good_num * single_price).toFixed(2);
    this.setData({
      good_num: good_num,
      sub_price: sub_price,
      dis_btn: ''
    });
  },

  /**
   * 切换item
   */
  tabFun(e) {
    var index = e.target.dataset.index;
    var tabArr = {};
    tabArr.topIndex = index;
    tabArr.boxIndex = index;
    var spec_list = this.data.spec_list;
    var single_price = (spec_list[index].price).toFixed(2);
    this.setData({
      good_num: 1,
      tabArr: tabArr,
      single_price: single_price,
      sub_price: single_price
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
  },
}))