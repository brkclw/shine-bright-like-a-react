import { ColumnsType } from "antd/es/table";
import { Repository } from "../../graphql-types";
import { StyledLink } from "./RepositoryList.styled";

export const textSorter = (a: string, b: string) => a.localeCompare(b);

export const numericSorter = (a: number, b: number) => a - b;

export const columns: ColumnsType<Repository> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    width: "30%",
    render: (_, { name, url }) => {
      return (
        <StyledLink href={url} target="_blank" rel="noreferrer">
          {name}
        </StyledLink>
      );
    },
  },
  {
    title: "Owner",
    dataIndex: "owner.login",
    width: "30%",
    render: (_, { owner, url }) => {
      return (
        <StyledLink href={url} target="_blank" rel="noreferrer">
          {owner.login}
        </StyledLink>
      );
    },
  },
  {
    title: "Stars",
    dataIndex: "stargazerCount",
    width: "20%",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    render: (_, { name, stargazerCount }) => {
      return (
        <span
          key={`${name}-${stargazerCount}`}
          data-testid={`row-${name}-stargazerCount`}
        >
          🌟 {stargazerCount}
        </span>
      );
    },
  },
  {
    title: "Forks",
    dataIndex: "forkCount",
    width: "20%",
    sorter: true,
    sortDirections: ["descend", "ascend"],
    render: (_, { forkCount }) => {
      return <>🍴 {forkCount}</>;
    },
  },
];
