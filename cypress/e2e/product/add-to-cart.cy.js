describe('cart', () => {


    it('add-to-cart', () => {
        cy.login('standard_user', 'secret_password')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('have.text', 'Add to cart')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()

        cy.get('[data-test="remove-sauce-labs-onesie"]').should('have.text', 'Remove')
        .and('have.css', 'color', 'rgb(226, 35, 26)')
    })
})