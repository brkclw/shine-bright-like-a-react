import { Table } from "antd";
import { useGetRepositoriesQuery } from "../../graphql-types";
import { isRepository } from "../../utils/guards";
import { columns } from "./columns";

const RepositoryList: React.FC = () => {
  const { data, loading } = useGetRepositoriesQuery({
    variables: { first: 100 },
  });
  const repositories = data?.search?.nodes?.filter(isRepository) || [];

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
