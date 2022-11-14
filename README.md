## <h1 align="center">Shine bright like a GitHub ⭐</h1>

## 😃 Features:

- List repositories with over 1000 stars from React topic.
- Sort by each column.
- Open each repository in new tab.
- Set pagination size.
- Search for your favorite project

## 🐕 Build Setup

**Do not forget to provide GitHub token and GraphQL API url to specific .env file**

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
- Set version in dockerfile from CI/CD env.
- Create input for github token and use this token for gql queries.
- Add `Husky` precommit hook for lint and format.
