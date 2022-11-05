<h1 style="text-align: center;">Shine bright like a GitHub ⭐</h1>

## 🐕 Build Setup

```bash
# install dependencies
yarn install

# build
yarn build

# serve at localhost:3000
yarn start

# run tests
yarn test

# lint
yarn lint

# format
yarn format
```

## 😃 Features:

coming soon...

---

## 🛠️ ToDo:

- **all secrets should be retrived from API after succesful authentication** 
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
