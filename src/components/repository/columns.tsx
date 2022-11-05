import { ColumnsType } from "antd/es/table";
import { Repository } from "../../graphql/queries/repository/repository.query";
import { StyledLink } from "./RepositoryList.styled";

export const textSorter = (a: string, b: string) => a.localeCompare(b);

export const numericSorter = (a: number, b: number) => a - b;

export const columns: ColumnsType<Repository> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => textSorter(a.name, b.name),
    sortDirections: ["descend", "ascend"],
    width: 200,
    render: (_, { name, url }) => {
      return (
        <StyledLink href={url} target="_blank" rel="noreferrer">
          {name}
        </StyledLink>
      );
    },
  },
  {
    title: "Stars",
    dataIndex: "stargazerCount",
    sorter: (a, b) => numericSorter(a.stargazerCount, b.stargazerCount),
    sortDirections: ["descend", "ascend"],
    width: 100,
    render: (_, { stargazerCount }) => {
      return <>🌟 {stargazerCount}</>;
    },
  },
  {
    title: "Forks",
    dataIndex: "forkCount",
    sorter: (a, b) => numericSorter(a.forkCount, b.forkCount),
    sortDirections: ["descend", "ascend"],
    width: 100,
    render: (_, { forkCount }) => {
      return <>🍴 {forkCount}</>;
    },
  },
];
