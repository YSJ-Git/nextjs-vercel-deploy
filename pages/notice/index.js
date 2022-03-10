import { useState, useEffect } from "react";
import NoticeList from "../../components/Notice/NoticeList";
import baseApiUrl from "../../utils/baseApiUrl";
import qs from "qs";
import NoticePagination from "../../components/Notice/NoticePagination";

const Notice = ({ notice, noticeVisual, initialQuery }) => {
  console.log("쿼리: ", initialQuery);
  const [page, setPage] = useState(1);
  const [noticeData, setNoticeData] = useState(notice);
  const [changedQuery, setChangedQuery] = useState(initialQuery);
  console.log("data:: ", noticeData);
  console.log("PAGE: ", page);

  const nextQuery = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevQuery = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const fetchData = async () => {
    const req = await fetch(
      `${baseApiUrl}/api/notices/?populate=*?${changedQuery}`
    );
    const newData = await req.json();

    setNoticeData(newData);
  };

  useEffect(() => {
    setChangedQuery(
      qs.stringify(
        {
          sort: ["createdAt:desc", "id:desc"],
          pagination: {
            page: page,
            pageSize: 10,
          },
        },
        {
          encodeValuesOnly: true,
        }
      )
    );
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [changedQuery]);

  return (
    <>
      <NoticeList notice={noticeData} noticeVisual={noticeVisual}></NoticeList>
      {noticeData.data != 0 && (
        <div className="pagination">
          {noticeData.meta.pagination.pageCount === 1 ? (
            <></>
          ) : noticeData.meta.pagination.pageCount === page ? (
            <>
              <button onClick={() => prevQuery()}>Prev</button>
              <NoticePagination pagination={noticeData.meta.pagination} />
            </>
          ) : noticeData.meta.pagination.page === 1 ? (
            <>
              <NoticePagination pagination={noticeData.meta.pagination} />
              <button onClick={() => nextQuery()}>Next</button>
            </>
          ) : (
            <>
              <button onClick={() => prevQuery()}>Prev</button>
              <NoticePagination pagination={noticeData.meta.pagination} />
              <button onClick={() => nextQuery()}>Next</button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  //pagination
  const query = qs.stringify(
    {
      sort: ["createdAt:desc", "id:desc"],
      pagination: {
        page: 1,
        pageSize: 10,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  // Notice API
  const noticeRes = await fetch(
    `${baseApiUrl}/api/notices/?populate=*?${query}`
  );
  const noticeData = await noticeRes.json();

  //Notice Visual
  const noticeVisRes = await fetch(
    `${baseApiUrl}/api/notice-visual?populate=*`
  );
  const noticeVisData = await noticeVisRes.json();

  return {
    props: {
      notice: noticeData,
      noticeVisual: noticeVisData,
      initialQuery: query,
    },
  };
}

export default Notice;
