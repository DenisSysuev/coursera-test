(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['user', 'isSaved', 'menuItem'];
function MyInfoController(user, isSaved, menuItem) {
  var $ctrl = this;
  $ctrl.user = user;
  $ctrl.isSaved = isSaved;
  $ctrl.menuItem = menuItem;
}

})();
