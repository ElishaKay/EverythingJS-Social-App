var app = angular.module('Amp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');
  
  // First Page
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'partial-home.html',
    controller: 'MainCtrl'
  })
  .state('home.list', {
  	url: '/list',
  	templateUrl: 'home-list.html',
  })
  .state('home.list2', {
    url: '/list2',
    templateUrl: 'home-list2.html',
  })
  .state('beer', {
      url: '/beers/:id', 
      controller: 'BeersCtrl',
      templateUrl: 'beer.html'
  })


});

// app.filter('reverse', function() {
//   return function(items) {
//     return items.slice().reverse();
//   };
// });