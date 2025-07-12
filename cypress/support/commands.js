import { sendApiRequest } from './requestHelper';

Cypress.Commands.add('login', (email, password) => {
  return sendApiRequest({
    method: 'POST',
    url: '/api/login',
    body: { email, password }
  });
});

Cypress.Commands.add('register', (email, password) => {
  const body = password ? { email, password } : { email };

  return sendApiRequest({
    method: 'POST',
    url: '/api/register',
    body
  });
});

// Create user
Cypress.Commands.add('createUser', (name, job) => {
  return sendApiRequest({
    method: 'POST',
    url: '/api/users',
    body: { name, job }
  });
});

// Update user
Cypress.Commands.add('updateUser', (id, name, job) => {
  return sendApiRequest({
    method: 'PUT',
    url: `/api/users/${id}`,
    body: { name, job }
  });
});

// Delete user
Cypress.Commands.add('deleteUser', (id) => {
  return sendApiRequest({
    method: 'DELETE',
    url: `/api/users/${id}`
  });
});

// Get single user by ID
Cypress.Commands.add('getUserById', (id) => {
  return sendApiRequest({
    method: 'GET',
    url: `/api/users/${id}`
  });
});

// Get list of users with query param (e.g., page=2)
Cypress.Commands.add('getUsers', (query = '') => {
  const url = query ? `/api/users?${query}` : '/api/users';
  return sendApiRequest({
    method: 'GET',
    url
  });
});