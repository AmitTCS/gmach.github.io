'use strict';

/* Services */
var agentAssistServices = angular.module('agentAssistServices', [])
    .factory('AgentAssistNotes', function() {
        var js = '[{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2W0IAK"},"Name":"response1","ResponseFull__c":"Your call barring will be activated in the next 30 days. Please make sure you agree to the terms and conditions of your contract.","Id":"a3hL0000000K2W0IAK","order__c":1,"Response_Abbrev__c":"callbarringactivated"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2W5IAK"},"Name":"response2","ResponseFull__c":"Your call barring will be deactivated at the end of this month. Please ensure all relevant accounts are also closed.","Id":"a3hL0000000K2W5IAK","order__c":2,"Response_Abbrev__c":"callbarringdeactivated"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WAIA0"},"Name":"response3","ResponseFull__c":"Your service for international roaming will be added to your existing account","Id":"a3hL0000000K2WAIA0","order__c":3,"Response_Abbrev__c":"internationalroaming"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WFIA0"},"Name":"response4","ResponseFull__c":"We are experiencing a service outage with our 4G network. Please be patient while we resolve this.","Id":"a3hL0000000K2WFIA0","order__c":4,"Response_Abbrev__c":"4Gserviceoutage"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WKIA0"},"Name":"response5","ResponseFull__c":"The customer wishes to upgrade their number from Optus. Make sure to ask for their PIN to unlock.","Id":"a3hL0000000K2WKIA0","order__c":5,"Response_Abbrev__c":"upgradeyournumber"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WPIA0"},"Name":"response6","ResponseFull__c":"Inform customer of our recent campaigns and hot offers","Id":"a3hL0000000K2WPIA0","order__c":6,"Response_Abbrev__c":"hotoffers"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WUIA0"},"Name":"response7","ResponseFull__c":"Transfer the customers address phone contacts over from another carrier.","Id":"a3hL0000000K2WUIA0","order__c":7,"Response_Abbrev__c":"transfercontacts"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WZIA0"},"Name":"response8","ResponseFull__c":"Identify with customer their internet usage and bandwidth issues","Id":"a3hL0000000K2WZIA0","order__c":8,"Response_Abbrev__c":"identifyinternetissues"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WeIAK"},"Name":"response9","ResponseFull__c":"Inform the customer of our flagfall pricing and charges","Id":"a3hL0000000K2WeIAK","order__c":9,"Response_Abbrev__c":"informflagfall"},{"attributes":{"type":"AgentAssistNote__c","url":"/services/data/v29.0/sobjects/AgentAssistNote__c/a3hL0000000K2WjIAK"},"Name":"response10","ResponseFull__c":"Resolve the customer complaint with our service","Id":"a3hL0000000K2WjIAK","order__c":10,"Response_Abbrev__c":"ResolveCustomerComplaint"}]';
        return JSON.parse(js);//{!AgentAssistNotesJson};
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
