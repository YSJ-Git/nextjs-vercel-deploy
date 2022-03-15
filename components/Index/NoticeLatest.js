import Link from "next/link";
import "moment/locale/ko";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const NoticeLatest = ({ noticeLatest }) => {
  //console.log("최근: ", noticeLatest);
  const latestData = noticeLatest.data;
  return (
    <div className="noticeLatest mt-14">
      <p className="font-bold text-6xl pb-6 text-center">Notice</p>
      {latestData.length != 0 ? (
        <ul className="text-center">
          {latestData.map((item) => (
            <li
              key={item.id}
              className="w-1/4 inline-block mr-8 mb-8 text-left relative shadow-lg rounded-xl"
            >
              <Link href={`/notice/view/${item.id}`}>
                <a className="p-7">
                  <p className="font-bold text-xl py-8 text-ellipsis overflow-hidden truncate">
                    {item.attributes.title}
                  </p>
                  <span className="text-gray-500">
                    {moment(item.attributes.createdAt).format("YYYY-MM-DD")}
                  </span>
                  {/* {item.attributes.content && (
                    <div>{item.attributes.content}</div>
                  )} */}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>공지사항 최근 게시물이 없습니다.</p>
      )}
    </div>
  );
};

export default NoticeLatest;
