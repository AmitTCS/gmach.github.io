

/**
 * @ngdoc function
 * @name myAccountAutoReg.service:omnitureTrack
 * @description
 * # omnitureTrack
 * omnitureTrack of the myAccountAutoReg
 */

angular.module('myAccountAutoReg')
    .service('omnitureTrack', function(cmsContent){
        var s = window.s || { track : function() {}} //dummy holder in case omniture lib failed to load
        if (window.isIE8) {
            s = { track : function() {} };
        }
        var analyticsCms = cmsContent.getAnalyticsPage();
        var pageName = analyticsCms.pageName,
            lockoutPageName = analyticsCms.lockoutPageName,
            confirmEmailPageName = analyticsCms.confirmEmailPageName,
            login = analyticsCms.login,
            technicalErrorPageName = analyticsCms.technicalErrorPageName;

        var accountNumber = analyticsCms.accountNumber,
            accessCode = analyticsCms.accessCode,
            panel1Form = analyticsCms.panel1Form,
            step1ContinueLink = analyticsCms.step1ContinueLink,
            errorBANorOTACIncorrect = analyticsCms.errorBANorOTACIncorrect,
            errorBANorOTACIncorrectThird = analyticsCms.errorBANorOTACIncorrectThird;

        var panel2Name = analyticsCms.panel2Name,
            noContactDetails = analyticsCms.noContactDetails,
            pinCode = analyticsCms.pinCode,
            panel2Form = analyticsCms.panel2Form,
            sendCodeSMS = analyticsCms.sendCodeSMS,
            sendCodeVoice = analyticsCms.sendCodeVoice,
            sendNewCodeSMS = analyticsCms.sendNewCodeSMS,
            sendNewCodeVoice = analyticsCms.sendNewCodeVoice,
            sentCodeSuccess = analyticsCms.sentCodeSuccess,
            step2Continue = analyticsCms.step2Continue,
            choosePhoneNumber = analyticsCms.choosePhoneNumber;

        var panel3Name = analyticsCms.panel3Name,
            emailAddress = analyticsCms.emailAddress,
            panel3Form = analyticsCms.panel3Form,
            step3Continue = analyticsCms.step3Continue,
            submitEmailSuccess = analyticsCms.submitEmailSuccess,
            passwordResetSuccess = analyticsCms.passwordResetSuccess,
            recover = analyticsCms.recover;

        var omnitureCall = {
                pageLoad : function () {
                    s.track('page', {'pageName': pageName});
                },
                banFocus : function () {
                    s.track('input', {'inputName':accountNumber, 'inputType':'textfield', 'formName':panel1Form});
                },
                otacFocus : function () {
                    s.track('input', {'inputName':accessCode, 'inputType':'textfield', 'formName':panel1Form});
                },
                errorBANorOTACIncorrect : function () {
                    s.track('link', {'linkName':errorBANorOTACIncorrect});
                },
                errorBANorOTACIncorrectThird : function () {
                    s.track('link', {'linkName':errorBANorOTACIncorrectThird});
                },
                step1Continue : function () {
                    s.track('link', {'linkName':step1ContinueLink});
                },
                panel2Load : function () {
                    s.track('page', {'pageName': panel2Name});
                },
                noContactDetails : function () {
                    s.track('page', {'pageName': noContactDetails});
                },
                sendCodeSMS : function () {
                    s.track('link', {'linkName':sendCodeSMS});
                },
                sendCodeVoice : function () {
                    s.track('link', {'linkName':sendCodeVoice});
                },
                sendNewCodeSMS : function () {
                    s.track('link', {'linkName':sendNewCodeSMS});
                },
                sendNewCodeVoice : function () {
                    s.track('link', {'linkName':sendNewCodeVoice});
                },
                sentCodeSuccess : function () {
                    s.track('page', {'pageName': sentCodeSuccess});
                },
                pinFocus : function () {
                    s.track('input', {'inputName':pinCode, 'inputType':'textfield', 'formName':panel2Form});
                },
                step2Continue : function () {
                    s.track('link', {'linkName':step2Continue});
                },
                choosePhoneNumber : function () {
                    s.track('link', {'linkName':choosePhoneNumber});
                },
                panel3Load : function () {
                    s.track('page', {'pageName': panel3Name});
                },
                emailFocus : function () {
                    s.track('input', {'inputName':emailAddress, 'inputType':'textfield', 'formName':panel3Form});
                },
                step3Continue : function () {
                    s.track('link', {'linkName':step3Continue});
                },
                submitEmailSuccess : function () {
                    s.track('page', {'pageName': submitEmailSuccess});
                },
                lockoutPageLoad : function () {
                    s.track('page', {'pageName': lockoutPageName});
                },
                passwordResetSuccess : function () {
                    s.track('page', {'pageName': passwordResetSuccess});
                },
                confirmEmail : function () {
                    s.track('page', {'pageName': confirmEmailPageName});
                },
                recover : function () {
                    s.track('link', {'linkName':recover});
                },
                login : function () {
                    s.track('link', {'linkName':login});
                },
                technicalErrorPageLoad : function () {
                    s.track('page', {'pageName': technicalErrorPageName});
                }
            };

            for ( var key in analyticsCms ) {
                if(key.indexOf("error") == 0){
                    omnitureCall[key] = function (cms) {
                        return function() {
                            s.track('page', {errorCode: cms});
                        }
                    }(analyticsCms[key]);
                }
            }

        return omnitureCall;

    });
