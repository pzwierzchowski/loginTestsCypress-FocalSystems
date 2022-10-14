import Urls from "./urls";
import { faker } from '@faker-js/faker';

const usernameEmailField = 'input[id="realm-form-username"]'
const continueButton = 'button[type="submit"]'
const usernameValue = faker.name.firstName()
const emailValue = faker.internet.email()

class LoginUsernameEmailPage{
    visitPage(){
        const Url = new Urls();
        Url.visitPage();
    }
    fillUsernameField(){
        cy.get(usernameEmailField).type(usernameValue)
    }
    fillEmailField(){
        cy.get(usernameEmailField).type(emailValue)
    }
    clickContinueButton(){
        cy.get(continueButton).click()
    }
    
}


export default LoginUsernameEmailPage;