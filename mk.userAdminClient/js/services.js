'use strict';

/* Services */

var userAdminServices = angular.module('userAdminServices', [])
.factory('FireBaseCustomers', function($firebase, fbURL) {
    return $firebase(new Firebase(fbURL));
})

/*

var userAdminServices = angular.module('userAdminServices', ['ngResource']);

userAdminServices.factory('RESTBackend', ['$resource',
    function($resource){
        var res = $resource(
            '/api/customer/:id',
            {id: "@id"},
            {
                'update': { method:'PUT' }

            }
        );

        return res;
    }]);
*/
