(function () {
    'use strict';
  
    // Declare the AngularJS app
    angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  
    // Controller for the ToBuy list
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuyCtrl = this;
      toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
  
      // Function to move item to "Already Bought" list
      toBuyCtrl.buyItem = function (item) {
        ShoppingListCheckOffService.buyItem(item);
      };
    }
  
    // Controller for the AlreadyBought list
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtCtrl = this;
      boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }
  
    // Service to manage the shopping lists
    function ShoppingListCheckOffService() {
      var service = this;
  
      // Predefined "To Buy" list
      var toBuyItems = [
        { name: "cookies", quantity: 10 },
        { name: "chips", quantity: 5 },
        { name: "milk", quantity: 2 },
        { name: "bread", quantity: 1 },
        { name: "butter", quantity: 3 }
      ];
  
      // "Already Bought" list
      var boughtItems = [];
  
      // Function to get "To Buy" items
      service.getToBuyItems = function () {
        return toBuyItems;
      };
  
      // Function to get "Already Bought" items
      service.getBoughtItems = function () {
        return boughtItems;
      };
  
      // Function to move item from "To Buy" list to "Bought" list
      service.buyItem = function (item) {
        var index = toBuyItems.indexOf(item);
        if (index !== -1) {
          toBuyItems.splice(index, 1); // Remove item from "To Buy"
          boughtItems.push(item);      // Add item to "Bought"
        }
      };
    }
  })();
  