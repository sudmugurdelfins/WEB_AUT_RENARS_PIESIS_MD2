import BasePage from "./Base.page";

class SelectPage extends BasePage{
    static get makeAppoint(){
        return cy.get('#btn-make-appointment');
    }
    static get usernameField(){
        return cy.get('[name="username"]');
    }
    static get passwordField(){
        return cy.get('[name="password"]');
    }    
    static get getLogin(){
        return cy.get('#btn-login');
    }
    static get selectFacility(){
        return cy.get('#combo_facility');
    }
    static get getCheck(){
        return cy.get('#chk_hospotal_readmission');
    }
    static get getProgram(){
        return cy.get('#radio_program_medicaid')
    }
    static get openDate(){
        return cy.get('.input-group-addon')
    }
    static getDate(val) {
        return cy.contains("td", val);
    }
    static get commentField(){
        return cy.get('[name="comment"]');
    }
    static get lastBut(){
        return cy.get('#btn-book-appointment')
    }



    static get getBurger(){
        return cy.get('#menu-toggle');
    }
    static get getNav(){
        return cy.get('#sidebar-wrapper');
    }
    static get getHistory(){
        return cy.get('li').eq(2);
    }
    static get getP(){
        return cy.get('p');
    }
}

export default SelectPage;