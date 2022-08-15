///<reference types="cypress" />

describe('Funcionalidade de pré cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    

it('Deve completar o pré cadastro com sucesso', () => {
    cy.get('#reg_email').type('rfmteste99@teste.com')
    cy.get('#reg_password').type('teste@teste$')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(Rodrigo)
    cy.get('#account_last_name').type(Marçal)
    cy.get('.woocommerce-Button').click()
    


});


    
});