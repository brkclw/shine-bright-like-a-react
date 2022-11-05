import { Table } from "antd";
import { useRepositoriesQuery } from "../../graphql/queries/repository/repository.query";
import { columns } from "./columns";

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
