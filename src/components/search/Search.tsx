import React from "react";
import { AutoComplete, Tag } from "antd";
import { StyledForm } from "./Search.styled";
import { SearchProps } from "./Search.types";

/**
 * This is really basic form of search:
 * TODO: some kind of algorithm with rank is needed for showing results
 * TODO: debounce with callback to set value of search - as for now Apollo is handling previous request canceling
 */
export const Search: React.FC<SearchProps> = ({ repositories, onSearch }) => {
  const handleOnSelect = (value: string) => {
    if (value) {
      onSearch(value);
    }
  };

  const handleOnSearch = (value: string) => {
    if (value) {
      onSearch(value);
    }
  };

  const handleOnClear = () => {
    onSearch("");
  };

  return (
    <>
      <StyledForm layout="inline">
        <Tag color="blue">topic: react</Tag>
        <AutoComplete
          data-testid={"search-component"}
          allowClear
          onClear={handleOnClear}
          options={repositories.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          style={{ width: 200 }}
          onSelect={handleOnSelect}
          onSearch={handleOnSearch}
          placeholder="Search GitHub projects"
        />
      </StyledForm>
    </>
  );
};
