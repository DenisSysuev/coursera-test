(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.user = {};
  service.isSaved = false;

  service.save = function (user) {
    service.user = user;
    service.isSaved = true;
  };

  service.getIsSaved = function () {
    return service.isSaved;
  };

  service.getUser = function () {
    return service.user;
  };

}

})();
