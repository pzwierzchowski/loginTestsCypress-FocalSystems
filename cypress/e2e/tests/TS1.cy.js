import LoginUsernameEmailPage from "../page-objects/loginUsernameEmailPage";
import LoginPasswordPage from "../page-objects/loginPasswordPage";
import ResetPasswordPage from "../page-objects/resetPasswordPage";



beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
})

describe('TS1 - login tests', () => {
 
  it('should try to login with wrong username/password data', () => {
    
    const loginUsernameEmailPage = new LoginUsernameEmailPage();
    loginUsernameEmailPage.visitPage();
    loginUsernameEmailPage.fillUsernameField();
    loginUsernameEmailPage.clickContinueButton();

    const loginPasswordPage = new LoginPasswordPage();
    loginPasswordPage.fillPasswordField();
    loginPasswordPage.clickContinueButton();
    loginPasswordPage.checkIncorrectUsernameEmailPasswordMessage();
  })

  it('should try to login with wrong email/password data', () => {
    
    const loginUsernameEmailPage = new LoginUsernameEmailPage();
    loginUsernameEmailPage.visitPage();
    loginUsernameEmailPage.fillEmailField();
    loginUsernameEmailPage.clickContinueButton();

    const loginPasswordPage = new LoginPasswordPage();
    loginPasswordPage.fillPasswordField();
    loginPasswordPage.clickContinueButton();
    loginPasswordPage.checkIncorrectUsernameEmailPasswordMessage();
  })

  it('should try to login with wrong email/password data with change username during the test', () => {
    
    const loginUsernameEmailPage = new LoginUsernameEmailPage();
    loginUsernameEmailPage.visitPage();
    loginUsernameEmailPage.fillEmailField();
    loginUsernameEmailPage.clickContinueButton();

    const loginPasswordPage = new LoginPasswordPage();
    loginPasswordPage.clickChangeUserNameButton();
    loginUsernameEmailPage.fillEmailField();
    loginUsernameEmailPage.clickContinueButton();
    loginPasswordPage.fillPasswordField();
    loginPasswordPage.clickContinueButton();
    loginPasswordPage.checkIncorrectUsernameEmailPasswordMessage();
  })

  it('should use "forgot your password" path', () => {
    
    const loginUsernameEmailPage = new LoginUsernameEmailPage();
    loginUsernameEmailPage.visitPage();
    loginUsernameEmailPage.fillEmailField();
    loginUsernameEmailPage.clickContinueButton();

    const loginPasswordPage = new LoginPasswordPage();
    loginPasswordPage.clickForgotPasswordButton();
    
    const resetPasswordPage = new ResetPasswordPage();
    resetPasswordPage.fillEmailField();
    resetPasswordPage.clickSendLinkButton();
    resetPasswordPage.checkEmailSentMessageExists();
    resetPasswordPage.clickCloseButton();
  })
  
})
