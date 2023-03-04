import login from "../pageObjects/login.js";
//const url = "https://www.saucedemo.com/";


/*before(function(){
  cy.fixture("example.json").then(function(data){//accessing fixture folder with example file and its contents to data
      
      this.data= data;//accessing data its entire program
  });
 });
beforeEach(function(){
  cy.visit("https://www.saucedemo.com/");
 });*/
 
describe("Navigate swaglabs ",() =>{
/*it("Navigate Swaglab loginpage", () =>{
    
        cy.visit("https://www.saucedemo.com/");
        
        const loginpage=new login();
        loginpage.UserName().should("be.visible").type("standard_user");
        cy.wait(3000);
        loginpage.Password().should("be.visible").type("secret_sauce");
        cy.wait(3000);
        loginpage.loginButton().click();
        cy.wait(5000);
        cy.get(".title").should("have.text", "Products");
        //add to cart
        loginpage.additemshirt().click();
        cy.wait(2000);
        loginpage.additemJacket().click();
        cy.wait(2000);
        loginpage.cartclick().click();
        cy.wait(2000);
        cy.get(".title").should("have.text", "Your Cart");
        loginpage.checkoutclick().click();
        //checkout
        loginpage.fname().type("santhi");
        cy.wait(3000);
        loginpage.lname().type("priya");
        cy.wait(3000);
        loginpage.zipcode().type("23456");
        cy.wait(3000);
        loginpage.continuebutton().click();
        cy.wait(3000);
        loginpage.finish().click();
        cy.wait(2000);
        loginpage.title().should("have.text", "Checkout: Complete!")

    });*/
  
    it('move timer', () => {

      cy.visit('https://vclock.com/timer/');
      cy.get("#btn-set-timer").click();
      
    
     
    
    });
});