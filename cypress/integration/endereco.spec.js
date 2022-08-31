/// <reference types="cypress" />

describe('Funcionalidade Endereços - Faturamento e entregas', () => {
   beforeEach(() => {
    cy.visit('minha-conta')
    cy.login('aluno_ebac@teste.com', 'teste@teste.com')
   });
   
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        
        //cadastro de endereço
    });
});