/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })

    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('Adriano Henrique')
        cy.get('[type="email"]').type('adriano@email.com')
        cy.get('[type="tel"]').type('61 159753426')
        cy.get('.adicionar').click()
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('gian Souza teste')
        cy.get('[type="email"]').clear().type('gian@teste.com')
        cy.get('[type="tel"]').clear().type('11 876543219')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .delete').click()
    })
})