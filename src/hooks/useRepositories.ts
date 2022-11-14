import { QueryBuilder } from "./../utils/query-builder";
import { Repository } from "./../graphql-types";
import { SorterResult } from "antd/lib/table/interface";
import { normalizeRepositories } from "../utils/normalizers";
import { getCursorHashFromElementIndex } from "../utils/pagination";
import { useMemo, useState } from "react";
import { useGetRepositoriesQuery } from "../graphql-types";

export const useRepositories = () => {
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState<SorterResult<Repository>>();

  const { data, loading } = useGetRepositoriesQuery({
    variables: {
      query: new QueryBuilder()
        .withSearch(topic)
        .withLimiter("stars", ">", 1000)
        .withSort(sort)
        .build(),
      first: pageSize,
      after: getCursorHashFromElementIndex((page - 1) * pageSize),
    },
  });

  const repositories = useMemo(() => normalizeRepositories(data), [data]);
  const repositoryCount = data?.search.repositoryCount;

  return {
    repositories,
    repositoryCount,
    loading,
    page,
    pageSize,
    setPage,
    setPageSize,
    setTopic,
    setSort,
  };
};
