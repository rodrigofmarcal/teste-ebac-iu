/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Rodrigo', 'Marcal', 'UBER', 'Brasil', 'rua Azul', '10', 'BH', 'Minas Gerais', '30 000 000', '3101010101', 'foraBolsona@imbecil.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});