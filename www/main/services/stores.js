'use strict';
angular.module('main')
  .service('Stores', function () {

    this.stores = [
      { photo: 'main/assets/images/carrefour.jpeg', location: 'main/assets/images/carrefour-loc.png', name: 'Carrefour Don Torcuato', price: 1.8, distance: 1.0},
      { photo: 'main/assets/images/dia.png', location: 'main/assets/images/dia-loc.png', name: 'Supermercado Día Torcuato', price: 2.3, distance: 1.2},
      { photo: 'main/assets/images/pollos.png', location: 'main/assets/images/pollos-loc.png', name: 'Pollos Hermanos', price: 4.2, distance: 0.3}
    ];

    this.getStore = function (idx) {
      return this.stores[idx];
    };


  });
