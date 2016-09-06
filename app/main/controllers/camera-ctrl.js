'use strict';
angular.module('main')
  .controller('CameraCtrl', function (Camera) {

    var cameraCtrl = this;
    this.pictureTaken= false;

    cameraCtrl.takePicture = function () {

      var options = {
        quality : 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 1
      };

      Camera.getPicture(options).then(function(imageData) {
        cameraCtrl.picture = imageData;
        cameraCtrl.pictureTaken= true;
      }, function(err) {
        console.log(err);
      });

    };

    cameraCtrl.getPicture = function () {

      var options = {
        quality: 75,
        targetWidth: 200,
        targetHeight: 200,
        sourceType: 0
      };

      Camera.getPicture(options).then(function (imageData) {
        cameraCtrl.picture = imageData;
        cameraCtrl.pictureTaken= true;
      }, function (err) {
        console.log(err);
      });
    };

  });
