import { useState, useEffect } from "react";
import NoticeList from "../../components/Notice/NoticeList";
import baseApiUrl from "../../utils/baseApiUrl";
import qs from "qs";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Notice = ({ notice, noticeVisual, initialQuery }) => {
  //console.log("쿼리: ", initialQuery);
  const [page, setPage] = useState(1);
  const [noticeData, setNoticeData] = useState(notice);
  const [changedQuery, setChangedQuery] = useState(initialQuery);
  const [pageMeta, setPageMeta] = useState(noticeData.meta.pagination);
  const [paginationNum, setPaginationNum] = useState([]);
  const printPaginationNum = 10;
  //console.log("data:: ", noticeData);
  //console.log("PAGE: ", page);
  //console.log("@@@", tmpPaginationNum);

  useEffect(() => {
    makePaginationNum(pageMeta);
  }, []);

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

  useEffect(() => {
    setPageMeta(noticeData.meta.pagination);
  }, [noticeData]);

  const makePaginationNum = (pageMeta) => {
    //console.log("PAGEMETA: ", pageMeta);
    if (pageMeta.pageCount < printPaginationNum + 1) {
      for (let i = 0; i < pageMeta.pageCount; i++) {
        setPaginationNum((prevArray) => [...prevArray, i + 1]);
        //paginationNum.push(i + 1);
      }
    } else {
      if (pageMeta.page === 1) {
        for (let i = 0; i < printPaginationNum; i++) {
          setPaginationNum((prevArray) => [...prevArray, i + 1]);
          //paginationNum.push(i + 1);
        }
      } else {
        for (
          let i = (pageMeta.page - 1) * 10 + 1;
          i < printPaginationNum;
          i++
        ) {
          setPaginationNum((prevArray) => [...prevArray, i + 1]);
          //paginationNum.push(i + 1);
          if (i + 1 === pageMeta.pageCount) {
            break;
          }
        }
      }
    }
  };

  //페이징 쿼리 변경
  const nextQuery = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const prevQuery = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const changeQuery = (pageNum) => {
    setPage(pageNum);
  };

  const fetchData = async () => {
    const req = await fetch(
      `${baseApiUrl}/api/notices/?populate=*?${changedQuery}`
    );
    const newData = await req.json();

    setNoticeData(newData);
  };

  return (
    <>
      <NoticeList notice={noticeData} noticeVisual={noticeVisual}></NoticeList>
      {/* pagination */}
      {noticeData.data != 0 && (
        <div className="pagination text-center">
          {noticeData.meta.pagination.pageCount === 1 ? (
            <></>
          ) : noticeData.meta.pagination.pageCount === page ? (
            <>
              <button className="align-sub" onClick={() => prevQuery()}>
                <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
              </button>
              {paginationNum.map((pageNum, index) => (
                <li
                  key={index}
                  onClick={() => changeQuery(pageNum)}
                  className={
                    "cursor-pointer px-1 list-none inline-block text-lg font-medium text-slate-500 " +
                    (pageNum === page ? "on" : "")
                  }
                >
                  {pageNum}
                </li>
              ))}
            </>
          ) : noticeData.meta.pagination.page === 1 ? (
            <>
              {paginationNum.map((pageNum, index) => (
                <li
                  key={index}
                  onClick={() => changeQuery(pageNum)}
                  className={
                    "cursor-pointer px-1 list-none inline-block text-lg font-medium text-slate-500 " +
                    (pageNum === page ? "on" : "")
                  }
                >
                  {pageNum}
                </li>
              ))}
              <button className="align-sub" onClick={() => nextQuery()}>
                <ChevronRightIcon className="h-5 w-5 text-blue-500" />
              </button>
            </>
          ) : (
            <>
              <button className="align-sub" onClick={() => prevQuery()}>
                <ChevronLeftIcon className="h-5 w-5 text-blue-500" />
              </button>
              {paginationNum.map((pageNum, index) => (
                <li
                  key={index}
                  onClick={() => changeQuery(pageNum)}
                  className={
                    "cursor-pointer px-1 list-none inline-block text-lg font-medium text-slate-500 " +
                    (pageNum === page ? "on" : "")
                  }
                >
                  {pageNum}
                </li>
              ))}
              <button className="align-sub" onClick={() => nextQuery()}>
                <ChevronRightIcon className="h-5 w-5 text-blue-500" />
              </button>
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
