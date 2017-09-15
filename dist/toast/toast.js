module.exports = {
  showPaiToast(title, timeout) {
    var paiToast = this.data.paiToast || {};
    clearTimeout(paiToast.timer);

    // 弹层设置~
    paiToast = {
      show: true,
      title
    };
    this.setData({
      paiToast
    });

    var timer = setTimeout(() => {
      this.clearPaiToast();
    }, timeout || 3000);

    this.setData({
      'paiToast.timer': timer
    });
  },

  clearPaiToast() {
    var paiToast = this.data.paiToast || {};
    clearTimeout(paiToast.timer);

    this.setData({
      'paiToast.show': false
    });
  }
};
