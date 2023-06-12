class BasePage{
    static get url(){
        return "https://katalon-demo-cura.herokuapp.com";
    }
    static visit(){
        cy.visit(this.url);
    }
}


export default BasePage;