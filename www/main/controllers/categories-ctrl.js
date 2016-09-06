'use strict';
angular.module('main')
  .controller('CategoriesCtrl', function ($log, $state, Categories) {

    this.categories = Categories.categories;

    this.openCategories = function (cat) {
      cat.opened = !cat.opened;
      for (var i = 0; i < cat.categories.length; i++) {
        var c = cat.categories[i];
        c.show= cat.opened;
        c.opened= !cat.opened;
        if (!cat.opened && c.categories) this.openCategories(c);
      }
    }


  });
