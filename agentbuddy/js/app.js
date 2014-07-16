
'use strict';


var agentApp = angular.module('agentApp', [
    'ui.bootstrap',
    'ui.utils',
    'agentDirectives',
    'agentControllers',
    'agentServices'
]);

var agentDirectives = angular.module('agentDirectives', []).
directive('ngEmailSection', function($compile) {
    return {
        restrict: 'C',
        require: '^ngModel',
        replace: true,
        scope: {
            ngModel: '='
        },
        link: function(scope, element, attrs) {
            element.html('<pre>' + scope.ngModel.template.convertedBody__c + '</pre>').show();
            var templateFields = scope.ngModel.templateFields;
            var inputs = element.find('input');
            for (var i = 0; i < inputs.length; i++) {
                var code = templateFields[i].Code__c;
                var value = scope.$parent.activeSkill.parametersMap[code].value;
                if (value == undefined || value == '') {
                    $(inputs[i]).focus();
                    break;
                }
            }
            $compile(element.contents())(scope);
        }
    }
});

angular.module('agentServices', [])
.factory('Skills', function() {
    var js = '[{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004Si5IAE"},"Name":"How to be a guru","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004Si5IAE","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"There is no spoon."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiAIAU"},"Name":"We are the champions","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SiAIAU","Emails__c":"Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Once upon a time blah blah"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiFIAU"},"Name":"Header Promotion Email","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SiFIAU","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Your Promotion has been approved."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzaIAE"},"Name":"PlayerName","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Text","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzaIAE","Code__c":"PlayerName"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzfIAE"},"Name":"PlayerNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Number","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzfIAE","Code__c":"PlayerNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzkIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Text","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzkIAE","Code__c":"Name"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzpIAE"},"Name":"TotalAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Currency","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzpIAE","Code__c":"TotalAmount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SiKIAU","Emails__c":"Send Contract Email;Test Promotion Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Log in to the website for {!PlayerName} and join the clan. Your playernumber is {!PlayerNumber} and Name is {!Name}\\r\\n\\r\\nEnter for a total dollar amount of : {!TotalAmount}"}}],"skillGroupName":"TestSKillGroup","emailFrom":"test@test.com"},{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJTIA2"},"Name":"Call Barring Activated","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJTIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your call barring will be activated in the next 30 days. Please make sure you agree to the terms and conditions of your contract."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJQIA2"},"Name":"Call Barring Deactivated","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJQIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your call barring will be deactivated at the end of this month. Please ensure all relevant accounts are also closed."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJPIA2"},"Name":"International Roaming","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJPIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your service for international roaming will be added to your existing account"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJNIA2"},"Name":"4G Service Outage","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJNIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"We are experiencing a service outage with our 4G network. Please be patient while we resolve this."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJOIA2"},"Name":"Upgrade Your Number","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJOIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"The customer wishes to upgrade their number from Optus. Make sure to ask for their PIN to unlock."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJVIA2"},"Name":"Hot Offers","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJVIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Inform customer of our recent campaigns and hot offers"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJUIA2"},"Name":"Transfer Contacts","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJUIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Transfer the customers address phone contacts over from another carrier."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJRIA2"},"Name":"Identify Internet Issues","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJRIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Identify with customer their internet usage and bandwidth issues"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJSIA2"},"Name":"Inform Flagfall","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJSIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Inform the customer of our flagfall pricing and charges"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJMIA2"},"Name":"Resolve Customer Complaint","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SJMIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Resolve the customer complaint with our service"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbfIAE"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbfIAE","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbkIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Text","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbkIAE","Code__c":"Name"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JjvIAE"},"Name":"Number","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JjvIAE","Code__c":"Number"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SQVIA2","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Here’s the invoice you requested\\r\\n\\r\\nHi {!Name}\\r\\n\\r\\nInvoice Attached\\r\\nI have attached the invoice(s) you’ve requested. \\r\\n\\r\\nPlease find attached Invoice {!Number} for account {!BillingAccountNumber}"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbaIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","Id":"a3kL00000004SQaIAM"},"RecordType__c":"Text","Template__c":"a3kL00000004SQaIAM","Id":"a3mL00000004JbaIAE","Code__c":"Name"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SQaIAM","Emails__c":"Send Invoice;Terminate Customer","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Thanks for your time {!Name}. \\r\\n\\r\\nAll the best,\\r\\n\\r\\nGavin"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkIIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkIIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkNIAU"},"Name":"CreditAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkNIAU","Code__c":"CreditAmount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SWdIAM","Emails__c":"Send Invoice;Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Credit applied to your account \\r\\nAs discussed I have applied a credit of {!CreditAmount} to your account {!BillingAccountNumber}. The credit will appear on your next invoice."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkSIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkSIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkXIAU"},"Name":"Amount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkXIAU","Code__c":"Amount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SWiIAM","Emails__c":"Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Payment Taken \\r\\nThis is confirmation that i have processed a payment of {!Amount} on your account {!BillingAccountNumber}. This payment will appear on your next invoice."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWnIAM"},"Name":"Accessing your bills is easy","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SWnIAM","Emails__c":"Send Invoice;Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Accessing your bills is easy\\r\\nIf you jump onto the Vodafone website you’ll find our online billing service. This has great self-serve options, including your payment history. If you’re already registered, just click on www.myvodafone.com.au\\r\\n\\r\\nIf you\'re not signed up for online billing yet, you can do it easily using this link: http://support.vodafone.com.au/articles/FAQ/Register-for-My-Vodafone \\r\\n\\r\\nOnce you’ve logged in, look for the \'Bill and payment\' section and select \'View your bills\'.\\r\\n\\r\\nIf you’d like some more detail about how to view your payment history online, this article tells you everything you need to know: http://support.vodafone.com.au/articles/FAQ/How-to-view-your-payment-history-online"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWsIAM"},"Name":"The My Vodafone app","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"IsCalculator__c":false,"Id":"a3kL00000004SWsIAM","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"The My Vodafone app\\r\\nThis clever app lets you check your use and details on the go. It will also help you find your nearest Vodafone store, check for network updates in your area, view your recent bills if you\'re on a plan, or recharge if you\'re on prepaid. To view your use or recharge, you just need to register with My Vodafone first. \\r\\n\\r\\nThe good news is that Vodafone Android™ phones come with the app preloaded – keep an eye out for it in the Updates icon on your homescreen."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KKsIAM"},"Name":"ExcludeGST","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmCIAU"},"Name":"Exclude or Include GST","Id":"a3kL00000004SmCIAU"},"RecordType__c":"Currency","Template__c":"a3kL00000004SmCIAU","Id":"a3mL00000004KKsIAM","Code__c":"ExcludeAmount"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KKxIAM"},"Name":"GSTAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmCIAU"},"Name":"Exclude or Include GST","Id":"a3kL00000004SmCIAU"},"RecordType__c":"Formula","Template__c":"a3kL00000004SmCIAU","Id":"a3mL00000004KKxIAM","Code__c":"GSTAmount"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KL2IAM"},"Name":"IncludeGST","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmCIAU"},"Name":"Exclude or Include GST","Id":"a3kL00000004SmCIAU"},"RecordType__c":"Currency","Template__c":"a3kL00000004SmCIAU","Id":"a3mL00000004KL2IAM","Code__c":"IncludeGST"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmCIAU"},"Name":"Exclude or Include GST","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":true,"Id":"a3kL00000004SmCIAU","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Price Excluding GST : ${!ExcludeGST}\\r\\n\\r\\nPrice Including GST : ${!IncludeGST}\\r\\n\\r\\nThe GST Amount : ${!GSTAmount}"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KL7IAM"},"Name":"FirstDate","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmHIAU"},"Name":"Difference between two dates","Id":"a3kL00000004SmHIAU"},"RecordType__c":"Date","Template__c":"a3kL00000004SmHIAU","Id":"a3mL00000004KL7IAM","Code__c":"FirstDate"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KLCIA2"},"Name":"SecondDate","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmHIAU"},"Name":"Difference between two dates","Id":"a3kL00000004SmHIAU"},"RecordType__c":"Date","Template__c":"a3kL00000004SmHIAU","Id":"a3mL00000004KLCIA2","Code__c":"SecondDate"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KLHIA2"},"Name":"DateDifference","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmHIAU"},"Name":"Difference between two dates","Id":"a3kL00000004SmHIAU"},"RecordType__c":"Formula","Template__c":"a3kL00000004SmHIAU","Id":"a3mL00000004KLHIA2","Code__c":"DateDifference"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmHIAU"},"Name":"Difference between two dates","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":true,"Id":"a3kL00000004SmHIAU","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"First date : {!FirstDate}\\r\\n\\r\\nSecond date : {!SecondDate}\\r\\n\\r\\nDifference : {!DateDifference}"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KLMIA2"},"Name":"ValueKb","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmMIAU"},"Name":"KB MB GB Conversion","Id":"a3kL00000004SmMIAU"},"RecordType__c":"Formula","Template__c":"a3kL00000004SmMIAU","Id":"a3mL00000004KLMIA2","Code__c":"ValueKb"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KLRIA2"},"Name":"ValueGb","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmMIAU"},"Name":"KB MB GB Conversion","Id":"a3kL00000004SmMIAU"},"RecordType__c":"Formula","Template__c":"a3kL00000004SmMIAU","Id":"a3mL00000004KLRIA2","Code__c":"ValueGb"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004KLWIA2"},"Name":"ValueMb","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmMIAU"},"Name":"KB MB GB Conversion","Id":"a3kL00000004SmMIAU"},"RecordType__c":"Formula","Template__c":"a3kL00000004SmMIAU","Id":"a3mL00000004KLWIA2","Code__c":"ValueMb"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SmMIAU"},"Name":"KB MB GB Conversion","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"IsCalculator__c":true,"Id":"a3kL00000004SmMIAU","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Value in Kb : {!ValueKb}\\r\\n\\r\\nValue in Kb : {!ValueMb}\\r\\n\\r\\nValue in Gb : {!ValueGb}"}}],"skillGroupName":"Red Care","emailFrom":"support@vodafone.com.au"},{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SKtIAM"},"Name":"Sample Template","SkillGroup__c":"a3iL00000008W2AIAU","IsEmailSection__c":false,"IsCalculator__c":false,"Id":"a3kL00000004SKtIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W2AIAU"},"Name":"PSM","Id":"a3iL00000008W2AIAU"},"Body__c":"Blah blah blah"}}],"skillGroupName":"PSM","emailFrom":"psm@vodafone.com.au"}]';
        //'[{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004Si5IAE"},"Name":"How to be a guru","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":false,"Id":"a3kL00000004Si5IAE","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"There is no spoon."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiAIAU"},"Name":"We are the champions","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":false,"Id":"a3kL00000004SiAIAU","Emails__c":"Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Once upon a time blah blah"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiFIAU"},"Name":"Header Promotion Email","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":true,"Id":"a3kL00000004SiFIAU","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Your Promotion has been approved."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzkIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Text","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzkIAE","Code__c":"Name"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzpIAE"},"Name":"TotalAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Currency","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzpIAE","Code__c":"TotalAmount"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzfIAE"},"Name":"PlayerNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Number","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzfIAE","Code__c":"PlayerNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JzaIAE"},"Name":"PlayerName","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","Id":"a3kL00000004SiKIAU"},"RecordType__c":"Text","Template__c":"a3kL00000004SiKIAU","Id":"a3mL00000004JzaIAE","Code__c":"PlayerName"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SiKIAU"},"Name":"Get your player stats","SkillGroup__c":"a3iL00000008WacIAE","IsEmailSection__c":true,"Id":"a3kL00000004SiKIAU","Emails__c":"Send Contract Email;Test Promotion Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008WacIAE"},"Name":"TestSKillGroup","Id":"a3iL00000008WacIAE"},"Body__c":"Log in to the website for {!PlayerName} and join the clan. Your playernumber is {!PlayerNumber} and Name is {!Name}\\r\\n\\r\\nEnter for a total dollar amount of : {!TotalAmount}"}}],"skillGroupName":"TestSKillGroup","emailFrom":"test@test.com"},{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJTIA2"},"Name":"Call Barring Activated","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJTIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your call barring will be activated in the next 30 days. Please make sure you agree to the terms and conditions of your contract."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJQIA2"},"Name":"Call Barring Deactivated","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJQIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your call barring will be deactivated at the end of this month. Please ensure all relevant accounts are also closed."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJPIA2"},"Name":"International Roaming","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJPIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Your service for international roaming will be added to your existing account"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJNIA2"},"Name":"4G Service Outage","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJNIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"We are experiencing a service outage with our 4G network. Please be patient while we resolve this."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJOIA2"},"Name":"Upgrade Your Number","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJOIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"The customer wishes to upgrade their number from Optus. Make sure to ask for their PIN to unlock."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJVIA2"},"Name":"Hot Offers","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJVIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Inform customer of our recent campaigns and hot offers"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJUIA2"},"Name":"Transfer Contacts","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJUIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Transfer the customers address phone contacts over from another carrier."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJRIA2"},"Name":"Identify Internet Issues","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJRIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Identify with customer their internet usage and bandwidth issues"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJSIA2"},"Name":"Inform Flagfall","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJSIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Inform the customer of our flagfall pricing and charges"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SJMIA2"},"Name":"Resolve Customer Complaint","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":false,"Id":"a3kL00000004SJMIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Resolve the customer complaint with our service"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JjvIAE"},"Name":"Number","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JjvIAE","Code__c":"Number"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbkIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Text","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbkIAE","Code__c":"Name"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbfIAE"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbfIAE","Code__c":"BillingAccountNumber"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SQVIA2","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Here’s the invoice you requested\\r\\n\\r\\nHi {!Name}\\r\\n\\r\\nInvoice Attached\\r\\nI have attached the invoice(s) you’ve requested. \\r\\n\\r\\nPlease find attached Invoice {!Number} for account {!BillingAccountNumber}"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbaIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","Id":"a3kL00000004SQaIAM"},"RecordType__c":"Text","Template__c":"a3kL00000004SQaIAM","Id":"a3mL00000004JbaIAE","Code__c":"Name"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SQaIAM","Emails__c":"Send Invoice;Terminate Customer","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Thanks for your time {!Name}. \\r\\n\\r\\nAll the best,\\r\\n\\r\\nGavin"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkIIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkIIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkNIAU"},"Name":"CreditAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkNIAU","Code__c":"CreditAmount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SWdIAM","Emails__c":"Send Invoice;Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Credit applied to your account \\r\\nAs discussed I have applied a credit of {!CreditAmount} to your account {!BillingAccountNumber}. The credit will appear on your next invoice."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkSIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkSIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkXIAU"},"Name":"Amount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkXIAU","Code__c":"Amount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SWiIAM","Emails__c":"Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Payment Taken \\r\\nThis is confirmation that i have processed a payment of {!Amount} on your account {!BillingAccountNumber}. This payment will appear on your next invoice."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWnIAM"},"Name":"Accessing your bills is easy","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SWnIAM","Emails__c":"Send Invoice;Send Contract Email","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Accessing your bills is easy\\r\\nIf you jump onto the Vodafone website you’ll find our online billing service. This has great self-serve options, including your payment history. If you’re already registered, just click on www.myvodafone.com.au\\r\\n\\r\\nIf you\'re not signed up for online billing yet, you can do it easily using this link: http://support.vodafone.com.au/articles/FAQ/Register-for-My-Vodafone \\r\\n\\r\\nOnce you’ve logged in, look for the \'Bill and payment\' section and select \'View your bills\'.\\r\\n\\r\\nIf you’d like some more detail about how to view your payment history online, this article tells you everything you need to know: http://support.vodafone.com.au/articles/FAQ/How-to-view-your-payment-history-online"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWsIAM"},"Name":"The My Vodafone app","SkillGroup__c":"a3iL00000008W25IAE","IsEmailSection__c":true,"Id":"a3kL00000004SWsIAM","Emails__c":"Send Invoice","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"The My Vodafone app\\r\\nThis clever app lets you check your use and details on the go. It will also help you find your nearest Vodafone store, check for network updates in your area, view your recent bills if you\'re on a plan, or recharge if you\'re on prepaid. To view your use or recharge, you just need to register with My Vodafone first. \\r\\n\\r\\nThe good news is that Vodafone Android™ phones come with the app preloaded – keep an eye out for it in the Updates icon on your homescreen."}}],"skillGroupName":"Red Care","emailFrom":"support@vodafone.com.au"},{"templateWrappers":[{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SKtIAM"},"Name":"Sample Template","SkillGroup__c":"a3iL00000008W2AIAU","IsEmailSection__c":false,"Id":"a3kL00000004SKtIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W2AIAU"},"Name":"PSM","Id":"a3iL00000008W2AIAU"},"Body__c":"Blah blah blah"}}],"skillGroupName":"PSM","emailFrom":"psm@vodafone.com.au"}]';
    return JSON.parse(js);
});

