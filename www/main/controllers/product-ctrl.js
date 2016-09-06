'use strict';
angular.module('main')
  .controller('ProductCtrl', function ($log, $state, Products) {

    this.product = { photo: 'main/assets/images/luchetti.jpg', name: 'Fideos Luchetti', price: 26 },

    this.addToList = function () {
      Products.addProduct(this.product);
      $state.go('main.list');
    };
    this.compareProducts = function () {
      Products.setCompared(this.product);
      $state.go('main.compared', {id: undefined, compared: true});
    };

  })
  .controller('ListCtrl', function ($scope, $ionicPopup, $log, Camera, $state, Products) {

    this.products = Products.getCurrentCart().products;

    this.calculateBetterOption = function () {
      $state.go('main.compared');
    };

    var myPopup ;

    this.openCamera = function () {
      // An elaborate, custom popup
      myPopup = $ionicPopup.show({
        template: '<div class="list">' +
        '<a class="item item-icon-left" ng-click="ctrl.takePicture()"> ' +
        '<i class="icon ion-camera"></i> Tomar foto' +
      '</a>' +
      '<a class="item item-icon-left" ng-click="ctrl.getPicture()">' +
        '<i class="icon ion-image"></i> Seleccionar una imagen' +
        '</a>' +
        '</div>',
        title: 'Escanee su producto',
        scope: $scope,
        buttons: []
      });

      myPopup.then(function (res) {
        $log.log('Tapped!', res);
      });
    };

    var cameraCtrl = this;
    this.pictureTaken = false;

    cameraCtrl.takePicture = function () {
      if (myPopup) { myPopup.close(); }
      var options = {
        quality: 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 1
      };

      Camera.getPicture(options).then(function (imageData) {
        pictureSuccess(imageData);
      }, function (err) {
        $log.log(err);
      });

    };

    function pictureSuccess (imageData) {
      cameraCtrl.picture = imageData;
      cameraCtrl.pictureTaken = true;
      if (myPopup) { myPopup.close(); }
      $state.go('main.product');
    }

    cameraCtrl.getPicture = function () {
      if (myPopup) { myPopup.close(); }
      var options = {
        quality: 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 0
      };

      Camera.getPicture(options).then(function (imageData) {
        pictureSuccess(imageData);
      }, function (err) {
        $log.log(err);
      });
    };

  });
