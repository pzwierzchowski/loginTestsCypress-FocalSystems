import Urls from "./urls";
import { faker } from '@faker-js/faker';

const emailField = 'input[id="password-reset-form-password"]'
const sendLinkButton = 'button[data-testid="password-reset-submit-button"]'
const emailValue = faker.internet.email()
const closeButton = 'button[type="button"]'

class ResetPasswordPage{
    visitPage(){
        const Url = new Urls();
        Url.visitPage();
    }
    fillEmailField(){
        cy.get(emailField).type(emailValue);
    }
    clickSendLinkButton(){
        cy.get(sendLinkButton).click();
    }
    checkEmailSentMessageExists(){
        cy.contains('Email Sent');
    }
    clickCloseButton(){
        cy.get(closeButton).click();
    }
}

export default ResetPasswordPage;