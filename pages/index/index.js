//index.js
//获取应用实例
const app = getApp()

const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    swiper_array: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2613106559,1305955192&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2555755433,2115085325&fm=27&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194117926&di=533739005a0480aa41200e0fd5298882&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F29381f30e924b899635a000168061d950a7bf6a1.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194160725&di=8cbf66e4b7e161868177b308c67415ba&imgtype=0&src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Fbizhi%2Fpre%2F201507%2F29%2Fsaber-002.jpg'
    ],
    good_array: [
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510224284440&di=f96396cc3231f3b28ceb088ba474e24d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F42166d224f4a20a4a21f45e19a529822720ed097.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510224309207&di=97aa634a4a2529ddefd0459a2e76a2df&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F730e0cf3d7ca7bcb7ea1360ab4096b63f624a839.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3694105844,2203538441&fm=27&gp=0.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510224372407&di=dcb77fabe44914804a6f96701e1c3e99&imgtype=0&src=http%3A%2F%2Fimg4.wxp114.com%2F201511%2F15%2F15-17-30-89-1.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510224398715&di=d82d44a2fe39b508cd877a3678178c4e&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F19%2F20%2F59%2F5684b96d46e6f_1024.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510224425404&di=2359dbf5e138d39ee274423cdf8ad869&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb219ebc4b74543a95a6cd3eb14178a82b90114a5.jpg',
        descript: '新鲜的水果，来自新西兰，快来看一看，尝一尝',
        price: '￥24.50'
      }
    ]
  },

  /**
   * 输入框操作
   */
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: util.apiUrl + '/server/get_all_good.php',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: function (res) {
        for (var i in res.data) {
          if (res.data[i][1] == '苹果') {
            var arr_01 = [];
            var good_arr_01 = that.data.good_array_01;
            arr_01.push(res.data[i]);
          }
        }
        // this.setData({
        //   test_code: res.data
        // })
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