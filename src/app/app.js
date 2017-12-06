(function () {
    'use strict';

    // Declare app level module which depends on views, and components.
    angular.module('app', [
        'ui.router'
    ])
     
    .config(['$stateProvider', '$compileProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $compileProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

        // Disable debug info
        $compileProvider.debugInfoEnabled(true);

        // Default view
        $urlRouterProvider.otherwise("/");

        // $locationProvider.html5Mode(true);
        
        var index = {
            name: 'index',
            url: '/',
            controller: 'IndexController',
            templateUrl: '/src/app/index/index.controller.html'
        }

        // ...
        
        $stateProvider.state(index);

        // ...

    }])
    
    .run(['$templateCache', function($templateCache) {
        //
    }]);

})();
