'use strict';

/**
 * @ngdoc overview
 * @name macamenApp
 * @description
 * # macamenApp
 *
 * Main module of the application.
 */
angular
  .module('macamenApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'isteven-multi-select',
    'angular-growl',
    'atomic-notify',
    'inform'







  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
       .when('/citas', {
         templateUrl: 'views/citas.html',
         controller:'citasCtrl'
       })
       .when('/empleado', {
                  templateUrl: 'views/empleado.html',
                  controller:'empleadoCtrl'
        })
       .when('/cliente', {
                templateUrl: 'views/cliente.html',
                controller:'clienteCtrl'

              })
       .when('/servicio', {
                       templateUrl: 'views/servicio.html',
                       controller:'servicioCtrl'
                     })
        .when('/mostrarCitas', {
                               templateUrl: 'views/mostrarCitas.html',
                               controller:'mostrarCitasCtrl'
                             })
      .otherwise({
        redirectTo: '/'
      });
  });
