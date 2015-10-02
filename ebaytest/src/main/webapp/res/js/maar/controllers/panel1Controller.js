/**
 * @ngdoc function
 * @name myAccountAutoReg.controller:Panel1Ctrl
 * @description
 * # Panel1Ctrl
 * Panel1Ctrl of the myAccountAutoReg
 */
angular.module('myAccountAutoReg')
    .controller('Panel1Ctrl', function ($scope, $http, $location, $sce, $timeout, cookieService, cmsContent, shared, omnitureTrack, floodProtectionURL) {
        'use strict';
        $scope.ban = '';
        $scope.otac = '';
        $scope.submitted = false;
        $scope.invalidBANLuhnCheck = false;
        $scope.banNotExistsCount = 0;
        $scope.cmsContent = cmsContent.getPanel1Page();
        $scope.isPanel1Open = $scope.$parent.panel1.isOpen;
        $scope.resetErrors = function() {
            $scope.isInvalidBANMsg = "";
            $scope.isInvalidOTACMsg = "";
            $scope.isHeaderError = false;
            $scope.headerErrorMsg = "";
        };
        $scope.resetErrors();
        $scope.serverBanResponded = false;
        $scope.serverOTACResponded = false;
        $scope.validBANLuhnCheck = function() {
            $scope.invalidBANLuhnCheck = !validateLuhn("" + $scope.ban + "");
            if ($scope.invalidBANLuhnCheck) {
                $scope.panel1Form.ban.$invalid = true;
                omnitureTrack.errorInvalidAccount();
                return;
            } else {
                $scope.panel1Form.ban.$invalid = false;
            }
        };
        $scope.submitPanel1 = function() {
            omnitureTrack.step1Continue();
            $scope.submitted = true;
            $scope.resetErrors();
            if ($scope.panel1Form.ban.$error) {
                omnitureTrack.errorInvalidAccount();
            } else if ($scope.panel1Form.otac.$error) {
                omnitureTrack.errorInvalidOtac();
            }
            var banValue = $("#ban").val().replace(/\s/g, '');
            $scope.ban = banValue;
            $scope.validBANLuhnCheck();
            if ($scope.panel1Form.$invalid) {
                return;
            }
            var BANLockeoutCookie = cookieService.get('BANLockout_'+banValue);
            if (BANLockeoutCookie!=null) {
                $scope.$parent.goToLockoutPage();
            }
            $scope.isHeaderError = false;
            $http({
                method: "POST",
                url: "/go/v1/validateBANAndOTAC",
                data: {
                    accountNo : banValue,
                    accessCode : $scope.otac
                }
            }).success(
                function(data, status, headers, config) {
                    var result = data.status;
                    if (result == 'otac_success') {
                        shared.ban = $scope.ban;
                        shared.contactAndServiceDetails = data.contactAndServiceDetails;
                        $scope.$parent.goToPanel2();
                        return;
                    }
                    $("#ban").val($scope.ban);
                    $("#otac").val($scope.otac);
                    if (result == 'ban_or_otac_incorrect') {
                        $scope.isHeaderError = true;
                        if ($scope.banNotExistsCount<=2) {
                            $scope.headerErrorMsg = $scope.cmsContent.errorBANorOTACIncorrect;
                            omnitureTrack.errorBANorOTACIncorrect();
                        } else {
                            $scope.headerErrorMsg = $scope.cmsContent.errorBANorOTACIncorrectThird;
                            omnitureTrack.errorBANorOTACIncorrectThird();
                        }
                        $scope.banNotExistsCount++;
                        return;
                    } else if (result == 'ban_barred') {
                        $scope.serverBanResponded = true;
                        $scope.panel1Form.ban.$invalid = true;
                        $scope.isInvalidBANMsg = $scope.cmsContent.errorBANBarred;
                        omnitureTrack.errorBarredAccount();
                        return;
                    } else if (result == 'ban_nolegallessees') {
                        $scope.serverBanResponded = true;
                        $scope.panel1Form.ban.$invalid = true;
                        $scope.isInvalidBANMsg = $scope.cmsContent.errorBANNoLegaLessee;
                        return;
                    } else if (result == 'ban_invalid_length') {
                        $scope.serverBanResponded = true;
                        $scope.panel1Form.ban.$invalid = true;
                        $scope.isInvalidBANMsg = $scope.cmsContent.errorBANLength;
                        return;
                    } else if (result == 'otac_alreadyValidated') {
                        $scope.serverOTACResponded = true;
                        $scope.panel1Form.otac.$invalid = true;
                        $scope.isInvalidOTACMsg = $scope.cmsContent.errorOTACAlreadyValidated;
                        omnitureTrack.errorOTACValidated();
                        return;
                    } else if (result == 'otac_expired') {
                        $scope.serverOTACResponded = true;
                        $scope.panel1Form.otac.$invalid = true;
                        $scope.isInvalidOTACMsg = $scope.cmsContent.errorOTACExpired;
                        omnitureTrack.errorOTACExpired();
                        return;
                    } else if (result == 'error_other') {
                        $scope.serverBanResponded = true;
                        $scope.serverOTACResponded = true;
                        $scope.panel1Form.otac.$invalid = false;
                        $scope.isHeaderError = true;
                        $scope.headerErrorMsg = $scope.cmsContent.errorOther;
                        omnitureTrack.errorTechnical();
                        return;
                    } else if (result == 'technical_error') {
                        $scope.$parent.goToTechnicalErrorPage();
                        return;
                    } else if (result == 'ban_lockout') {
                        $scope.$parent.goToLockoutPage();
                        return;
                    } else if (result == 'error_dummyDOB') {
                        $scope.serverBanResponded = true;
                        $scope.panel1Form.ban.$invalid = true;
                        $scope.isInvalidBANMsg = $scope.cmsContent.errorDummyDOB;
                        omnitureTrack.errorDummyDOB();
                        return;
                    }
                }
            ).error(
                function(data, status, headers, config) {
                    console.log(data);
                    console.log(status);
                    if (status == '423') { // From flood protection 423
                        $.get(floodProtectionURL);
                        //window.location = floodProtectionURL;
                        $scope.$parent.goToFloodErrorPage();
                    } else {
                        $scope.$parent.goToTechnicalErrorPage();
                    }
                }
            );
        };
        $scope.$watch('ban', function(newValue,oldValue) {
            if (newValue && newValue.replace(/ /g, "").length > 13) {
                $scope.ban = oldValue;
            };
            if ($scope.serverBanResponded) {
                $scope.serverBanResponded = false;
                $scope.ban = '';
            }
        });

        $scope.$watch('otac', function() {
            if ($scope.serverOTACResponded) {
                $scope.serverOTACResponded = false;
                $scope.otac = '';
            }
        });
        /*
         j$(".panel-heading").click(function(e) { //Fix bootstrap accordian to handle click of panel heading
         $scope.step1.isOpen = !$scope.step1.isOpen;
         $scope.$apply();
         e.stopImmediatePropagation();
         e.stopPropagation();
         e.preventDefault();
         });*/

        $('#ban').focus(function(){
            omnitureTrack.banFocus();
        });

        $('#otac').focus(function(){
            omnitureTrack.otacFocus();
        });

        $timeout(function(){
            $('input').placeholder();
        },0);

/*        var isSamSungS5 = navigator.userAgent.indexOf("SAMSUNG SM-G900I")>-1;
        if (isSamSungS5) {
            $('#ban').keydown(function (e) {

                var inputLength = $(this).val().length;

                if(inputLength >= 16) {
                    e.preventDefault();
                    return false;
                }
            });
            $('#otac').keydown(function (e) {

                var inputLength = $(this).val().length;

                if(inputLength >= 6) {
                    e.preventDefault();
                    return false;
                }
            });
        }*/
    });