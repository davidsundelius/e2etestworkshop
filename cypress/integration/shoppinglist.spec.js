describe('Shopping list', () => {
  before(() => {
    cy.visit('http://localhost:8080/')
  })

  after(() => {
    cy.get('#logout').click();
    cy.visit('http://localhost:8080/clearList.html')
  })

  it('displays correct headers', () => {
    cy.get('h1').first().should('have.text', 'Shoppinglistan!')
    cy.get('h2').first().should('have.text', 'Logga in för att se din varukorg')
  })

  it('should show error message when we login with wrong credentials', () => {
    cy.get('#username').type('admin2');
    cy.get('#password').type('pwd1234');
    cy.get('#loginButton').click();
    cy.get('#errorMessage').should('have.text', 'Fel anvvändarnamn och/eller lösenord')
  });

  it('should be able to login', () => {
    cy.get('#username').clear()
    cy.get('#username').type('admin');
    cy.get('#password').clear()
    cy.get('#password').type('pwd123');
    cy.get('#loginButton').click();
    cy.get('h1').first().should('have.text', 'Shoppinglistan!')
    cy.get('h2').first().should('have.text', 'Här är din shoppinglista!')
  });

  it('should be able to add items to the list', () => {
    cy.get('#newItem').type('äpplen');
    cy.get('#addItem').click();
    cy.get('li').should('have.length', 1)
    cy.get('#newItem').type('päron');
    cy.get('#addItem').click();
    cy.get('li').should('have.length', 2)
  });

  it('should be able to add items to the list', () => {
    cy.get('#remove-0').click();
    cy.get('li').should('have.length', 1)
    cy.get('li').first().should('contain', 'päron');
    cy.get('#remove-0').click();
    cy.get('li').should('have.length', 0)

    cy.get('#newItem').type('skräp');
    cy.get('#addItem').click();
  });
});
