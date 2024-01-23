import {AngularPracticePage} from "../PAGEOBJECTS/pagetest";
import { loginData } from "../fixtures/example";
describe('template spec', () => {

  const { admin, invalidCredentials} = loginData;
  const page = new AngularPracticePage();
  it('passes', () => {
    cy.visit('/')
    page.fillName(admin.name);
    page.fillEmail(invalidCredentials.email);
    page.fillPassword(invalidCredentials.password);
    page.selectGender(admin.gender);
    page.checkOption2();
    page.fillRandomDate();
    page.clickSubmit();
    page.getAlertText().then((alertText) => {
      cy.log(alertText);
  })
})
})