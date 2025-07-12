describe('Reqres API - CRUD User', () => {
  it('Create User Successfully', () => {
    cy.createUser('Emas', 'QA').then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq('Emas');
    });
  });

  it('Update User Successfully', () => {
    cy.updateUser(2, 'morpheus', 'zion resident').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.job).to.eq('zion resident');
    });
  });

  it('Delete User By ID', () => {
    cy.deleteUser(2).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});