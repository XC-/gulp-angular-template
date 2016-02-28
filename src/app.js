/**
 * Created by Aki Mäkinen on 28.2.2016.
 *
 * Hello World template
 */
import '../node_modules/angular/angular';
import '../node_modules/angular-route/angular-route';

import Controllers from './controllers/controllers';
import Services from './services/services';
import Models from './models/models';
import Components from './components/components';

'use strict';

var app = angular.module('App', [
    Components.name,
    Controllers.name,
    Services.name,
    Models.name,
    'ngRoute'
  ])
  .constant('appConfig',  {

  })
  .config(['$routeProvider',
    function($routeProvider) {
      'ngInject';
      $routeProvider
        .when('/', {
          templateUrl: 'controllers/Hello/hello.html',
          controller: 'Hello'
        })
        .when('/about', {
          templateUrl: 'controllers/World/world.html',
          controller: 'World'
        });
    }
  ])
  .run(function() {
    console.log('Saying Hello to the World...');
    setTimeout(function() {
      console.warn('...the World did not answer. :(');
    }, 5000);
  });

export default app;