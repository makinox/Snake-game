/// <reference types="cypress" />

export default context('Login', () => {
  it('Its login page', () => {
    cy.visit(Cypress.env('BASE_URL'));
    cy.location('pathname').should('include', '/');
  });

  describe('Layout', () => {
    it('Navbar should be visible', () => {
      cy.get('body nav').should('be.visible').should('have.length', 1);
    });

    it('Navbar should only have 3 links', () => {
      cy.get('body nav div a').should('be.visible').should('have.length', 3);
    });

    it('Score section should be visible', () => {
      cy.get('.section-header').should('be.visible').should('have.length', 1);
    });
  });

  describe('Actions', () => {
    it('Navbar first link should redirect', () => {
      cy.get('body nav div a:nth-child(1)').should('have.attr', 'target', '_blank');
    });

    it('Navbar second link should redirect', () => {
      cy.get('body nav div a:nth-child(2)').should('have.attr', 'target', '_blank');
    });

    it('Navbar third link should redirect', () => {
      cy.get('body nav div a:nth-child(3)').should('have.attr', 'target', '_blank');
    });
  });
});
