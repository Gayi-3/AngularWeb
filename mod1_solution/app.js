(function () {
    'use strict';
  
    // Declare the AngularJS app
    angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);
  
    // Define the controller
    LunchCheckController.$inject = ['$scope'];
  
    function LunchCheckController($scope) {
      $scope.lunchItems = '';  // Model for the textbox input
      $scope.message = '';      // Message to be displayed
      $scope.messageClass = ''; // Class for styling the message
  
      // Function to check the lunch items input by the user
      $scope.checkLunchItems = function () {
        if (!$scope.lunchItems.trim()) {
          $scope.message = 'Please enter data first';
          $scope.messageClass = 'error';
        } else {
          // Split the items by commas and filter out empty strings
          var items = $scope.lunchItems.split(',').filter(function (item) {
            return item.trim() !== '';  // Ignore empty items like ', ,' or ' , '
          });
  
          // Display appropriate message based on the number of items
          if (items.length <= 3) {
            $scope.message = 'Enjoy!';
            $scope.messageClass = 'success';
          } else {
            $scope.message = 'Too much!';
            $scope.messageClass = 'warning';
          }
        }
      };
    }
  })();
  