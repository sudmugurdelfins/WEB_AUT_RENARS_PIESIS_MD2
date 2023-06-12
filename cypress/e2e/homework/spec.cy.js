import BasePage from "../pageObjects/Base.page";
import SelectPage from "../pageObjects/Select.page";

describe("Homework", () => {
  beforeEach(() => {
    BasePage.visit();
  });
  it("Scenario 1 Make an Appointment" , () => {
    SelectPage.makeAppoint.click();
    SelectPage.usernameField.type('John Doe');
    SelectPage.passwordField.type('ThisIsNotAPassword');
    SelectPage.getLogin.click();
    SelectPage.selectFacility.select('Seoul CURA Healthcare Center');
    SelectPage.getCheck.click();
    SelectPage.getProgram.click();
    SelectPage.openDate.click();
    SelectPage.getDate('30').click();
    cy.get("body").click(); // TO CLOSE THAT FRKN DATE CHOICE
    SelectPage.commentField.type('CURA Healthcare Service');
    SelectPage.lastBut.click();
    
    
    
    
    

  });
  it.only("Scenario 2 Appointment history empty" , () => {
    SelectPage.makeAppoint.click();
    SelectPage.usernameField.type('John Doe');
    SelectPage.passwordField.type('ThisIsNotAPassword');
    SelectPage.getLogin.click();
    SelectPage.getBurger.click();
    SelectPage.getNav.should('have.class', 'active');
    SelectPage.getHistory.click();
    SelectPage.getP.should('contain', 'No appointment');
  });
  
  
  
  
  
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
    });
});