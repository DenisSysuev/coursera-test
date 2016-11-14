(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = "";
  narrow.getMatchedMenuItems = function() {
    if (narrow.searchTerm) {
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
      promise.then(function (response) {
        narrow.items = response;
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      narrow.items = [];
    }
  }

  narrow.removeItem = function (index) {
    narrow.items.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var foundItems = result.data.menu_items;
      return foundItems.filter(n => n.description
                                     .toLowerCase()
                                     .indexOf(searchTerm.toLowerCase()) !== -1);
    }).catch(function (error) {
      console.log(error);
    })
  };
}

})();
