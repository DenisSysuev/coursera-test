(function () {
"use strict";

angular.module('public').
directive('favdish', FavDishDirective);

FavDishDirective.$inject = ["MenuService"];
function FavDishDirective(MenuService) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.favdish = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          return true;
        }

        return MenuService.getMenuItem(modelValue);
      };
    }
  };
}

})();
