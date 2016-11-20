(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Category page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/main-categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail page
  .state('items', {
    url: '/categories/{category}',
    templateUrl: 'src/data/templates/main-items.template.html',
    controller: 'ItemsController as items',
    params: {
      category: null
    },
    resolve: {
      dishes: ['MenuDataService', '$stateParams',
        function (MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
    }
  });

}

})();
