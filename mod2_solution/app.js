(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getItems();
  toBuyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
  toBuyList.isEmpty = function () {
    return toBuyList.items.length === 0;
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtList = this;
  alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  alreadyBoughtList.isEmpty = function () {
    return alreadyBoughtList.items.length === 0;
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var items = [
    { name: "of milk", quantity: "2 cartons" },
    { name: "donuts", quantity: "200" },
    { name: "cookies", quantity: "300" },
    { name: "of chocolate", quantity: "5 bars" },
    { name: "of crisps", quantity: "10e10 packets" }
  ];

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
