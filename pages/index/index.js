//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper_array: [
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2613106559,1305955192&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2555755433,2115085325&fm=27&gp=0.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194117926&di=533739005a0480aa41200e0fd5298882&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F29381f30e924b899635a000168061d950a7bf6a1.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194160725&di=8cbf66e4b7e161868177b308c67415ba&imgtype=0&src=http%3A%2F%2Fimg.ivsky.com%2Fimg%2Fbizhi%2Fpre%2F201507%2F29%2Fsaber-002.jpg'
    ],
    saller_array: [
      {
        url: '../saller/saller?title=taobao',
        img_src: 'https://i3.sinaimg.cn/gm/2014/0827/U10753P115DT20140827150646.png',
        name_cn: "淘宝"
      },
      {
        url: '../saller/saller?title=tianmao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194535242&di=ad889659a2633ade7556aa6ec5d54a29&imgtype=0&src=http%3A%2F%2Fis5.mzstatic.com%2Fimage%2Fthumb%2FPurple3%2Fv4%2F79%2Fa1%2F00%2F79a10060-9f3c-24ef-e240-56bd2f94323d%2Fmzl.tmimsobs.png%2F0x0ss-85.jpg',
        name_cn: "天猫"
      },
      {
        url: '../saller/saller?title=jindong',
        img_src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=47539879,1216349844&fm=27&gp=0.jpg',
        name_cn: "京东"
      },
      {
        url: '../saller/saller?title=guomei',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505194608252&di=cbfa27e9594d8355a0c7931758aaa567&imgtype=0&src=http%3A%2F%2Fwww.ncss.org.cn%2Fbest%2Flogo%2F18680792211.jpg',
        name_cn: "国美"
      }
    ],
    hot_array: [
      {
        title: '热',
        sub_title: '热',
        content: '而且翁热热无若翁让我去二翁'
      },
      {
        title: '打算',
        sub_title: '阿斯蒂芬',
        content: '士大夫撒发生地方发士大夫撒飞洒地方'
      },
      {
        title: 'V字形',
        sub_title: '赤子之心',
        content: '在V型从V型橙VXVV操作'
      },
    ],
    watch_array: [
      {
        title: '热',
        sub_title: '热',
        content: 'iuiytiutiuyityuiyuiy'
      },
      {
        title: '打算',
        sub_title: '阿斯蒂芬',
        content: 'jhgjfhjghjgfjghderuey'
      },
      {
        title: 'V字形',
        sub_title: '赤子之心',
        content: 'ffdggfjhhjhjkytiyudjghhg'
      },
    ],
    good_array_01: [
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284866182&di=84142c8d32b8638547c94312e69b3e1c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F87%2F11i58PICMAT_1024.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284880845&di=c20db4a6692a2bbf79b5ac4339ebfbe2&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100316140450%2F161003140450-14.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284897343&di=61492e7500b19beb473e3f63a6b40f42&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150613%2F0035035581222830_b.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284889778&di=1aae438cb7d6153d2e21a796a016d6a0&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141127%2Fsy_75918321115.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505285018925&di=80d7da5b925cb6ac0cc087ea5326c1f1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F79%2F84v58PIC7Yg_1024.jpg',
        price: '￥24.50'
      }      
    ],
    good_array_02: [
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284866182&di=84142c8d32b8638547c94312e69b3e1c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F87%2F11i58PICMAT_1024.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284880845&di=c20db4a6692a2bbf79b5ac4339ebfbe2&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100316140450%2F161003140450-14.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284897343&di=61492e7500b19beb473e3f63a6b40f42&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150613%2F0035035581222830_b.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284889778&di=1aae438cb7d6153d2e21a796a016d6a0&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141127%2Fsy_75918321115.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505285018925&di=80d7da5b925cb6ac0cc087ea5326c1f1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F79%2F84v58PIC7Yg_1024.jpg',
        price: '￥24.50'
      }      
    ],
    good_array_03: [
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284866182&di=84142c8d32b8638547c94312e69b3e1c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F87%2F11i58PICMAT_1024.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284880845&di=c20db4a6692a2bbf79b5ac4339ebfbe2&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100316140450%2F161003140450-14.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284897343&di=61492e7500b19beb473e3f63a6b40f42&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150613%2F0035035581222830_b.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284889778&di=1aae438cb7d6153d2e21a796a016d6a0&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141127%2Fsy_75918321115.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505285018925&di=80d7da5b925cb6ac0cc087ea5326c1f1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F79%2F84v58PIC7Yg_1024.jpg',
        price: '￥24.50'
      }      
    ],
    good_array_04: [
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284866182&di=84142c8d32b8638547c94312e69b3e1c&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F87%2F11i58PICMAT_1024.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284880845&di=c20db4a6692a2bbf79b5ac4339ebfbe2&imgtype=0&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100316140450%2F161003140450-14.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284900049&di=a527c32dd6b7e7599958404cfb10f819&imgtype=0&src=http%3A%2F%2Fpic27.nipic.com%2F20130130%2F11827714_143106559178_2.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284897343&di=61492e7500b19beb473e3f63a6b40f42&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150613%2F0035035581222830_b.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505284889778&di=1aae438cb7d6153d2e21a796a016d6a0&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141127%2Fsy_75918321115.jpg',
        price: '￥24.50'
      },
      {
        url: '../gooddetail/gooddetail?title=mihoutao',
        img_src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505285018925&di=80d7da5b925cb6ac0cc087ea5326c1f1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F88%2F79%2F84v58PIC7Yg_1024.jpg',
        price: '￥24.50'
      }      
    ],
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

  }
})