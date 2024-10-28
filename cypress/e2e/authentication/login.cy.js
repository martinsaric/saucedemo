describe('Login', () => {
  it('Login with valid credentials', () => {
    cy.login('standard_user', 'secret_password')
  })

})