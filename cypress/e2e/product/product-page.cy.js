describe('product' , () => {

    it('view-product', () => {
        cy.login('standard_user', 'secret_password')
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').click()
        .url().should('eq', 'https://www.saucedemo.com/inventory-item.html?id=4')


      cy.get('[data-test="inventory-item-price"]').should('be.visible')
      cy.get('[data-test="add-to-cart"]').should('be.visible')
      cy.get('[data-test="back-to-products"]').should('be.visible')
    })
})