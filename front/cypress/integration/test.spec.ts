describe('My First Test', () => {
    it('It Works', () => {
      cy.visit('/');
      cy.get('a[href*="/signin"]')
      .click()
    })
  })