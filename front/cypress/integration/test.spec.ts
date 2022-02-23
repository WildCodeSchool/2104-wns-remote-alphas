describe('My First Test', () => {
    it('It Works', () => {
      cy.visit('/');
      cy.get('a[href*="/signin"]')
      .click()
      cy.get('input[name*="email"]').type('ameline@gmail.com')
      cy.get('input[name*="password"]').type('password')
      cy.get('form').submit()
    })
  })