describe('Reqres API - Login Tests', () => {
  it('Login with Valid Credential (via command)', () => {
    cy.login('eve.holt@reqres.in', 'cityslicka').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Login Missing Password (via command)', () => {
    cy.login('peter@klaven').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});