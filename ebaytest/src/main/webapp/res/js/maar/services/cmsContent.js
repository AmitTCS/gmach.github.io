

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
            pageTitle: "Register - Telstra GO",
            pageIcon: "",
            registerHeading : "Register for your",
            telstraID : "TELSTRA ID",
            panel1Title : "Your account number",
            panel2Title : "We need to verify it\'s you",
            panel3Title : "Your username and password",
            passwordResetSuccessText1 : "Your password has been successfully reset. We have emailed you to confirm the change.",
            passwordResetSuccessText2 : "Log in to continue.",
            passwordRecoverSuccessText1_email : "We have emailed your password to",
            passwordRecoverSuccessText1_sms : "A message containing your password for the below account has been sent to",
            passwordRecoverSuccessText2 : "Please allow up to an hour for the SMS to arrive.",
            passwordRecoverSuccessText3 : "Your username is",
            logInLink : "Log in",
            chat_now_btn_link : "https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError",

            lockoutHeading : "Verification temporarily disabled",
            lockoutMessage : "Due to multiple unsuccessful attempts, we\'ve temporarily disabled verification using this phone number.<br\/> Try again in 20 minutes or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            lockoutBtn : "Return to registration",
            chatBtn : "Chat now",
            resend_confirmation_link_button : "Resend confirmation link",
            confirmEmailHeading : "Confirm your email",
            confirmEmailMessage : "<p>To complete your registration, you need to confirm your email address.<\/p><p>Click on the confirmation link in the email we have just sent to %s.<\/p><p>Once you\'ve confirmed your email address, you can use it to log in with Telstra.<\/p><p>For security reasons, the link will expire in seven days.<\/p>",
            errorEmailAlreadyValidatedHeading : "Your email address has already been confirmed",
            errorEmailAlreadyValidatedMessage : "Good news, your registration is already complete. You can <a href=\"https:\/\/www.my.telstra.com.au\/myaccount\/home\">log in with Telstra<\/a>.",
            confirmEmailBtn : "Return to registration",
            technicalErrorHeading : "TECHNICAL ERROR",
            technicalErrorMessage : "We apologise for the inconvenience but due to technical issues we cannot complete your request. Please try again later."

        };

        var panel1 = {
            instructions : "Enter your:",
            accountNumber : "Account number",
            otac : "One-time access code",
            fineText : "Enter the access code Telstra supplied you with.",
            continueButton : "Continue",
            banPlaceHolder : "13 digits, starting with 200",
            otacPlaceHolder : "6 characters",

            errorBlankBAN : "Enter a valid Telstra 13-digit account number.",
            errorBANLength : "Enter a valid Telstra 13-digit account number.",
            errorBANLuhnCheck : "Enter a valid Telstra 13-digit account number.",
            errorBlankOTAC : "Enter a valid access code.",
            errorOTACLength : "Enter a valid access code.",
            errorBANorOTACIncorrect : "That BAN or access code is incorrect. Try again.",        errorBANNoLegaLessee : "We can\'t find that account number. Try again or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorBANorOTACIncorrectThird : "That BAN or access code is incorrect. Try again or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",        errorBANNoLegaLessee : "We can\'t find that account number. Try again or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorBANBarred : "Our records indicate that you\'re not authorised to access this account. Contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorOTACAlreadyValidated : "Our records indicate that you have already used that access code. Contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorOTACExpired : "That access code has expired. Try again or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorOther : "We apologize for the inconvenience but due to technical issues we cannot complete your request. Please try again later.",
            errorDummyDOB : "We have identified issues with your account details. To register for this account number, contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorTechnical : "We apologize for the inconvenience but due to technical issues we cannot complete your request. Please try again later."
        };
        var panel2 = {
            headingGreeting : "Hi",
            headingText : ", for security and privacy reasons, we need to be sure it\'s you.",
            sendchoiceOneMobileText1 : "We\'ll send a verification code via SMS to",
            sendchoiceOneMobileText2 : "",
            sendChoiceOneWireText1 : "We\'ll call you on",
            sendChoiceOneWireText2 : "with a code, which you\'ll need to note down.",
            multipleChoiceNotification : "How would you like to receive your verification code?",
            noChoiceNotification : "If there are no numbers to select from, contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            sentCodeblSMS : "Enter the code we sent via SMS to",
            sentCodeblPhone : "We\'ll call you with a code on",
            chooseAnother : "Choose a different number",
            resendCode : "Send new code",
            resendPinStatus : "Sent",
            sendNotification : "We\'ll send a notification to the account owner to keep them up to date.",
            sendCodeButton : "Send code",
            validateCodeButton : "Continue",
            pinPlaceHolder : "6 digits",
            send_sms_tag_before_number : "SMS",
            call_landline_tag_before_number : "Call me on",

            errorBlankPIN : "Enter a valid 6-digit verification code.",
            errorPINLength : "Enter a valid 6-digit verification code.",
            errorPINInvalid : "Enter a valid 6-digit verification code.",
            errorPINExpired : "That code has expired. Get a new code.",
            errorPINAttemptsExceeded : "You have exceeded the number of validation attempts. Try again later or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorUserNotFound : "We apologize for the inconvenience but due to technical issues we cannot complete your request. Please try again later.",
            errorSendPINFailed : "Due to a technical issue, we can\'t send a code right now. Try again later or contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.",
            errorSendPINInvalidParameters : "We apologize for the inconvenience but due to technical issues we cannot complete your request. Please try again later.",
            errorTechnical : "We apologize for the inconvenience but due to technical issues we cannot complete your request. Please try again later."
        };
        var panel3 = {
            header_unregistered : "Your email address will be your username and the primary way we contact you.",
            header_3rdparty : "Register for your Telstra ID",
            header_bigpondTelstra : "<p>Register for a new Telstra ID now or, if you would rather use your existing BigPond or Telstra mailbox-based Telstra ID, select one from the list.<\/p>\t\t<p>Your email address will be your username and the primary way we contact you.<\/p>",
            header_all : "<p>Pick your preferred Telstra ID from the list to continue.<\/p><p>Your email address will be your username and the primary way we contact you.<\/p>",
            emailAddress : "Email Address",
            comboboxPlaceholder : "you@domain.com",
            emailPlaceholder : "you@domain.com",
            change : "Edit",
            recoverText1 : "Your email has already been registered. <a href=\"https:\/\/www.my.telstra.com.au\/myaccount\/home\"  target=\"_blank\">Log in<\/a> to My Account.<br\/> Recover your BigPond password.",
            recoverText2_email : "",
            recoverText2_sms : "",
            recoverText3 : "",
            setNewPasswordText : "Your email has already been registered. <a href=\"https:\/\/www.my.telstra.com.au\/myaccount\/home\" target=\"_blank\">Log in<\/a> to My Account.<br\/>Forgotten your password? Set a new one below.",
            logInLink : "Log in",
            password : "Password",
            termsAndConditions : "The information you provide will be treated in accordance with our <a href=\"http:\/\/www.telstra.com.au\/privacy\/privacy-statement\/\" target=\"blank\">Privacy Statement.<\/a>.",
            continueButton : "Continue",
            recoverButton : "Recover password",

            passwordOneLowercase : "At least one lowercase letter",
            passwordOneUppercaseOrDigit : "At least one uppercase letter or digit",
            passwordCharactersRange : "8-16 characters",
            passwordPunctuationInvalid : "No punctuation apart from full stops (.), hyphens (-) or underscores (_)",
            passwordNoUsernameAndSpace : "Don\'t include your username or spaces",

            errorResetPasswordHeader : "Sorry, your password reset\/recovery has been unsuccessful",
            errorRegisterHeader : "Sorry, your registration was unsuccessful",
            errorBlankEmail : "Enter a valid email address.",
            errorEmailInvalid : "Enter a valid email address.",
            errorUsernameInvalid : "Enter a valid email address.",
            errorEmailNotBelong : "This email address does not belong to you or is not linked to your account. Try a different email address.",
            errorEmailUsed : "<p>Good news, you have already registered the username %s and can use this to <a href=\"https:\/\/www.my.telstra.com.au\/myaccount\/home\" target=\"_blank\">log in<\/a>. If you need to, you can <a href=\"https:\/\/id.telstra.com.au\/forgottenPassword?gotoURL=https:\/\/my.telstra.com.au\/myaccount\/home\" target=\"_blank\">reset\/retrieve your password<\/a>.<\/p>",
            errorEmailInsufficientAuthority : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorEmailDetailsDifferent : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorCustomeraccountNotFound : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorCustomerNotFound : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorBlankPassword : "Enter a valid Password.",
            errorPasswordInvalid : "Enter a valid Password.",
            errorUserNotFound : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorInvalidParameters : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorExpiredToken : "<p>For security reasons, we are unable to reset or recover your password at this time.<\/p>\t<p>Please contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for further help.<\/p>",
            errorInvalidCurrentPassword : "<p>For security reasons, we are unable to reset or recover your password at this time.<\/p>\t<p>Please contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for further help.<\/p>",
            errorInvalidParametersToResetPassword : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorUserNotFoundToResetPassword : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorInvalidSeretQAForResetPassword : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorInvalidTokenToResetPassword : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorMessageDeliveryFailed : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",
            errorMaxAttemptsExceededToResetPassword : "<p>For security reasons, we are unable to reset or recover your password at this time.<\/p>\t<p>Please contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for further help.<\/p>",
            errorPasswordRequirementsNotMet : "Your password can be any combination of upper and lowercase letters, numbers, hyphens, full stops and underscores, and must contain at least one uppercase letter or number. Please try again.",
            accountLinkingGeneralFault : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p>                        <p>If the problem persists, please contact us on <a href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" target=\"_blank\">24x7 Chat<\/a> for help.<\/p>",

            pwd_valid : "Valid",
            pwd_strong : "Strong",
            pwd_invalid : "Invalid",
            recover_pwd_btn_link : "https:\/\/id.telstra.com.au\/forgottenPassword?gotoURL=https:\/\/my.telstra.com.au\/myaccount\/home",
            pwd_reset_success_login_btn_link : "https:\/\/my.telstra.com.au\/myaccount\/home",

        };

        var regoErrors = {
            registration_generic_error_title : "An unexpected error has occurred",
            registration_generic_error_msg : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            RNE_account_creation_unsuccessful_title : "Sorry, your registration was unsuccessful",
            RNE_GENERIC : "<p>Unfortunately, we are experiencing problems completing your request. Please try again later.<\/p><p>If the problem persists, please contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for help and quote incident #%s to the agent for assistance.<\/p>",
            RNE11027: "<p>Unfortunately, we are experiencing problems completing your request. Please try again later.<\/p><p>If the problem persists, please contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for help and quote incident #%s to the agent for assistance.<\/p>",
            RNE11000: "<p>Our records say you\'re not authorised to access this account.<\/p><p>If you believe you do have the authority, please contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> and quote incident #%s to the agent.<\/p>",
            RNE50113: "<p>Unfortunately, we are experiencing problems completing your request. Please try again later.<\/p><p>If the problem persists, please contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for help and quote incident #%s to the agent for assistance.<\/p>",
            RNE11078: "<p>Unfortunately, we are experiencing problems completing your request. Please try again later.<\/p><p>If the problem persists, please contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a> for help and quote incident #%s to the agent for assistance.<\/p>",
            account_authority_error_title : "Your registration was unsuccessful",
            account_authority_error_msg : "<p>It seems that you don\'t have the necessary authority to access and view these services in My Account.<\/p><b>What to do next?<\/b><p>Ask the account owner to  <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">contact us<\/a> and grant you the authority to access the account.<\/p> <p>Further information for your account owner can be found on our Help and Support page for <a target=\"_blank\" href=\"http:\/\/go.telstra.com.au\/helpandsupport\/-\/levels-of-authority-required\">granting the authority to access and view services My Account<\/a>.<\/p>",
            account_linking_error_title : "You seem to be registered already",
            account_linking_error_msg : "<p>You\'ve registered before with %s.<\/p>    <b>What to do next?<\/b>    <ul class=\"account_linking_error_msg_list\">    <li><span class=\"error-suggestion\"><a class=\"login_link back-to-login\" href=\"%s\">Try logging in<\/a> with the above email address<\/span><\/li>    <li><span class=\"error-suggestion\"><a href=\"\/forgottenPassword?gotoUrl=%s\" class=\"recover-password forgotten_link\">Recover your password<\/a><\/span><\/li>    <li><span class=\"error-suggestion\">Contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\" class=\"live_chat\">24x7 Chat<\/a> for assistance<\/span><\/li>    <\/ul>",
            accountLinkingGeneralFault : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            contactDetailsMismatch : "<p>Unfortunately, there is a problem completing your request. Please try again later.<\/p><p>If the problem persists, please contact us on <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">Live Chat<\/a> for help and quote incident #%s to the agent.<\/p>",
            customeraccountNotFound : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            customerNotFound : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            productNotFound : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            confirmation_not_sent_title : "Confirmation email not sent",
            registration_invitation_delivery_failed_msg : "<p>Sorry, there was an issue with sending your confirmation email.<\/p>                <p>To resend the confirmation email to: %s, please click below to re-try.<\/p>",
            user_already_registered_error_msg : "<p>Good news, you have already registered the username %s and can use this to <a href=\"https:\/\/www.my.telstra.com.au\/myaccount\/home\" target=\"_blank\">log in<\/a>. If you need to, you can <a href=\"https:\/\/id.telstra.com.au\/forgottenPassword?gotoURL=https:\/\/my.telstra.com.au\/myaccount\/home\" target=\"_blank\">reset\/retrieve your password<\/a>.<\/p>",
            pwd_invalid : "Your password does not meet our password requirements. Please try again.A combination of letters (upper and lower case), numbers and symbols will make your password stronger.",
            reAcountUnavailable : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            reCompleteRegistrationFault : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
            registrationDeniedFault : "<p>Unfortunately, your registration could not be completed.<\/p><p> Please try again later. For assistance to complete your registration contact us via <a target=\"_blank\" href=\"https:\/\/livechat.telstra.com\/TCOM:MyAccount:AutoRegError\">24x7 Chat<\/a>.<\/p>",
        };

        var analytics = {
            pageName : "Register - Telstra GO",
            lockoutPageName : "AutoReg:lockout",
            confirmEmailPageName : "AutoReg:confirm Email",
            login : "AutoReg:login",
            technicalErrorPageName : "AutoReg:technical error",

            accountNumber : "AutoReg:step1:your account number:account number",
            accessCode : "AutoReg:step1:your account number:access code",
            panel1Form : "AutoReg:step1:your account number",
            step1ContinueLink : "AutoReg:step1:your account number:continue",

            panel2Name : "AutoReg:step2:we need to verify it\'s you:title",
            noContactDetails : "AutoReg:step2:we need to verify it\'s you:no contact details",
            pinCode : "AutoReg:step2:we need to verify it\'s you:6 digit code",
            panel2Form : "AutoReg:step2:we need to verify it\'s you",
            sendCodeSMS : "AutoReg:step2:we need to verify it\'s you:send code via SMS",
            sendCodeVoice : "AutoReg:step2:we need to verify it\'s you:send code via Voice call",
            sendNewCodeSMS : "AutoReg:step2:we need to verify it\'s you:send new code via SMS",
            sendNewCodeVoice : "AutoReg:step2:we need to verify it\'s you:send new code via Voice call",
            sentCodeSuccess : "AutoReg:step2:we need to verify it\'s you:pin code sent successful and verification code screen shown",
            step2Continue : "AutoReg:step2:we need to verify it\'s you:continue",
            choosePhoneNumber : "AutoReg:step2:we need to verify it\'s you:choose a different phone number",

            panel3Name : "AutoReg:step3:your username and password:title",
            emailAddress : "AutoReg:step3:your username and password:email address",
            panel3Form : "AutoReg:step3:your username and password",
            step3Continue : "AutoReg:step3:your username and password:continue",
            submitEmailSuccess : "AutoReg:step3:your username and password:successful submissions of Email address",
            passwordResetSuccess : "AutoReg:step3:your username and password:password resets success shown",
            recover : "AutoReg:step3:your username and password:recover Bigpond password",

            errorInvalidAccount : "AutoReg:step1:your account number:invalid account",
            errorAccountMissing : "AutoReg:step1:your account number:account missing",
            errorUnrecognisedAccountThird : "AutoReg:step1:your account number:unrecognised account:third attempt",
            errorBarredAccount : "AutoReg:step1:your account number:barred account",
            errorInvalidOtac : "AutoReg:step1:your account number:invalid otac",
            errorWrongOtac : "AutoReg:step1:your account number:wrong otac",
            errorOTACValidated : "AutoReg:step1:your account number:otac already validated",
            errorOTACExpired : "AutoReg:step1:your account number:expired otac",
            errorTechnical : "AutoReg:technical error",
            errorDummyDOB : "AutoReg:step1:your account number:account with dummy dob",

            errorInvalidCode : "AutoReg:step2:we need to verify it\'s you:invalid code",
            errorIncorrectCode : "AutoReg:step2:we need to verify it\'s you:incorrect code",
            errorExpiredCode : "AutoReg:step2:we need to verify it\'s you:expired code",
            errorCodeValidationAttemptsExceeded: "AutoReg:step2:we need to verify it\'s you:validation attempts exceeded",
            errorUserNotFound: "AutoReg:step2:we need to verify it\'s you:user not found",

            errorInvalidEmail: "AutoReg:step3:your username and password:invalid email",
            errorEmailNotBelong: "AutoReg:step3:your username and password:email not belong",
            errorEmailAlreadyRegistered: "AutoReg:step3:your username and password:email already registered",
            errorEmailInsufficientAuthority: "AutoReg:step3:your username and password:email insufficient authority",
            errorEmailDetailsDifferent: "AutoReg:step3:your username and password:email detail different",
            errorCustomeraccountNotFound : "AutoReg:step3:your username and password:customer Account Not Found",
            errorCustomerNotFound : "AutoReg:step3:your username and password:customer Not Found",
            errorExpiredToken: "AutoReg:step3:your username and password:expired token for reset password",
            errorInvalidCurrentPassword: "AutoReg:step3:your username and password:invalid Current Password",
            errorInvalidSecretQA: "AutoReg:step3:your username and password:invalid Secret Q and A for reset password",
            errorInvalidToken: "AutoReg:step3:your username and password:invalid token to reset password",
            errorMessageDeliveryFailed: "AutoReg:step3:your username and password:message delivery failed to reset password",
            errorResetPasswordAttemptsExceeded: "AutoReg:step3:your username and password:max attempts exceeded to reset password",
            errorPasswordRequirementsNotMet: "AutoReg:step3:your username and password:password requirements not met to reset password"
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