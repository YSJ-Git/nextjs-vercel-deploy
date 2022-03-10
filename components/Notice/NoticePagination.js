const NoticePagination = (pagination) => {
  console.log("페이지: ", pagination);
  const pageData = pagination.pagination;
  const printPaginationNum = 10; //출력될 pagination 개수
  const paginationNum = [];
  if (pageData.pageCount < printPaginationNum + 1) {
    for (let i = 0; i < pageData.pageCount; i++) {
      paginationNum.push(i + 1);
    }
  } else {
    if (pageData.page === 1) {
      for (let i = 0; i < printPaginationNum; i++) {
        paginationNum.push(i + 1);
      }
    } else {
      for (let i = (pageData.page - 1) * 10 + 1; i < printPaginationNum; i++) {
        paginationNum.push(i + 1);
        if (i + 1 === pageData.pageCount) {
          break;
        }
      }
    }
  }

  return (
    <>
      <ul>
        {paginationNum.map((pageNum, index) => (
          <li key={index}>{pageNum}</li>
        ))}
      </ul>
    </>
  );
};

export default NoticePagination;
