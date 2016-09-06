'use strict';
angular.module('main')
  .controller('ProductCtrl', function ($log, $state) {

    this.addToList = function () {
      $state.go('main.list');
    };

  })
  .controller('ListCtrl', function ($log, $state) {

    this.openCamera = function () {
      $state.go('main.camera');
    };

  });
