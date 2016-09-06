'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/list.html',
            controller: 'ListCtrl as ctrl'
          }
        }
      })
      .state('main.camera', {
        url: '/camera',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/camera.html',
            controller: 'CameraCtrl as ctrl'
          }
        }
      })
      .state('main.product', {
        url: '/list/product',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/product.html',
            controller: 'ProductCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
