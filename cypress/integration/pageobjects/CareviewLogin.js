class login{
    username()
    {
        return cy.get("#txtUsername");
    }

    password()
    {
       return cy.get("#txtPassword");
    }

    loginButton()
    {
        return cy.get("button[class='btn btn-primary btnLogin']");
    }

    //Navigate CRM -> Clients
    CRMclick()
    {
        return cy.get("#side-menu a[href='#']");
    }

    ClientClick()
    {
        return cy.get("a[href='/Clients']");
    }

   //Create a new client
   CreateNew()
   {
      return cy.get("a[onclick='showNewClientPopup();']");
   }

   Title()
   {
      return cy.get("input[placeholder='Title']");
   }

   FirstName()
   {
      return cy.get("input[placeholder='First name']");
   }

   LastName()
   {
       return cy.get("input[placeholder='Last name']");
   }

  Email()
  {
    return cy.get("input[placeholder='Email']");
  }

  DOB()
  {
   return cy.get("#dob");
  }

  phone()
  {
    return cy.get("#phone");
  }

  mobile()
  {
    return cy.get("#mobile");
  }

  planStartDate()
  {
    return cy.get("#planStartDate");
  }

  planEndDate()
  {
    return cy.get("#planEndDate");
  }

  serviceRegion()
  {
    return cy.get("#serviceRegion");
  }

  NDISNumber()
  {
    return cy.get("#NDISNumber");
  }

  aboriginaltorens()
  {
    return cy.get("#participantIdentity");
  }

  Agreement()
  {
    return cy.get("#agreementSignedDate");
  }

  Rate()
  {
    return cy.get("#planCurrentRate");
  }
   
  additionalmail()
  {
    return cy.get("#additionalEmails");
  }

  status()
  {
    return cy.get("#clientStatus");
  }
   
   otherLanguage()
     {
        return cy.get("#otherPrimaryLanguage");
     }

    setupcomplete()
    {
        return cy.get("#setupCompletedBy");
    }

    assignTo()
    {
       return cy.get("#assignedTo");
    }

    cultureReq()
    {
       return cy.get("#culturalRequirements");
    }

    allergies()
    {
       return cy.get('#allergies');
    }

    livingArrangement()
    {
       return cy.get('#livingArrangements');
    }

    interests()
    {
       return cy.get('#interests');
    }

    note()
    {
       return cy.get("#notes");
    }

    //Address details
    Address1()
    {
       return cy.get('#address1');
    }

    Address2()
    {
       return cy.get('#address2');
    }

    suburb()
    {
       return cy.get('#suburb');
    }

    state()
    {
       return cy.get('#state');
    }

    postcode()
    {
       return cy.get('#postcode');
    }

    saveButton()
    {
       return cy.get('#btnSaveNewClient');
    }
    
}
export default login;
