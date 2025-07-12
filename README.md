# API Test Automation with Cypress

This project contains API test automation using [Cypress](https://www.cypress.io/) and public API service [https://reqres.in](https://reqres.in).

## 📁 Folder Structure

```
cypress/
├── e2e/
│   └── api/
│       ├── login.cy.js
│       ├── register.cy.js
│       └── user.cy.js
├── support/
│   │── requestHelper.js
│   ├── commands.js
│   └── e2e.js
cypress.config.js
package.json
```

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Run all tests (headless)

```bash
npx cypress run
```

### Run tests in UI mode

```bash
npx cypress open
```

## 🧩 Available Commands

| Command              | Description                   |
|----------------------|-------------------------------|
| `cy.login()`         | Login user                    |
| `cy.register()`      | Register user                 |
| `cy.createUser()`    | Create new user               |
| `cy.updateUser()`    | Update user by ID             |
| `cy.deleteUser()`    | Delete user by ID             |
| `cy.getUserById()`   | Get user by ID                |
| `cy.getUsers()`      | Get paginated list of users   |

All commands use `sendApiRequest()` helper to standardize requests.