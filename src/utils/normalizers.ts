import { isRepository } from "./guards";
import { GetRepositoriesQuery } from "./../graphql-types";

export const normalizeRepositories = (data?: GetRepositoriesQuery) => {
  if (!data) {
    return undefined;
  }
  const repositories = data?.search?.edges
    ?.map((edge) => edge?.node)
    .filter(isRepository);

  return repositories;
};
