import { Table, Pagination } from "antd";
import { useRepositories } from "../../hooks";
import { Search } from "../search";
import { columns } from "./columns";

const RepositoryList: React.FC = () => {
  const {
    loading,
    repositories,
    repositoryCount,
    page,
    pageSize,
    setPage,
    setPageSize,
    setTopic,
    setSort,
  } = useRepositories();

  return (
    <>
      <Search repositories={repositories || []} onSearch={setTopic} />
      <Table
        rowKey={"id"}
        columns={columns}
        loading={loading}
        dataSource={repositories}
        pagination={false}
        onChange={(_, __, sort) => {
          if (Array.isArray(sort)) {
            return;
          }
          setSort(sort);
        }}
      />
      <Pagination
        total={repositoryCount}
        current={page}
        pageSize={pageSize}
        onChange={(page) => setPage(page)}
        onShowSizeChange={(_, size) => setPageSize(size)}
        showSizeChanger
        showQuickJumper
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
      />
    </>
  );
};

export default RepositoryList;
