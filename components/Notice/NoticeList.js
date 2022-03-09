import Link from "next/link";

const NoticeList = ({ notice }) => {
  //console.log("데이터: ", notice.data.length);
  return (
    <div className="notice bg-white rounded-lg shadow">
      <ul className="divide-y divide-gray-100">
        {notice.data.length !== 0 ? (
          notice.data.map((dataList, key) => (
            <li key={dataList.id} className="p-3 hover:bg-blue-100">
              {
                <Link href={`/notice/view/${dataList.id}`}>
                  <a>
                    <div className="num">{key + 1}</div>
                    <div className="tit">{dataList.attributes.title}</div>
                    <div className="created">
                      {dataList.attributes.publishedAt}
                    </div>
                  </a>
                </Link>
              }
            </li>
          ))
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </ul>
    </div>
  );
};

export default NoticeList;
