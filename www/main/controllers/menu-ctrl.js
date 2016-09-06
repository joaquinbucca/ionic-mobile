'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, $state, $ionicPopup, $scope, Products) {

  this.carts = Products.carts;
  var myPopup;
  var menu = this;

  this.selectCart = function (cart) {
    if (cart.name != Products.getCurrentCart().name) {
      Products.setCurrentCart(cart);
      if ($state.current.name == 'main.list') {
        $state.go($state.current, {}, {reload: true});
      }
      else {
        $state.go('main.list');
      }
    }
  };

  this.isCategoryView = function () {
    return $state.current.name == 'main.categories';
  };

  this.isCurrentCart = function (cart) {
    return Products.isCurrentCart(cart);
  };

  this.newCart = function () {
    myPopup = $ionicPopup.show({
      template: '<div class="row">' +
      '<input type="text" class="form-control" ng-model="menu.name"/>' +
      '</div>',
      title: 'Nuevo carrito de compras',
      scope: $scope,
      buttons: [
        {
          text: '<b>Crear</b>',
          type: 'button-positive',
          onTap: function (e) {
            if (menu.name) {
              Products.addNewCart(menu.name);
              if ($state.current.name == 'main.list') {
                $state.go($state.current, {}, {reload: true});
              }
              else { $state.go('main.list'); }
            } else {
              myPopup.close();
            }
          }
        }
      ]
    });

    myPopup.then(function (res) {
      $log.log('Tapped!', res);
    });
  };

});
