import { Repository } from "../graphql-types";

export const isRepository = (x: any): x is Repository => x.__typename === "Repository";
