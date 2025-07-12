export const sendApiRequest = ({ method, url, body }) => {
  return cy.request({
    method,
    url: `https://reqres.in${url}`,
    headers: {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    },
    body,
    failOnStatusCode: false
  });
};