'use strict';

/* Controllers */

var userAdminControllers = angular.module('userAdminControllers', []);

userAdminControllers.controller('UserListCtrl', ['$scope', '$firebase', 'fbURL', '$location', 'FireBaseCustomers',
    function($scope, $firebase, fbURL, $location, FireBaseCustomers) {
        $scope.users = FireBaseCustomers;
        $scope.editUser = function (user) {
            user.isDirty = true;
        }
        $scope.saveUser = function (user) {
            user.isDirty = undefined;
            var userUrl = fbURL + user.$id;
            $scope.editedUser = $firebase(new Firebase(userUrl));
            $.extend(true, $scope.editedUser, user);
            $scope.editedUser.$save();
        }
        $scope.deleteUser = function (user) {
            var userUrl = fbURL + user.$id;
            $scope.editedUser = $firebase(new Firebase(userUrl));
            $scope.editedUser.$remove();
            $location.path('/');
        }
    }]);

userAdminControllers.controller('UserAddCtrl', ['$scope', '$location', '$timeout', 'FireBaseCustomers',
    function($scope, $location, $timeout, FireBaseCustomers) {
        $scope.addUser = function() {
            FireBaseCustomers.$add($scope.customer, function() {
              //  $timeout(function() { $location.path('/'); });
            });
            $scope.result = "SUCCESSFULLY ADDED!";
        }
    }]);

userAdminControllers.controller('UserDetailCtrl', ['$scope', '$firebase', 'fbURL', '$routeParams', 'FireBaseCustomers',
    function($scope, $firebase, fbURL, $routeParams, FireBaseCustomers) {
        var userURL = fbURL + $routeParams.id;
        $scope.user = $firebase(new Firebase(userURL));
    }]);
