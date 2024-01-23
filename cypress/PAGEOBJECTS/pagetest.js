class  AngularPracticePage {

    fillName(name) {
        cy.get('[minlength="2"]').type(name);
      }

    fillEmail(email) {
        cy.get('[name="email"]').type(email);
      }
    fillPassword(password) {
        cy.get('[type="password"]').type(password);
      }
    
    selectGender(gender) {
        cy.get('div select').select(gender);
      }
    
    checkOption2() {
        cy.get('input[value="option2"]').check().should("be.checked");
      }
    
    fillRandomDate() {
        const randomDate = this.getRandomDate();
        cy.get('input[type="date"]').type(randomDate);
      }
    
    clickSubmit() {
        cy.get('input.btn.btn-success').click();
      }
    
    getAlertText() {
        return cy.get('.alert').invoke('text');
      }
    
    getRandomDate() {
        // Your existing getRandomDate function
        // ...
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2024-12-31');
        const timeDifference = endDate.getTime() - startDate.getTime();
        const randomTime = Math.random() * timeDifference;
        const randomDate = new Date(startDate.getTime() + randomTime);
        const formattedDate = `${randomDate.getFullYear()}-${(randomDate.getMonth() + 1).toString().padStart(2, '0')}-${randomDate.getDate().toString().padStart(2, '0')}`;
    
        return formattedDate;
      }

}
export default AngularPracticePage;