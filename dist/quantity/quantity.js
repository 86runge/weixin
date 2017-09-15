function handle(e, num) {
  var dataset = e.currentTarget.dataset;
  var componentId = dataset.componentId;
  var disabled = dataset.disabled;
  var quantity = +dataset.quantity;

  if (disabled) return null;

  callback.call(this, componentId, quantity + num);
}

function callback(componentId, quantity) {
  quantity = +quantity;
  var e = { componentId, quantity };
  console.info('[pai:quantity:change]', e);

  if (this.handlePaiQuantityChange) {
    this.handlePaiQuantityChange(e);
  } else {
    console.warn('页面缺少 handlePaiQuantityChange 回调函数');
  }
}

var Quantity = {
  _handlePaiQuantityMinus(e) {
    handle.call(this, e, -1);
  },

  _handlePaiQuantityPlus(e) {
    handle.call(this, e, +1);
  },

  _handlePaiQuantityBlur(e) {
    var dataset = e.currentTarget.dataset;
    var componentId = dataset.componentId;
    var max = +dataset.max;
    var min = +dataset.min;
    var value = e.detail.value;

    if (!value) {
      setTimeout(() => {
        callback.call(this, componentId, min);
      }, 16);
      callback.call(this, componentId, value);
      return '' + value;
    }

    value = +value;
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    callback.call(this, componentId, value);

    return '' + value;
  }
};

module.exports = Quantity;
