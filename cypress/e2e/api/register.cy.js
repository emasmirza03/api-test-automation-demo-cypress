describe('Reqres API - Register Tests', () => {
  it('Register User Successfully (via command)', () => {
    cy.register('eve.holt@reqres.in', 'pistol').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
    });
  });

  it('Register User Unsuccessfully (Missing Password)', () => {
    cy.register('Budi').then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});