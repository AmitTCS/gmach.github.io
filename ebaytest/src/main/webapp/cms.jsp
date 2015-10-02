<%@ page language="java" contentType="application/javascript; charset=UTF-8" pageEncoding="UTF-8" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="cms" tagdir="/WEB-INF/tags/CMS" %>

/**
 * @ngdoc function
 * @name myAccountAutoReg.service:cmsContent
 * @description
 * # cmsContent
 * cmsContent of the myAccountAutoReg
 */

angular.module('myAccountAutoReg')
    .service('cmsContent', function(){

    var main = {
        pageTitle: "<cms:entry id="pageTitle" page="telstra_go_rego_main" escapeForJavascript="true" />",
        pageIcon: "<cms:entry id="pageIcon" page="telstra_go_rego_main" escapeForJavascript="true" />",
        registerHeading : "<cms:entry id="registerHeading" page="telstra_go_rego_main" escapeForJavascript="true" />",
        telstraID : "<cms:entry id="telstraID" page="telstra_go_rego_main" escapeForJavascript="true" />",
        panel1Title : "<cms:entry id="panel1Title" page="telstra_go_rego_main" escapeForJavascript="true" />",
        panel2Title : "<cms:entry id="panel2Title" page="telstra_go_rego_main" escapeForJavascript="true" />",
        panel3Title : "<cms:entry id="panel3Title" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordResetSuccessText1 : "<cms:entry id="passwordResetSuccessText1" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordResetSuccessText2 : "<cms:entry id="passwordResetSuccessText2" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordRecoverSuccessText1_email : "<cms:entry id="passwordRecoverSuccessText1_email" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordRecoverSuccessText1_sms : "<cms:entry id="passwordRecoverSuccessText1_sms" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordRecoverSuccessText2 : "<cms:entry id="passwordRecoverSuccessText2" page="telstra_go_rego_main" escapeForJavascript="true" />",
        passwordRecoverSuccessText3 : "<cms:entry id="passwordRecoverSuccessText3" page="telstra_go_rego_main" escapeForJavascript="true" />",
        logInLink : "<cms:entry id="logInLink" page="telstra_go_rego_main" escapeForJavascript="true" />",
        chat_now_btn_link : "<cms:entry id="chat_now_btn_link" page="telstra_go_rego_main" escapeForJavascript="true" />",

        lockoutHeading : "<cms:entry id="lockoutHeading" page="telstra_go_rego_main" escapeForJavascript="true" />",
        lockoutMessage : "<cms:entry id="lockoutMessage" page="telstra_go_rego_main" escapeForJavascript="true" />",
        lockoutBtn : "<cms:entry id="lockoutBtn" page="telstra_go_rego_main" escapeForJavascript="true" />",
        chatBtn : "<cms:entry id="chatBtn" page="telstra_go_rego_main" escapeForJavascript="true" />",
        resend_confirmation_link_button : "<cms:entry id="resend_confirmation_link_button" page="telstra_go_rego_main" escapeForJavascript="true" />",
        confirmEmailHeading : "<cms:entry id="confirmEmailHeading" page="telstra_go_rego_main" escapeForJavascript="true" />",
        confirmEmailMessage : "<cms:entry id="confirmEmailMessage" page="telstra_go_rego_main" escapeForJavascript="true" />",
        errorEmailAlreadyValidatedHeading : "<cms:entry id="errorEmailAlreadyValidatedHeading" page="telstra_go_rego_main" escapeForJavascript="true" />",
        errorEmailAlreadyValidatedMessage : "<cms:entry id="errorEmailAlreadyValidatedMessage" page="telstra_go_rego_main" escapeForJavascript="true" />",
        confirmEmailBtn : "<cms:entry id="confirmEmailBtn" page="telstra_go_rego_main" escapeForJavascript="true" />",
        technicalErrorHeading : "<cms:entry id="technicalErrorHeading" page="telstra_go_rego_main" escapeForJavascript="true" />",
        technicalErrorMessage : "<cms:entry id="technicalErrorMessage" page="telstra_go_rego_main" escapeForJavascript="true" />"

    };

	var panel1 = {
        instructions : "<cms:entry id="instructions" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        accountNumber : "<cms:entry id="accountNumber" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        otac : "<cms:entry id="otac" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        fineText : "<cms:entry id="fineText" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        continueButton : "<cms:entry id="continueButton" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        banPlaceHolder : "<cms:entry id="banPlaceHolder" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        otacPlaceHolder : "<cms:entry id="otacPlaceHolder" page="telstra_go_rego_panel1" escapeForJavascript="true" />",

        errorBlankBAN : "<cms:entry id="errorBlankBAN" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBANLength : "<cms:entry id="errorBANLength" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBANLuhnCheck : "<cms:entry id="errorBANLuhnCheck" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBlankOTAC : "<cms:entry id="errorBlankOTAC" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorOTACLength : "<cms:entry id="errorOTACLength" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBANorOTACIncorrect : "<cms:entry id="errorBANorOTACIncorrect" page="telstra_go_rego_panel1" escapeForJavascript="true" />",        errorBANNoLegaLessee : "<cms:entry id="errorBANNoLegaLessee" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBANorOTACIncorrectThird : "<cms:entry id="errorBANorOTACIncorrectThird" page="telstra_go_rego_panel1" escapeForJavascript="true" />",        errorBANNoLegaLessee : "<cms:entry id="errorBANNoLegaLessee" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorBANBarred : "<cms:entry id="errorBANBarred" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorOTACAlreadyValidated : "<cms:entry id="errorOTACAlreadyValidated" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorOTACExpired : "<cms:entry id="errorOTACExpired" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorOther : "<cms:entry id="errorOther" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorDummyDOB : "<cms:entry id="errorDummyDOB" page="telstra_go_rego_panel1" escapeForJavascript="true" />",
        errorTechnical : "<cms:entry id="errorTechnical" page="telstra_go_rego_panel1" escapeForJavascript="true" />"
	};
    var panel2 = {
        headingGreeting : "<cms:entry id="headingGreeting" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        headingText : "<cms:entry id="headingText" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendchoiceOneMobileText1 : "<cms:entry id="sendchoiceOneMobileText1" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendchoiceOneMobileText2 : "<cms:entry id="sendchoiceOneMobileText2" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendChoiceOneWireText1 : "<cms:entry id="sendChoiceOneWireText1" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendChoiceOneWireText2 : "<cms:entry id="sendChoiceOneWireText2" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        multipleChoiceNotification : "<cms:entry id="multipleChoiceNotification" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        noChoiceNotification : "<cms:entry id="noChoiceNotification" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sentCodeblSMS : "<cms:entry id="sentCodeblSMS" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sentCodeblPhone : "<cms:entry id="sentCodeblPhone" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        chooseAnother : "<cms:entry id="chooseAnother" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        resendCode : "<cms:entry id="resendCode" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        resendPinStatus : "<cms:entry id="resendPinStatus" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendNotification : "<cms:entry id="sendNotification" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        sendCodeButton : "<cms:entry id="sendCodeButton" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        validateCodeButton : "<cms:entry id="validateCodeButton" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        pinPlaceHolder : "<cms:entry id="pinPlaceHolder" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        send_sms_tag_before_number : "<cms:entry id="send_sms_tag_before_number" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        call_landline_tag_before_number : "<cms:entry id="call_landline_tag_before_number" page="telstra_go_rego_panel2" escapeForJavascript="true" />",

        errorBlankPIN : "<cms:entry id="errorBlankPIN" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorPINLength : "<cms:entry id="errorPINLength" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorPINInvalid : "<cms:entry id="errorPINInvalid" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorPINExpired : "<cms:entry id="errorPINExpired" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorPINAttemptsExceeded : "<cms:entry id="errorPINAttemptsExceeded" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorUserNotFound : "<cms:entry id="errorUserNotFound" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorSendPINFailed : "<cms:entry id="errorSendPINFailed" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorSendPINInvalidParameters : "<cms:entry id="errorSendPINInvalidParameters" page="telstra_go_rego_panel2" escapeForJavascript="true" />",
        errorTechnical : "<cms:entry id="errorTechnical" page="telstra_go_rego_panel2" escapeForJavascript="true" />"
    };
    var panel3 = {
        header_unregistered : "<cms:entry id="header_unregistered" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        header_3rdparty : "<cms:entry id="header_3rdparty" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        header_bigpondTelstra : "<cms:entry id="header_bigpondTelstra" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        header_all : "<cms:entry id="header_all" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        emailAddress : "<cms:entry id="emailAddress" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        comboboxPlaceholder : "<cms:entry id="comboboxPlaceholder" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        emailPlaceholder : "<cms:entry id="emailPlaceholder" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        change : "<cms:entry id="change" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recoverText1 : "<cms:entry id="recoverText1" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recoverText2_email : "<cms:entry id="recoverText2_email" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recoverText2_sms : "<cms:entry id="recoverText2_sms" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recoverText3 : "<cms:entry id="recoverText3" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        setNewPasswordText : "<cms:entry id="setNewPasswordText" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        logInLink : "<cms:entry id="logInLink" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        password : "<cms:entry id="password" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        termsAndConditions : "<cms:entry id="termsAndConditions" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        continueButton : "<cms:entry id="continueButton" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recoverButton : "<cms:entry id="recoverButton" page="telstra_go_rego_panel3" escapeForJavascript="true" />",

        passwordOneLowercase : "<cms:entry id="passwordOneLowercase" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        passwordOneUppercaseOrDigit : "<cms:entry id="passwordOneUppercaseOrDigit" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        passwordCharactersRange : "<cms:entry id="passwordCharactersRange" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        passwordPunctuationInvalid : "<cms:entry id="passwordPunctuationInvalid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        passwordNoUsernameAndSpace : "<cms:entry id="passwordNoUsernameAndSpace" page="telstra_go_rego_panel3" escapeForJavascript="true" />",

        errorResetPasswordHeader : "<cms:entry id="errorResetPasswordHeader" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorRegisterHeader : "<cms:entry id="errorRegisterHeader" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorBlankEmail : "<cms:entry id="errorBlankEmail" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorEmailInvalid : "<cms:entry id="errorEmailInvalid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorUsernameInvalid : "<cms:entry id="errorUsernameInvalid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorEmailNotBelong : "<cms:entry id="errorEmailNotBelong" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorEmailUsed : "<cms:entry id="errorEmailUsed" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorEmailInsufficientAuthority : "<cms:entry id="errorEmailInsufficientAuthority" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorEmailDetailsDifferent : "<cms:entry id="errorEmailDetailsDifferent" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorCustomeraccountNotFound : "<cms:entry id="errorCustomeraccountNotFound" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorCustomerNotFound : "<cms:entry id="errorCustomerNotFound" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorBlankPassword : "<cms:entry id="errorBlankPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorPasswordInvalid : "<cms:entry id="errorPasswordInvalid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorUserNotFound : "<cms:entry id="errorUserNotFound" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorInvalidParameters : "<cms:entry id="errorInvalidParameters" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorExpiredToken : "<cms:entry id="errorExpiredToken" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorInvalidCurrentPassword : "<cms:entry id="errorInvalidCurrentPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorInvalidParametersToResetPassword : "<cms:entry id="errorInvalidParametersToResetPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorUserNotFoundToResetPassword : "<cms:entry id="errorUserNotFoundToResetPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorInvalidSeretQAForResetPassword : "<cms:entry id="errorInvalidSeretQAForResetPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorInvalidTokenToResetPassword : "<cms:entry id="errorInvalidTokenToResetPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorMessageDeliveryFailed : "<cms:entry id="errorMessageDeliveryFailed" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorMaxAttemptsExceededToResetPassword : "<cms:entry id="errorMaxAttemptsExceededToResetPassword" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        errorPasswordRequirementsNotMet : "<cms:entry id="errorPasswordRequirementsNotMet" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        accountLinkingGeneralFault : "<cms:entry id="accountLinkingGeneralFault" page="telstra_go_rego_panel3" escapeForJavascript="true" />",

        pwd_valid : "<cms:entry id="pwd_valid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        pwd_strong : "<cms:entry id="pwd_strong" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        pwd_invalid : "<cms:entry id="pwd_invalid" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        recover_pwd_btn_link : "<cms:entry id="recover_pwd_btn_link" page="telstra_go_rego_panel3" escapeForJavascript="true" />",
        pwd_reset_success_login_btn_link : "<cms:entry id="pwd_reset_success_login_btn_link" page="telstra_go_rego_panel3" escapeForJavascript="true" />",

    };

    var regoErrors = {
        registration_generic_error_title : "<cms:entry id="registration_generic_error_title" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        registration_generic_error_msg : "<cms:entry id="registration_generic_error_msg" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE_account_creation_unsuccessful_title : "<cms:entry id="RNE_account_creation_unsuccessful_title" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE_GENERIC : "<cms:entry id="RNE_GENERIC" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE11027: "<cms:entry id="RNE11027" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE11000: "<cms:entry id="RNE11000" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE50113: "<cms:entry id="RNE50113" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        RNE11078: "<cms:entry id="RNE11078" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        account_authority_error_title : "<cms:entry id="account_authority_error_title" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        account_authority_error_msg : "<cms:entry id="account_authority_error_msg" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        account_linking_error_title : "<cms:entry id="account_linking_error_title" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        account_linking_error_msg : "<cms:entry id="account_linking_error_msg" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        accountLinkingGeneralFault : "<cms:entry id="accountLinkingGeneralFault" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        contactDetailsMismatch : "<cms:entry id="contactDetailsMismatch" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        customeraccountNotFound : "<cms:entry id="customeraccountNotFound" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        customerNotFound : "<cms:entry id="customerNotFound" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        productNotFound : "<cms:entry id="productNotFound" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        confirmation_not_sent_title : "<cms:entry id="confirmation_not_sent_title" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        registration_invitation_delivery_failed_msg : "<cms:entry id="registration_invitation_delivery_failed_msg" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        user_already_registered_error_msg : "<cms:entry id="user_already_registered_error_msg" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        pwd_invalid : "<cms:entry id="pwd_invalid" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        reAcountUnavailable : "<cms:entry id="reAcountUnavailable" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        reCompleteRegistrationFault : "<cms:entry id="reCompleteRegistrationFault" page="telstra_go_rego_errors" escapeForJavascript="true" />",
        registrationDeniedFault : "<cms:entry id="registrationDeniedFault" page="telstra_go_rego_errors" escapeForJavascript="true" />",
    };
    
    var analytics = {
        pageName : "<cms:entry id="pageName" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        lockoutPageName : "<cms:entry id="lockoutPageName" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        confirmEmailPageName : "<cms:entry id="confirmEmailPageName" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        login : "<cms:entry id="login" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        technicalErrorPageName : "<cms:entry id="technicalErrorPageName" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        accountNumber : "<cms:entry id="accountNumber" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        accessCode : "<cms:entry id="accessCode" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        panel1Form : "<cms:entry id="panel1Form" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        step1ContinueLink : "<cms:entry id="step1ContinueLink" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        panel2Name : "<cms:entry id="panel2Name" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        noContactDetails : "<cms:entry id="noContactDetails" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        pinCode : "<cms:entry id="pinCode" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        panel2Form : "<cms:entry id="panel2Form" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        sendCodeSMS : "<cms:entry id="sendCodeSMS" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        sendCodeVoice : "<cms:entry id="sendCodeVoice" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        sendNewCodeSMS : "<cms:entry id="sendNewCodeSMS" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        sendNewCodeVoice : "<cms:entry id="sendNewCodeVoice" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        sentCodeSuccess : "<cms:entry id="sentCodeSuccess" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        step2Continue : "<cms:entry id="step2Continue" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        choosePhoneNumber : "<cms:entry id="choosePhoneNumber" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        panel3Name : "<cms:entry id="panel3Name" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        emailAddress : "<cms:entry id="emailAddress" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        panel3Form : "<cms:entry id="panel3Form" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        step3Continue : "<cms:entry id="step3Continue" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        submitEmailSuccess : "<cms:entry id="submitEmailSuccess" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        passwordResetSuccess : "<cms:entry id="passwordResetSuccess" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        recover : "<cms:entry id="recover" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        errorInvalidAccount : "<cms:entry id="errorInvalidAccount" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorAccountMissing : "<cms:entry id="errorAccountMissing" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorUnrecognisedAccountThird : "<cms:entry id="errorUnrecognisedAccountThird" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorBarredAccount : "<cms:entry id="errorBarredAccount" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorInvalidOtac : "<cms:entry id="errorInvalidOtac" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorWrongOtac : "<cms:entry id="errorWrongOtac" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorOTACValidated : "<cms:entry id="errorOTACValidated" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorOTACExpired : "<cms:entry id="errorOTACExpired" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorTechnical : "<cms:entry id="errorTechnical" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorDummyDOB : "<cms:entry id="errorDummyDOB" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        errorInvalidCode : "<cms:entry id="errorInvalidCode" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorIncorrectCode : "<cms:entry id="errorIncorrectCode" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorExpiredCode : "<cms:entry id="errorExpiredCode" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorCodeValidationAttemptsExceeded: "<cms:entry id="errorCodeValidationAttemptsExceeded" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorUserNotFound: "<cms:entry id="errorUserNotFound" page="telstra_go_rego_analytics" escapeForJavascript="true" />",

        errorInvalidEmail: "<cms:entry id="errorInvalidEmail" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorEmailNotBelong: "<cms:entry id="errorEmailNotBelong" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorEmailAlreadyRegistered: "<cms:entry id="errorEmailAlreadyRegistered" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorEmailInsufficientAuthority: "<cms:entry id="errorEmailInsufficientAuthority" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorEmailDetailsDifferent: "<cms:entry id="errorEmailDetailsDifferent" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorCustomeraccountNotFound : "<cms:entry id="errorCustomeraccountNotFound" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorCustomerNotFound : "<cms:entry id="errorCustomerNotFound" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorExpiredToken: "<cms:entry id="errorExpiredToken" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorInvalidCurrentPassword: "<cms:entry id="errorInvalidCurrentPassword" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorInvalidSecretQA: "<cms:entry id="errorInvalidSecretQA" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorInvalidToken: "<cms:entry id="errorInvalidToken" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorMessageDeliveryFailed: "<cms:entry id="errorMessageDeliveryFailed" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorResetPasswordAttemptsExceeded: "<cms:entry id="errorResetPasswordAttemptsExceeded" page="telstra_go_rego_analytics" escapeForJavascript="true" />",
        errorPasswordRequirementsNotMet: "<cms:entry id="errorPasswordRequirementsNotMet" page="telstra_go_rego_analytics" escapeForJavascript="true" />"
    };

    return {

        getMainPage: function() {
            return main;
        },
        getPanel1Page: function() {
            return panel1;
        },
        getPanel2Page: function() {
            return panel2;
        },
        getPanel3Page: function() {
            return panel3;
        },
        getRegoErrorsPage: function() {
            return regoErrors;
        },
        getAnalyticsPage: function() {
            return analytics;
        }
    };
});
