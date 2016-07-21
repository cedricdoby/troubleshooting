'use strict';

/**
 * @ngdoc overview
 * @name fortuneProjectApp
 * @description
 * # fortuneProjectApp
 *
 * Main module of the application.
 */

var angular = require('angular')


angular
  .module('fortuneProjectApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
