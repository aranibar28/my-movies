import React from "react";
import Pagination from "rc-pagination";
import "./Pagination.scss";

export function PaginationMovie(props) {
  const { currentPage, totalItems, onChangePage } = props;

  return (
    <Pagination
      className="pagination"
      current={currentPage}
      total={totalItems}
      onChange={onChangePage}
      pageSize={20}
    />
  );
}
