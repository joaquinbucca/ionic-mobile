'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      controller: 'MenuCtrl as menu'
    })
      .state('login', {
        url: '/login',
        templateUrl: 'main/templates/login.html',
        controller: 'LoginCtrl as ctrl'
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/profile.html',
            controller: 'ProfileCtrl as ctrl'
          }
        }
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
      .state('main.categories', {
        url: '/categories',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/categories.html',
            controller: 'CategoriesCtrl as ctrl'
          }
        }
      })
      .state('main.compared', {
        url: '/compared/:id/:compared',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/comparation-list.html',
            controller: 'ComparedCtrl as ctrl'
          }
        }
      })
      .state('main.store', {
        url: '/store:id',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/store.html',
            controller: 'StoreCtrl as ctrl'
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
