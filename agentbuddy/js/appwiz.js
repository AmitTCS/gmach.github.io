'use strict';

var agentApp = angular.module('agentApp', [
    'ui.bootstrap',
    'ui.router',
    'agentControllers',
    'agentServices'
]);

var p3 = '<html><p style="color:red">hellod world</p></html>';

agentApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/templates');

    $stateProvider
    .state('step1', {
        url: '/templates',
        templateUrl: 'partials/step_1.html'
        })
    .state('step2', {
        url: '/templateFields',
        templateUrl: 'partials/step_2.html'
        })
    .state('step3', {
        url: '/previewEmail',
        template: p3,
        controller: function($scope) {
            $scope.previewEmail();
        }
    })
}]);

var agentControllers = angular.module('agentControllers', [])
    .controller('TemplatesListCtrl', ['$scope', '$state', 'Skills',
    function($scope, $state, Skills) {
        $scope.parameterList = [];
        $scope.loadParameterLists = function() {
            $scope.skills.forEach(function(skill) {
                skill.templates.forEach(function(template) {
                    if (template.selected) {
                        var templateFields = template.templateFields;
                        templateFields.forEach(function(field) {
                            if (!fieldAlreadyExists(field)) {
                                $scope.parameterList.push(field);
                            }
                        });
                    }
                });
            });
            if ($scope.parameterList.length > 0) {
                $state.go('step2');
            } else {
                $state.go('step3');
            }
        }
        function fieldAlreadyExists(field) {
            var exists = false;
            for (var i=0; i < $scope.parameterList.length; i++) {
                exists = $scope.parameterList[i].Code__c === field.Code__c;
                if (exists) break;
            }
            return exists;
        }
        $scope.skills = Skills;
        $scope.activeSkill = 0;
        $scope.bodytxt = $('#bodytxt').val();
        $scope.highlightTemplate = function(template) {
            template.selected = !template.selected;
            if (template.selected) {
                var range = $('#bodytxt').textrange();
                var startPos = range.position;
                $('#bodytxt').textrange('insert', template.template.Body__c + '\n\n');
                $('#bodytxt').textrange('setcursor', startPos + template.template.Body__c.length + 2); // Unselect the text
            } else {
                $('#bodytxt').val($('#bodytxt').val()
                .replace(template.template.Body__c + '\n\n', '')
                .replace(template.template.Body__c + '\n', '')
                .replace(template.template.Body__c, ''));
            }
            $scope.bodytxt = $('#bodytxt').val();
        };
        $scope.resetTemplates = function() {
            $scope.skills.forEach(function(skill) {
                skill.templates.forEach(function(template) {
                    template.selected = false;
                });
            });
            $('#bodytxt').val('');
            $scope.bodytxt = $('#bodytxt').val();
            $scope.parameterList = [];
        }
        $scope.nextSkill = function() {
            if (++$scope.activeSkill >= $scope.skills.length)
                $scope.activeSkill = 0;
            if (!$('.menu').hasClass('on'))
                $scope.flashTitle($scope.skills[$scope.activeSkill].name);
            $scope.$apply();
        }
        $scope.prevSkill = function() {
            if (--$scope.activeSkill < 0)
                $scope.activeSkill = $scope.skills.length - 1;
            if (!$('.menu').hasClass('on'))
                $scope.flashTitle($scope.skills[$scope.activeSkill].name);
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
        $scope.previewEmail = function() {
            for (var index = 0; index < $scope.parameterList.length; ++index) {
                var templateField = $scope.parameterList[index];

                var parmVal = templateField.value;
                var code = '{!' + templateField.Code__c + '}';
                var templateTxt = $scope.bodytxt;
                templateTxt = replaceAll(code, parmVal, templateTxt);
                $scope.bodytxt = templateTxt;
            }
        }
    }
]);

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function getSkills() {
    var js = '{"Red Care":[{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JjvIAE"},"Name":"Number","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JjvIAE","Code__c":"Number"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbkIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Text","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbkIAE","Code__c":"Name"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbfIAE"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","Id":"a3kL00000004SQVIA2"},"RecordType__c":"Number","Template__c":"a3kL00000004SQVIA2","Id":"a3mL00000004JbfIAE","Code__c":"BillingAccountNumber"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQVIA2"},"Name":"Header","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SQVIA2","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Here’s the invoice you requested\\r\\n\\r\\nHi {!Name}\\r\\n\\r\\nInvoice Attached\\r\\nI have attached the invoice(s) you’ve requested. \\r\\n\\r\\nPlease find attached Invoice {!Number} for account {!BillingAccountNumber}"}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkIIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkIIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkNIAU"},"Name":"CreditAmount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","Id":"a3kL00000004SWdIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWdIAM","Id":"a3mL00000004JkNIAU","Code__c":"CreditAmount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWdIAM"},"Name":"Credit Applied To Your Account","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SWdIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Credit applied to your account \\r\\nAs discussed I have applied a credit of {!CreditAmount} to your account {!BillingAccountNumber}. The credit will appear on your next invoice."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkSIAU"},"Name":"BillingAccountNumber","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Number","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkSIAU","Code__c":"BillingAccountNumber"},{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JkXIAU"},"Name":"Amount","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","Id":"a3kL00000004SWiIAM"},"RecordType__c":"Currency","Template__c":"a3kL00000004SWiIAM","Id":"a3mL00000004JkXIAU","Code__c":"Amount"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWiIAM"},"Name":"Payment Taken","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SWiIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Payment Taken \\r\\nThis is confirmation that i have processed a payment of {!Amount} on your account {!BillingAccountNumber}. This payment will appear on your next invoice."}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWnIAM"},"Name":"Accessing your bills is easy","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SWnIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Accessing your bills is easy\\r\\nIf you jump onto the Vodafone website you’ll find our online billing service. This has great self-serve options, including your payment history. If you’re already registered, just click on www.myvodafone.com.au\\r\\n\\r\\nIf you\'re not signed up for online billing yet, you can do it easily using this link: http://support.vodafone.com.au/articles/FAQ/Register-for-My-Vodafone \\r\\n\\r\\nOnce you’ve logged in, look for the \'Bill and payment\' section and select \'View your bills\'.\\r\\n\\r\\nIf you’d like some more detail about how to view your payment history online, this article tells you everything you need to know: http://support.vodafone.com.au/articles/FAQ/How-to-view-your-payment-history-online"}},{"templateFields":[],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SWsIAM"},"Name":"The My Vodafone app","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SWsIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"The My Vodafone app\\r\\nThis clever app lets you check your use and details on the go. It will also help you find your nearest Vodafone store, check for network updates in your area, view your recent bills if you\'re on a plan, or recharge if you\'re on prepaid. To view your use or recharge, you just need to register with My Vodafone first. \\r\\n\\r\\nThe good news is that Vodafone Android™ phones come with the app preloaded – keep an eye out for it in the Updates icon on your homescreen."}},{"templateFields":[{"attributes":{"type":"AgentTemplateField__c","url":"/services/data/v29.0/sobjects/AgentTemplateField__c/a3mL00000004JbaIAE"},"Name":"Name","Template__r":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","Id":"a3kL00000004SQaIAM"},"RecordType__c":"Text","Template__c":"a3kL00000004SQaIAM","Id":"a3mL00000004JbaIAE","Code__c":"Name"}],"template":{"attributes":{"type":"AgentTemplate__c","url":"/services/data/v29.0/sobjects/AgentTemplate__c/a3kL00000004SQaIAM"},"Name":"Footer","SkillGroup__c":"a3iL00000008W25IAE","Id":"a3kL00000004SQaIAM","SkillGroup__r":{"attributes":{"type":"SkillGroup__c","url":"/services/data/v29.0/sobjects/SkillGroup__c/a3iL00000008W25IAE"},"Name":"Red Care","Id":"a3iL00000008W25IAE"},"Body__c":"Thanks for your time {!Name}. \\r\\n\\r\\nAll the best,\\r\\n\\r\\n{!AgentFirstName}"}}],"Sample Skill":[]}';
    function addslashes( str ) {
        return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
    }
    //js = addslashes(js);
    var templates = JSON.parse(js);
    var skills = [ ];
    var index = 0;
    for (var s in templates) {
        var skill = { name: s, index: index++, templates: templates[s], cols: [] };
        for (var i = 0; i < skill.templates.length; i++)
            skill.templates[i].index = i + 1;

        var split = (skill.templates.length / 2) + (skill.templates.length % 2 == 0 ? 0 : 1);
        skill.cols[0] = skill.templates.slice(0, split);
        skill.cols[1] = skill.templates.slice(split);
        skills[skills.length] = skill;
    }
    return skills;
}

var agentServices = angular.module('agentServices', [])
    .factory('Skills', function() {
        return getSkills();
});

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

/*
            var clipBoardClient = new ZeroClipboard(document.getElementById("copybtn"), {
                moviePath: "{!URLFOR($Resource.AHTR_Resources, 'Agent/lib/zeroclipboard/ZeroClipboard.swf')}"
            });
            clipBoardClient.on('dataRequested', function (clipBoardClient, args) {
                var txt = $("#bodytxt").val();
                //to make Notepad honour line breaks, we have to do some magic
                var windowsText = txt.replace(/\n/g, '\r\n');
                //replace html break with line breaks
                windowsText = windowsText.replace(/<br\s*\/?>/g, "\r\n");
                clipBoardClient.setText(windowsText);
            }).on('complete', function (clipBoardClient, args) {
                var templateIds = new Array();
                $(".template.highlighted .abbrev").each(function() {
                    templateIds.push($(this).data("template"));
                });
                Visualforce.remoting.Manager.invokeAction(
                    '{!$RemoteAction.PR_AHTR_Agent.incrementUsageCount}',
                    templateIds,
                    function(result, event) {
                        // Do nothing
                    },
                    { buffer: true, escape: true, timeout: 30000 }
                );
            });

        */
});
