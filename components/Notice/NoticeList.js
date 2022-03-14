import Link from "next/link";
import Image from "next/image";
import "moment/locale/ko";
import moment from "moment";

const NoticeList = ({ notice, noticeVisual }) => {
  //console.log("데이터: ", notice);
  //console.log("비주얼: ", noticeVisual);
  const visData = noticeVisual.data.attributes.noticeVisualImg.data.attributes;
  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Notice</span>
          <span className="block text-lg font-semibold">
            큐브엔터테인먼트의 소식을 전해드립니다.
          </span>
        </p>
        {/* <Image
          src={visData.url}
          alt={visData.alternativeText}
          width={visData.width}
          height={visData.height}
        /> */}
      </div>
      <div className="container xl my-0 mx-auto p-7">
        <div className="notice bg-white">
          <ul className="">
            {notice.data.length !== 0 ? (
              notice.data.map((dataList, key) => (
                <li
                  key={dataList.id}
                  className="hover:bg-blue-100 mb-5 rounded-lg border-gray-300 border border-solid"
                >
                  {
                    <Link href={`/notice/view/${dataList.id}`}>
                      <a className="block p-7">
                        <div className="num text-xl inline-block pr-5 text-slate-400">
                          {key + 1}
                        </div>
                        <div className="inline-block w-16 h-8 text-white bg-sky-500 text-center leading-8 rounded-lg mr-5 align-middle">
                          공지
                        </div>
                        <div className="w-5/6 tit text-xl font-bold inline-block text-ellipsis overflow-hidden truncate align-middle">
                          {dataList.attributes.title}
                        </div>
                        <div className="created text-slate-400 inline-block float-right mt-1">
                          {moment(dataList.attributes.publishedAt).format(
                            "YYYY-MM-DD"
                          )}
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
