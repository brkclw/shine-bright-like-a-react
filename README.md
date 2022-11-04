<h1 style="text-align: center;">Shine bright like a GitHub ⭐</h1>

## Available Scripts

Before all run:

#### `yarn install`

In the project directory, you can run:

### Start

#### `yarn start`

### Build

#### `yarn build`

### Test

### `yarn test`

---

## 😃 Features:

coming soon...

---

## 🛠️ ToDo:

- configure TypeScript path aliases
- use `@graphql-codegen` to generate TS types from gql schema
- use `topic` query instead of `search` (GitHub API is not working - created ticket for this).
  - `search` does not support pagination.
- configure GitHub actions
  - add secrets
- set version in dockerfile from CI/CD env

---

## 🐳 Docker - localhost

0. Run all commands from the project's root directory.
1. Run `./build.local.sh`.
2. Run `docker-compose up -d` to start container.
3. Open your browser and go to localhost:3000
4. Run `docker-compose down` to stop container.
