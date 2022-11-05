import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  Repository,
  useRepositoriesQuery,
} from "../../graphql/queries/repository/repository.query";
import { StyledLink } from "./RepositoryList.styled";

const columns: ColumnsType<Repository> = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
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
    sorter: (a, b) => a.stargazerCount - b.stargazerCount,
    sortDirections: ["descend", "ascend"],
    width: 100,
    render: (_, { stargazerCount }) => {
      return <>🌟 {stargazerCount}</>;
    },
  },
  {
    title: "Forks",
    dataIndex: "forkCount",
    sorter: (a, b) => a.forkCount - b.forkCount,
    sortDirections: ["descend", "ascend"],
    width: 100,
    render: (_, { forkCount }) => {
      return <>🍴 {forkCount}</>;
    },
  },
];

const RepositoryList: React.FC = () => {
  const { data, loading } = useRepositoriesQuery();
  const repositories = data ? data.search.nodes : [];

  return (
    <Table
      rowKey={"url"}
      columns={columns}
      loading={loading || !data}
      dataSource={repositories}
      pagination={{ position: ["topRight", "bottomRight"] }}
    />
  );
};

export default RepositoryList;
