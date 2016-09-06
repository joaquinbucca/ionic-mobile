'use strict';
angular.module('main')
  .service('Products', function () {

    var products = [
      { photo: 'main/assets/images/pringles.jpeg', name: 'Pringles Queso Cheddar', price: 46.00 },
      { photo: 'main/assets/images/villavicencio.jpg', name: 'Agua Mineral Villavicencio', price: 17.95 },
      { photo: 'main/assets/images/quick.jpg', name: 'Sopa Quick', price: 22.79 },
      { photo: 'main/assets/images/sancor.jpg', name: 'Leche Sancor', price: 15.09 }
    ];

    this.carts = [ {name: 'Semanal', products: products} ];
    this.current = 0;

    this.getProduct = function (idx) {
      return this.getCurrentCart().products[idx];
    };

    this.getCurrentCart = function () {
      return this.carts[this.current];
    };

    this.setCompared = function (product) {
      this.compared = product;
    };

    this.setCurrentCart = function (cart) {
      for (var i = 0; i < this.carts.length; i++) {
        var c = this.carts[i];
        if (c.name == cart.name) { this.current = i; }
      }
    };

    this.isCurrentCart = function (cart) {
      return cart.name == this.getCurrentCart().name;
    };

    this.addNewCart = function (name) {
      var cart = {name: name, products: []};
      this.carts.push(cart);
      this.setCurrentCart(cart);
    };

    this.addProduct = function (product) {
      this.getCurrentCart().products.push(product);
    };

  });
