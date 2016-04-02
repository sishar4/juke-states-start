'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($urlRouterProvider, $locationProvider){
    // when there is an empty route, redirect to /index   
    $urlRouterProvider.when('', '/albums');

    $urlRouterProvider.when('/artists/:id', '/artists/:id/albums');

    $locationProvider.html5Mode({
    	enabled: true,
    	requireBase: false
    });
});