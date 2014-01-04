'use strict';

/* App Module */

var userAdminApp = angular.module('userAdminApp', [
    'firebase',
    'ngRoute',
    'userAdminControllers',
    'userAdminFilters',
    'userAdminServices'
])
.value('fbURL', 'https://useradmin.firebaseio.com/customers/')

userAdminApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/userLists', {
                templateUrl: 'partials/userlist.html',
                controller: 'UserListCtrl'
            }).
            when('/add', {
                templateUrl: 'partials/signup.html',
                controller: 'UserAddCtrl'
            }).
            when('/user/:id', {
                templateUrl: 'partials/userdetail.html',
                controller: 'UserDetailCtrl'
            }).
            otherwise({
                redirectTo: '/userLists'
            });
    }]);


$(function() {
    //alert( "ready!" );
});
