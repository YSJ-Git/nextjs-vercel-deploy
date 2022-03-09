import Link from "next/link";
import Image from "next/image";

const NoticeList = ({ notice, noticeVisual }) => {
  //console.log("데이터: ", notice.data.length);
  console.log("비주얼: ", noticeVisual);
  const visData = noticeVisual.data.attributes.noticeVisualImg.data.attributes;
  return (
    <div className="sub justify-self-center">
      <div className="subVisual relative">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-50 text-white text-5xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
          Notice
        </p>
        <Image
          src={visData.url}
          alt={visData.alternativeText}
          width={visData.width}
          height={visData.height}
        />
      </div>
      <div className="container my-0 mx-auto">
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
      </div>
    </div>
  );
};

export default NoticeList;
