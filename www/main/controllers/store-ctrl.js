'use strict';
angular.module('main')
.controller('StoreCtrl', function ($stateParams, Stores) {

  if ($stateParams && $stateParams.id) { this.store = Stores.getStore($stateParams.id); }
  else { this.store = Stores.stores[0]; }

});
