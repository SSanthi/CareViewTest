class login{
    UserName(){
        return cy.get("#user-name");
    }
    Password(){
        return cy.get("#password");
    }
    loginButton(){
        return cy.get("#login-button");
    }
    //add items to cart
   additemshirt(){
    return cy.get("#add-to-cart-sauce-labs-bolt-t-shirt");
   }
   additemJacket(){
    return cy.get("#add-to-cart-sauce-labs-fleece-jacket");
   }
   cartclick(){
    return cy.get(".shopping_cart_link");
   }
    checkoutclick(){
        return cy.get("#checkout");
    }
    //checkoutpage
    fname(){
        return cy.get("#first-name");

    }
    lname(){
        return cy.get("#last-name");
    }
  zipcode(){
    return cy.get("#postal-code");
  }
  continuebutton(){
    return cy.get("#continue");mn
  }
  finish()
  {
    return cy.get("#finish");
  }
  title()
  {
    return cy.get(".title");
  }
 
}
export default login;