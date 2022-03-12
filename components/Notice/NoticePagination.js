import qs from "qs";
import baseApiUrl from "../../utils/baseApiUrl";

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

  const gpPage = (pageNum) => {
    const query = qs.stringify(
      {
        sort: ["createdAt:desc", "id:desc"],
        pagination: {
          page: pageNum,
          pageSize: 10,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    fetchDataPage(query);
  };

  const fetchDataPage = async (query) => {
    const req = await fetch(`${baseApiUrl}/api/notices/?populate=*?${query}`);
    const newData = await req.json();
    return newData;

    //setNoticeData(newData);
  };

  return (
    <>
      <ul>
        {paginationNum.map((pageNum, index) => (
          <li key={index} onClick={() => gpPage(pageNum)}>
            {pageNum}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NoticePagination;
