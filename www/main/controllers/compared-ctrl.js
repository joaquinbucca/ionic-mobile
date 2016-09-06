'use strict';
angular.module('main')
  .controller('ComparedCtrl', function ($stateParams, Products, Stores, $log) {

    if ($stateParams && $stateParams.id) {
      this.isProduct = true;
      this.product = Products.getProduct($stateParams.id);
    }
    else {
      $log.log($stateParams.compared);
      if ($stateParams && $stateParams.compared) {
        this.isProduct = true;
        this.product = Products.compared;
      } else {
        this.isProduct = false;
        this.cart = Products.getCurrentCart();
        this.cart.price = 0;
        var products = this.cart.products;
        for (var i = 0; i < products.length; i++) {
          var prod = products[i];
          this.cart.price += prod.price;
        }
      }
    }

    this.stores = Stores.stores;

  });
