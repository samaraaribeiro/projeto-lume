describe('RWA - Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
  }
  it('login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get('.oxd-button').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  })
  it('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin1234')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text')
  })
})
