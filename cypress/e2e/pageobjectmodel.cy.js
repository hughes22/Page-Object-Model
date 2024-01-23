import AngularPracticePage from "../PAGEOBJECTS/pagetest";
import { loginData } from "../fixtures/example";
describe('template spec', () => {

  const { admin, invalidCredentials, productName} = loginData;
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
    page.clickshop();

    cy.get('h4[class="card-title"]').should('contain.text','Nokia Edge')
     productName.forEach(function(element){
      cy.selectProduct(element)})
    page.clickcheckout1();
    page.clickcheckout2();
    page.typecountry();
    cy.wait(6000)
    page.suggestion();
    page.clickcheckbox();
    page.clickSubmit();
    page.getalaert().then((alertText)=>{
        cy.log(alertText)
      })

  })
 })
})