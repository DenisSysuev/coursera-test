(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['$state', 'UserService'];
function SignupController($state, UserService) {
  var $ctrl = this;
  $ctrl.user = UserService.getUser();
  $ctrl.isSaved = UserService.getIsSaved;

  $ctrl.signup = function() {
    UserService.save($ctrl.user);
  };
}


})();
