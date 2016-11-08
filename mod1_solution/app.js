(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckContainer', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchMessage = "";

  $scope.checkIfTooMuch = function () {
    var count = $scope
            .lunchMenu.split(',')
            .filter(n=>n.trim())
            .filter(n=>n)
            .length;
    var color = "green";
    if (count < 1) {
      $scope.lunchMessage = "Please enter data first";
      color = "red";
    } else if (count < 4) {
      $scope.lunchMessage = "Enjoy!";
    } else {
      $scope.lunchMessage = "Too much!";
    }
    $scope.lunchMessageColor = color;
    $scope.lunchMenuColor = color;
  };
}

})();
