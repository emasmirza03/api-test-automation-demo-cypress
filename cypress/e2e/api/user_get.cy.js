describe('Reqres API - GET User', () => {
  it('Get Single User by ID', () => {
    cy.getUserById(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('first_name', 'Janet');
    });
  });

  it('Get Single User - Not Found', () => {
    cy.getUserById(23).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty; // Reqres returns {} on 404
    });
  });

  it('Get List Users - Page 2', () => {
    cy.getUsers('page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).to.be.an('array');
    });
  });
});