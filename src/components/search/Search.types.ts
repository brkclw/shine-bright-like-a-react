import { Repository } from "./../../graphql-types";

export interface SearchProps {
  repositories: Repository[];
  onSearch: (query: string) => void;
}
