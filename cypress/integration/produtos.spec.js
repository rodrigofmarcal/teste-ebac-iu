/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/page/3')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(8)
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Balboa Persistence Tee').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Balboa Persistence Tee” foram adicionados no seu carrinho')

    });

    it('Deve adicionar produtos ao carrinho - Usando Comando customizado ', () => {
        var quantidade = 2

        cy.addProdutos('Balboa Persistence Tee', 'XL', 'Green', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Balboa Persistence Tee” foram adicionados no seu carrinho.')
    });

});