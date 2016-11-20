(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'dishes'];
function ItemsController(MenuDataService, dishes) {
  var mainList = this;
  mainList.dishes = dishes;
}

})();
