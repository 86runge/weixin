var Pai = require('../../dist/index');

Page(Object.assign({}, Pai.Quantity, {
  data: {
    quantity1: {
      quantity: 1,
      min: 1,
      max: 20
    },
    quantity2: {
      quantity: 1,
      min: 1,
      max: 1
    },
    quantity3: {
      quantity: 1,
      min: 1,
      max: 20
    }
  },

  handlePaiQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  }
}));
