## <h1 align="center">Shine bright like a GitHub ⭐</h1>

## 😃 Features:

- List 100 repositories with over 1000 stars from React topic.
- Sort by each column.
- Open each repository in new tab.
- Set pagination size.

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

# typescript check
yarn typescript-check
```

## 🐳 Docker - localhost

0. Run all commands from the project's root directory.
1. Run `./build.local.sh`.
2. Run `docker-compose up -d` to start container.
3. Open your browser and go to localhost:3000
4. Run `docker-compose down` to stop container.

## 🐱 GitHub Actions + 🐳 Docker Hub

- GitHub Actions are used in the CI/CD process to create Docker images from Dockerfiles, which are then pushed to my personal [Docker Hub](https://hub.docker.com/repository/docker/mstrelczuk/shine-bright-like-a-react).

## 🛠️ ToDo:

- **All secrets should be retrived from API after succesful authentication**
- Configure TypeScript path aliases.
- Use `@graphql-codegen` to generate TS types from gql schema.
- Use `topic` query instead of `search` (GitHub API is not working - created ticket for this).
  - `search` does not support pagination.
- Set version in dockerfile from CI/CD env.
- Allow user to filter records.
- Create input for github token and use this token for gql queries.
- Add `Husky` precommit hook for lint and format.
- Run `tsc` before build