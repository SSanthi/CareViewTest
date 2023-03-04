import login from "../pageObjects/CareViewLogin";
import { faker } from '@faker-js/faker';
import moment from 'moment';

const url="https://webapp-ae-automation-dev.azurewebsites.net/login";

describe("CareView test", () =>{
    it("Login to the CareView website", () =>{
        cy.visit(url);//Navigate to the webpage
        const careview = new login();
        careview.username().should("be.visible").type("arun.kumar@careviewapp.com");
       // cy.wait(3000);
        careview.password().should("be.visible").type("Demo1234@");
       // cy.wait(3000);
        careview.loginButton().click();
        cy.wait(4000);
        cy.url().should('include', 'https://webapp-ae-automation-dev.azurewebsites.net/');
        cy.wait(3000);
        //Navigate CRM -> Clients
        careview.CRMclick().click();
     
        careview.ClientClick().click();
       
        //create a new client
        careview.CreateNew().click();
        
        careview.Title().should("be.visible").type("Mr");
        
        const clientFirstName = faker.name.firstName();
        careview.FirstName().should("be.visible").type(clientFirstName);
        const clientLastName = faker.name.lastName();
        careview.LastName().should("be.visible").type(clientLastName);
        
        cy.get('select').eq(0).select('CLIENT');
        
        careview.Email().should("be.visible").type(faker.internet.email());
        
        cy.get('select').eq(1).select('Female');

        const dob = (faker.date.past()).toString();
        const formattedDob = moment(dob, 'ddd MMM DD YYYY HH/mm/ss [GMT] Z').format('DD/MM/YYYY');

        careview.DOB().type(formattedDob);
      
        careview.phone().type(faker.phone.phoneNumber('+61 ### ### ###'));
        careview.mobile().type(faker.phone.phoneNumber('+61 ### ### ###'));


        const formattedPlanStartDate = moment(faker.date.past(),'DD/MM/YYYY').toString();
        careview.planStartDate().type(formattedPlanStartDate);
    
        const formattedPlanEndtDate = moment(faker.date.future(),'DD/MM/YYYY').toString();
        careview.planStartDate().type(formattedPlanEndtDate);
        
        careview.serviceRegion().get('select').eq(2).select('Brisbane');
        careview.NDISNumber().type(faker.datatype.uuid());
        
        cy.get('#primaryDisability').select(['Dyslexia'])
        .invoke('val')
        .should('deep.equal',['98118879-1585-4eef-abc5-613989875a85']);

        cy.get("#ServiceType")
          .select(['Plan Management Client'])
          .invoke('val')
          .should('deep.equal', ['Plan Management Client']);
        cy.get("#monthlyStatementOptOut").check().should("be.checked");
        cy.get("#allInvoicesAutoApproved").check().should("be.checked");
       
        careview.aboriginaltorens()
           .select('664964f4-5a57-4794-bf6d-39b23a7f4dd2')
           .should("have.value", '664964f4-5a57-4794-bf6d-39b23a7f4dd2');
        careview.Agreement().click();
        cy.get('td.day').eq('16').click();
        careview.Rate().type("5");
        careview.additionalmail().type("Ram@gmail.com");
        careview.status()
         .select('611dba4d-52d1-4515-89d5-6d30c67f3478')
         .should('have.value', '611dba4d-52d1-4515-89d5-6d30c67f3478');

        careview.otherLanguage().type("Telugu");
        careview.setupcomplete()
         .select('591ed65f-4e35-4468-9cc0-0265d5e4352c')
         .should('have.value', '591ed65f-4e35-4468-9cc0-0265d5e4352c');

         careview.assignTo()
           .select('591ed65f-4e35-4468-9cc0-0265d5e4352c')
           .should('have.value', '591ed65f-4e35-4468-9cc0-0265d5e4352c');

        careview.cultureReq().type("Food, Traditions");
        careview.allergies().type("Nuts and Dust allergies");
        careview.livingArrangement().type(" Lives with Family/ Relatives ");
        careview.interests().type("Reading books");
        careview.note().type("I am happy to create a client");
         
        //Address Details
        careview.Address1().type('Eton Street');
        careview.Address2().type("Mary Street");
        careview.suburb().type("Nundah");
        careview.state().select('QLD').should('have.value', 'QLD');
        careview.postcode().type('4012');
        careview.saveButton().click();

        //search by name
        cy.get('[data-id="clientSearch"]').type(clientFirstName+' '+clientLastName);
        cy.get("#bs-select-1").find('li span').contains(clientFirstName+' '+clientLastName).click();

        //verify the record in the search page
        cy.get('#tableData').find('td > a').contains(clientFirstName);

    })
    
})
