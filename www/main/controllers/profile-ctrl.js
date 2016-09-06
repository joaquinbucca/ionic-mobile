'use strict';
angular.module('main')
  .controller('ProfileCtrl', function ($log, $state, $ionicPopup, $scope, Products, $window, Locations) {

    this.carts = Products.carts;
    this.locations = Locations.locations;
    this.showCart = true;
    var myPopup;
    var ctrl = this;

    this.showCarts = function () {
      this.showCart = true;
    };

    this.showLocations = function () {
      this.showCart = false;
    };

    this.selectCart = function (cart) {
      Products.setCurrentCart(cart);
      $state.go('main.list');
    };

    this.isCurrentCart = function (cart) {
      return Products.isCurrentCart(cart);
    };

    this.isCurrentLocation = function (location) {
      return Locations.isCurrentLocation(location);
    };

    this.newCart = function () {
      myPopup = $ionicPopup.show({
        template: '<div class="row">' +
        '<input type="text" class="form-control" ng-model="ctrl.name"/>' +
        '</div>',
        title: 'Nuevo carrito de compras',
        scope: $scope,
        buttons: [
          {
            text: '<b>Crear</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (ctrl.name) {
                Products.addNewCart(ctrl.name);
                ctrl.name= undefined;
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

    this.selectLocation = function (location) {
      Locations.setCurrentLocation(location);
    };

    this.newLocation = function () {
      myPopup = $ionicPopup.show({
        template: '<div class="row">' +
        '<input type="text" class="form-control" ng-model="ctrl.name"/>' +
        '</div>',
        title: 'Nueva ubicación',
        scope: $scope,
        buttons: [
          {
            text: '<b>Crear</b>',
            type: 'button-positive',
            onTap: function (e) {
              if (ctrl.name) {
                Locations.addNewLocation(ctrl.name);
                ctrl.name= undefined;
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
