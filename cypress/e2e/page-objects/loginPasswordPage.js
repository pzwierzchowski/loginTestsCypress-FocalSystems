import Urls from "./urls";
import { faker } from '@faker-js/faker';

const passwordField = 'input[id="login-form-password"]'
const signInButton = 'button[data-testid="login-submit-button"]'
const incorrectUsernamePassword = 'div[id="notistack-snackbar"]'
const errorMessage = 'Incorrect username/password. Please try again!'
const passwordValue = faker.random.alphaNumeric(7)
const changeUsernameButton = 'button[type="button"]'
const forgotPasswordButton = 'button[type="button"]'

class LoginPasswordPage{

    fillPasswordField(){
        cy.get(passwordField).type(passwordValue);
    }
    clickContinueButton(){
        cy.get(signInButton).click();
    }
    checkIncorrectUsernameEmailPasswordMessage(){
        cy.get(incorrectUsernamePassword).contains(errorMessage);
    }
    clickChangeUserNameButton(){
        cy.get(changeUsernameButton).contains('Change username').click();
    }
    clickForgotPasswordButton(){
        cy.get(forgotPasswordButton).contains('Forgot your password?').click();
    }
}

export default LoginPasswordPage;