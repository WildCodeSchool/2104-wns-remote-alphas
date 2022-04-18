describe('My First Test', () => {
    it('It Works', () => {
      cy.visit('/');
      cy.get('button').contains('Log in').click()
      cy.get('input[name*="email"]').type('ameline@gmail.com')
      cy.get('input[name*="password"]').type('password')
      cy.get('button[type*="submit"]').click()
    })
  })