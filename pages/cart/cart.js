// pages/cart/cart.js

const app = getApp()

Page(Object.assign({}, {

  /**
   * 页面的初始数据
   */
  data: {
    cart_list: [],
    total_price: 0,
    selectAllStatus: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      hasList: true,
      editDelete: false,
      quantity: {
        quantity: 1,
        min: 1,
        max: 999
      },
      cart_list: [
        {
          id: 1,
          selected: true,
          url: '../gooddetail/gooddetail?title=mihoutao',
          img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
          good_title: '猕猴桃，好吃的猕猴桃，快来买',
          single_price: '24.50',
          num: 4,
        },
        {
          id: 2,
          selected: true,
          url: '../gooddetail/gooddetail?title=mihoutao',
          img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
          good_title: '猕猴桃，好吃的猕猴桃，快来买',
          single_price: '24.50',
          num: 4,
        },
      ]
    });
    this.getTotalPrice();
  },
  // 计算价格
  getTotalPrice() {
    var cart = this.data.cart_list;
    var total = 0;
    for (var i in cart) {
      if (cart[i].selected) {
        total += cart[i].num * cart[i].single_price;
      }
    };
    this.setData({
      cart_list: cart,
      total_price: total.toFixed(2)
    })
  },
  // 选择单个商品
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let cart = this.data.cart_list;
    const selected = cart[index].selected;
    cart[index].selected = !selected;
    var selected_no = 0;
    let selectAllStatus = this.data.selectAllStatus;
    for (let i in cart) {
      if (cart[i].selected == !true) {
        selected_no += 1;
      }
    }
    if (selected_no > 0) {
      selectAllStatus = false;
    } else {
      selectAllStatus = true;
    }
    console.log(selected_no);
    this.setData({
      selectAllStatus: selectAllStatus,
      cart_list: cart
    });
    this.getTotalPrice();
  },
  // 全选
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cart = this.data.cart_list;

    for (let i = 0; i < cart.length; i++) {
      cart[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      cart_list: cart
    });
    this.getTotalPrice();
  },
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let cart = this.data.cart_list;
    let num = cart[index].num;
    num = num + 1;
    cart[index].num = num;
    this.setData({
      cart_list: cart
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    console.log(index);
    let cart = this.data.cart_list;
    let num = cart[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    cart[index].num = num;
    this.setData({
      cart_list: cart
    });
    this.getTotalPrice();
  },
  // 编辑
  editDelete(e) {
    var edit = this.data.editDelete;
    this.setData({
      editDelete: !edit,
    });
    console.log(edit);
    console.log(this.data.editDelete);
  },
  // 删除商品
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let cart = this.data.cart_list;
    cart.splice(index, 1);
    this.setData({
      cart_list: cart
    });
    if (!cart.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  handlePaiQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  },
  checked_all() {
    this.setData({
      check_item: !this.data.check_item,
      check_all: !this.data.check_all
    })
  },
  checked_item(e) {
    var data = {};
    console.log(e.currentTarget);
    this.setData({

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

  },
}))