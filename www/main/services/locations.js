'use strict';
angular.module('main')
  .service('Locations', function () {

    this.locations = [ {name: 'América 1991, Don Torcuato'} ];
    this.current = 0;

    this.getCurrentLocation = function () {
      return this.locations[this.current];
    };
    this.setCurrentLocation = function (location) {
      for (var i = 0; i < this.locations.length; i++) {
        var c = this.locations[i];
        if (c.name == location.name) { this.current = i; }
      }
    };

    this.isCurrentLocation = function (location) {
      return location.name == this.getCurrentLocation().name;
    };

    this.addNewLocation = function (name) {
      var location = {name: name };
      this.locations.push(location);
      this.setCurrentLocation(location);
    };

  });