angular.module('agentControllers', [])
.controller('TemplatesListCtrl', ['$scope', 'Skills',
    function($scope, Skills) {
        $scope.skills = Skills;
        $scope.skillIndex = 0;
        Object.defineProperty($scope, 'activeSkill', { // angular's way of computed observables
            get: function() {
                return $scope.skills[$scope.skillIndex];
            }
        });
        Object.defineProperty($scope, 'activeMode', {
            get: function() {
                return $scope.activeSkill[$scope.activeSkill.mode];
            }
        });
        $scope.skills.forEach(function(skill) {
            skill.mode = 'resolution';
            skill.parametersMap = {};
            skill['resolution'] = {
                bodytxt : ''
            }
            skill['email'] = {
                addedEmailSections: [],
                templateEmails : []
            };
            skill['calculator'] = {
                addedEmailSections: []
            };
            skill.templateWrappers.forEach(function(templateWrapper) {
                if (templateWrapper.template.IsEmailSection__c) {
                    initTemplateWrapper(skill, templateWrapper);
                    var templateEmails = templateWrapper.template.Emails__c.split(";");
                    templateEmails.forEach(function(email) {
                        skill['email'].templateEmails.push(email);
                    }); // forEach templateEmails
                    skill['email'].templateEmails = $.unique(skill['email'].templateEmails);
                }
                if (templateWrapper.template.IsCalculator__c) {
                    initTemplateWrapper(skill, templateWrapper);
                }
            }); // forEach templateWrapper
        }); // forEach skill
        $scope.modeFilter = function(templateWrapper) {
            switch ($scope.activeSkill.mode)
            {
                case 'resolution' : // activity
                    return !templateWrapper.template.IsEmailSection__c &&
                        !templateWrapper.template.IsCalculator__c;
                case 'email':
                    return templateWrapper.template.IsEmailSection__c;
                case 'calculator':
                    return templateWrapper.template.IsCalculator__c;
                case 'sms':
                    return false; //todo
            }
        }
        $scope.selectTemplate = function(templateWrapper) {
            templateWrapper.selected = !templateWrapper.selected;
            switch ($scope.activeSkill.mode)
            {
                case 'resolution' : // activity
                    if (templateWrapper.selected) {
                        var range = $('#bodytxt').textrange();
                        var startPos = range.position;
                        $('#bodytxt').textrange('insert', templateWrapper.template.Body__c + '\n\n');
                        $('#bodytxt').textrange('setcursor', startPos + templateWrapper.template.Body__c.length + 2); // Unselect the text
                    } else {
                        $('#bodytxt').val($('#bodytxt').val()
                            .replace(templateWrapper.template.Body__c + '\n\n', '')
                            .replace(templateWrapper.template.Body__c + '\n', '')
                            .replace(templateWrapper.template.Body__c, ''));
                    }
                    $scope.activeSkill['resolution'].bodytxt = $('#bodytxt').val();
                    break;
                case 'email':
                    if (templateWrapper.selected) {
                        if ($scope.activeSkill['email'].addedEmailSections.indexOf(templateWrapper) == -1) {
                            $scope.activeSkill['email'].addedEmailSections.push(templateWrapper);
                        }
                    } else {
                        for(var i = $scope.activeSkill['email'].addedEmailSections.length; i--;) {
                            if($scope.activeSkill['email'].addedEmailSections[i] === templateWrapper) {
                                $scope.activeSkill['email'].addedEmailSections.splice(i, 1);
                            }
                            if ($scope.activeSkill['email'].addedEmailSections[i-1] != undefined) {
                                updateFocus($scope.activeSkill['email'].addedEmailSections[i-1]);
                            }
                        }
                    }
                    break;
                case 'calculator':
                    if (templateWrapper.selected) {
                        if ($scope.activeSkill['calculator'].addedEmailSections.indexOf(templateWrapper) == -1) {
                            $scope.activeSkill['calculator'].addedEmailSections.push(templateWrapper);
                        }
                        $(".calculatorPopup").load( "calculator.html").show();
                    } else {
                        for(var i = $scope.activeSkill['calculator'].addedEmailSections.length; i--;) {
                            if($scope.activeSkill['calculator'].addedEmailSections[i] === templateWrapper) {
                                $scope.activeSkill['calculator'].addedEmailSections.splice(i, 1);
                            }
                            if ($scope.activeSkill['calculator'].addedEmailSections[i-1] != undefined) {
                                updateFocus($scope.activeSkill['calculator'].addedEmailSections[i-1]);
                            }
                        }
                    }
                    break;
                case 'sms':
                    return false; //todo
            }
        }
        $scope.resetTemplates  = function() {
            switch ($scope.activeSkill.mode)
            {
                case 'resolution' : // activity
                    $('#bodytxt').val('');
                    $scope.activeSkill['resolution'].bodytxt  = $('#bodytxt').val();
                    $('#bodytxt').focus();
                    $scope.activeSkill.templateWrappers.forEach(function(templateWrapper) {
                        if (!templateWrapper.template.IsEmailSection__c) {
                            templateWrapper.selected = false;
                        }
                    });
                    break;
                case 'email':
                    $scope.activeSkill['email'].addedEmailSections = [];
                    $scope.activeSkill.templateWrappers.forEach(function(templateWrapper) {
                        if (templateWrapper.template.IsEmailSection__c) {
                            templateWrapper.selected = false;
                            resetFieldValues(templateWrapper);
                        }
                    });
                    break;
                case 'calculator':
                    $scope.activeSkill['calculator'].addedEmailSections = [];
                    $scope.activeSkill.templateWrappers.forEach(function(templateWrapper) {
                        if (templateWrapper.template.IsEmailSection__c) {
                            templateWrapper.selected = false;
                            resetFieldValues(templateWrapper);
                        }
                    });
                    break;
                case 'sms':

                    break;

            }

            $scope.activeMode.msgClass = 'msgStatus';
            $scope.activeMode.msgStatus = '';
        }
        $scope.switchMode = function(mode) {
            $scope.activeSkill.mode = mode;
        }
        $scope.resizeInput = function($event) {
            var TXT_INPUT_SIZE_LIMIT = 35;
            var target = $event.target;
            var code=$(target).attr('placeholder');
            if ($(target).val().length > 0 && $(target).val().length < TXT_INPUT_SIZE_LIMIT) {
                $(".bodyHtml input[placeholder='"+code+"'").attr('size', $(target).val().length);
            }
        }
        $scope.enterKeyCallback = function($event) {
            var target = $event.target;
            var focusable = $(".bodyHtml").find('input').filter(':visible');
            var next = focusable.eq(focusable.index(target)+1);
            if (next.length) {
                next.focus();
            } else {
                next = focusable.eq(focusable.index(0));
                next.focus();
            }
            $event.preventDefault();
        };
        $scope.sendEmail = function() {
            $scope.activeSkill['email'].msgClass = 'msgError';
            if ($scope.activeSkill['email'].addedEmailSections.length == 0) {
                $scope.activeSkill['email'].msgStatus = "Please select atleast one email template!";
                return;
            }
            var focusable = $(".bodyHtml").find('input').filter(':visible');
            var allEntered = true;
            focusable.each(function (){
                var value = $(this).val();
                allEntered = allEntered && (value != undefined && value != '');
            });
            if (!allEntered) {
                $scope.activeSkill['email'].msgStatus = "Please enter value for all fields!";
                return;
            }
            if ($scope.activeSkill.emailSubject == undefined) {
                $scope.activeSkill['email'].msgStatus = "Please select an email subject from the list!";
                $("#emailsubjectList").focus();
                return;
            }
            if ($scope.activeSkill.toAddress == undefined || $scope.activeSkill.toAddress == '') {
                $scope.activeSkill['email'].msgStatus = "Please enter a valid email address to send to!";
                $("#emailTo").focus();
                return;
            }
            focusable.each(function (){
                var value = $(this).val();
                if (value != undefined && value != '') {
                    $(this).replaceWith(value);
                }
            });
            var msgBody = '';
            $('.bodyHtml pre').each(function (){
                msgBody += $(this).html() + '\n\r\n\r';
            });
            Visualforce.remoting.Manager.invokeAction(
                '{!$RemoteAction.PR_AHTR_Agent.sendEmail}',
                $scope.activeSkill.emailFrom, $scope.activeSkill.toAddress, $scope.activeSkill.emailSubject, msgBody,
                function(result, event) {
                    if (result) {
                        $scope.activeSkill['email'].msgClass = 'msgSuccess';
                        $scope.activeSkill['email'].msgStatus = "Email Sent Successfully!";
                        $("#msgStatus").html($scope.activeSkill['email'].msgStatus);
                        window.setTimeout(function() {
                            $scope.activeSkill['email'].msgStatus = "";
                            $("#msgStatus").html($scope.activeSkill['email'].msgStatus);
                        }, 2000);
                        $scope.resetTemplates();
                    } else {
                        $scope.activeSkill['email'].msgStatus = "Error sending Email!";
                        $("#msgStatus").html($scope.activeSkill['email'].msgStatus);
                        window.setTimeout(function() {
                            $scope.activeSkill['email'].msgStatus = "";
                            $("#msgStatus").html($scope.activeSkill['email'].msgStatus);
                        }, 2000);
                        return;
                    }
                },
                { buffer: true, escape: true, timeout: 30000 }
            );
        }
        $scope.nextSkill = function() {
            if (++$scope.skillIndex >= $scope.skills.length)
                $scope.skillIndex = 0;
            if (!$('.menu').hasClass('on'))
                $scope.flashTitle($scope.skills[$scope.skillIndex].name);
            $scope.$apply();
        }
        $scope.prevSkill = function() {
            if (--$scope.skillIndex < 0)
                $scope.skillIndex = $scope.skills.length - 1;
            if (!$('.menu').hasClass('on'))
                $scope.flashTitle($scope.skills[$scope.skillIndex].name);
            $scope.$apply();
        }
        var title = $('#title').html();
        var flashHandle = null;
        $scope.flashTitle = function(text) {
            $('#title').html('<b>' + text + '</b>');
            if (flashHandle) {
                clearTimeout(flashHandle);
            }
            flashHandle = window.setTimeout(function() { $('#title').html(title); }, 1000);
        }
        function initTemplateWrapper(skill, templateWrapper) {
            orderTemplateFields(templateWrapper);
            templateWrapper.template.convertedBody__c = templateWrapper.template.Body__c;
            var templateFields = templateWrapper.templateFields;
            templateFields.forEach(function(field) {
                if (!(field.Code__c in skill.parametersMap)) {
                    skill.parametersMap[field.Code__c] = field;
                }
                var fieldVal, code;
                fieldVal = '<input type="text" ng-model="$parent.activeSkill.parametersMap[\'' +
                    field.Code__c + '\'].value" placeholder="' +
                    field.Code__c + '" ' +
                    'ui-keypress="{13:\'$parent.enterKeyCallback($event)\'}" ' +
                    'ng-keyup="$parent.resizeInput($event)" size="' + field.Code__c.length + '"/>';
                code = '{!' + field.Code__c + '}';
                templateWrapper.template.convertedBody__c = templateWrapper.template.convertedBody__c.replaceAll(code, fieldVal);
            }); // forEach templateFields

            function orderTemplateFields(templateWrapper) {
                var newTxt = templateWrapper.template.Body__c.split('{!');
                var tf = [];
                for (var i = 1; i < newTxt.length; i++) {
                    var code = newTxt[i].split('}')[0];
                    templateWrapper.templateFields.forEach(function(field) {
                        if (field.Code__c == code) {
                            tf.push(field);
                        }
                    })
                }
                templateWrapper.templateFields = tf;
            }
        }
        function resetFieldValues(templateWrapper) {
            var templateFields = templateWrapper.templateFields;
            templateFields.forEach(function(field) {
                if (field.Code__c in $scope.activeSkill.parametersMap) {
                    $scope.activeSkill.parametersMap[field.Code__c].value = '';
                }
            });
        }
        function updateFocus(templateWrapper) {
            var templateFields = templateWrapper.templateFields;
            var id = templateWrapper.template.Id;
            var inputs = $('#' + id).find('input');
            for (var i = 0; i < inputs.length; i++) {
                var code = templateFields[i].Code__c;
                var value =  $scope.activeSkill.parametersMap[code].value;
                if (value == undefined || value == '') {
                    $(inputs[i]).focus();
                    break;
                }
            }
        }
        $(function() {
            var ctrl = 0;
            $(document).keydown(function(event) {
                //console.log(event.which);
                if (event.which == 17) {
                    ctrl = 1;
                    return;
                } else if (ctrl == 1) {
                    return;
                } else if (event.which == 9) {
                    $scope.nextSkill();
                } else if (event.which == 192) {
                    $('.menu').click();
                } else if (event.which >= 112 && event.which <= 121) {
                    $('#t-' + (event.which - 111)).click();
                } else {
                    return;
                }
                event.preventDefault();
            });
            $(document).keyup(function(event) {
                if (event.which == 17)
                    ctrl = 0;
            });
            $('.menu').on('click', function() {
                var m = $(this);
                m.removeClass('go');
                if (m.hasClass('on')) {
                    m.removeClass('on');
                    $('#templateChoicesPanel').slideUp(200, function() { m.addClass('go1'); } );
                } else {
                    m.addClass('on');
                    $('#templateChoicesPanel').slideDown(200, function() { m.addClass('go1'); } );
                }
            }).on('mouseout', function() {
                    var m = $(this);
                    window.setTimeout(function() {
                        m.addClass('go');
                    }, 100);
            });



        }); //$(function() {
        new ZeroClipboard(document.getElementById("copybtn"), {
            moviePath: "lib/zeroclipboard/ZeroClipboard.swf" //"{!URLFOR($Resource.AHTR_Resources, 'Agent/lib/zeroclipboard/ZeroClipboard.swf')}"
        }).on('dataRequested', function (clipBoardClient, args) {
            var txt = $("#bodytxt").val();
            //to make Notepad honour line breaks, we have to do some magic
            var windowsText = txt.replace(/\n/g, '\r\n');
            //replace html break with line breaks
            windowsText = windowsText.replace(/<br\s*\/?>/g, "\r\n");
            clipBoardClient.setText(windowsText);
            $scope.activeSkill['resolution'].msgClass = 'msgSuccess';
            $scope.activeSkill['resolution'].msgStatus = "Copied successfully to clipboard";
        }).on('complete', function (clipBoardClient, args) {
            var templateIds = [];
            $(".template.highlighted .abbrev").each(function() {
                templateIds.push($(this).data("template"));
            });
            if (templateIds.length > 0) {
/*                Visualforce.remoting.Manager.invokeAction(
                    '{!$RemoteAction.PR_AHTR_Agent.incrementUsageCount}',
                    templateIds,
                    function(result, event) {
                        // Do nothing
                    },
                    { buffer: true, escape: true, timeout: 30000 }
                );*/
            }
        });
    }
]);



String.prototype.replaceAll = function( token, newToken, ignoreCase ) {
    var _token;
    var str = this + "";
    var i = -1;

    if ( typeof token === "string" ) {

        if ( ignoreCase ) {

            _token = token.toLowerCase();

            while( (
                i = str.toLowerCase().indexOf(
                    token, i >= 0 ? i + newToken.length : 0
                ) ) !== -1
                ) {
                str = str.substring( 0, i ) +
                    newToken +
                    str.substring( i + token.length );
            }

        } else {
            return this.split( token ).join( newToken );
        }

    }
    return str;
};