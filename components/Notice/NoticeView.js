import ReactMarkdown from "react-markdown";
import fileDownload from "../../lib/fileDownload";
import "moment/locale/ko";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const NoticeView = ({ noticeView, noticeVisual }) => {
  const visData = noticeVisual.data.attributes.noticeVisualImg.data.attributes;
  const noticeTit = noticeView.data.attributes.title;
  const noticeCont = noticeView.data.attributes.content;
  const publishedAt = noticeView.data.attributes.publishedAt;
  const noticeUploadFile = noticeView.data.attributes.uploadFile.data;
  const date = moment(publishedAt).format("YYYY-MM-DD");
  //console.log("데이터: ", noticeView);
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
      <div className="container xl mb-0 mt-16 mx-auto p-16">
        {noticeView.data !== null ? (
          <div className="noticeView">
            <div className="noticeTit">
              <p className="text-4xl font-bold">{noticeTit}</p>
            </div>
            <div className="publishedAt">
              <p className="text-xl text-neutral-500 mt-8 mb-12">{date}</p>
            </div>

            {noticeCont && (
              <div className="noticeCont border border-slate-300 rounded-md p-16 mb-10">
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => (
                      <img
                        style={{ maxWidth: "100%" }}
                        {...props}
                        src={node.properties.src}
                      />
                    ),
                    u: ({ node, ...props }) => (
                      <span
                        style={{ textDecoration: "underline" }}
                        {...props}
                      />
                    ),
                  }}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {noticeCont}
                </ReactMarkdown>
              </div>
            )}

            {noticeUploadFile && (
              <div className="noticeFile border border-slate-300 rounded-md px-16 py-5">
                <p className="font-bold text-xl mb-2">첨부파일</p>
                <ul>
                  {noticeUploadFile.map((file) => (
                    <li className="border-b	border-color: rgb(125 211 252) border-solid">
                      <button
                        className="text-slate-500 py-2 hover:text-sky-500 pl-4"
                        key={file.id}
                        onClick={() =>
                          fileDownload(
                            file.attributes.url,
                            file.attributes.caption
                          )
                        }
                      >
                        {file.attributes.caption}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>뷰페이지 컨텐츠가 없습니다.</div>
        )}
        <div className="goList mt-20 text-center">
          <Link href="/notice">
            <a className="inline-block border border-sky-500 text-sky-500 px-12 py-4 rounded-xl hover:bg-sky-500 hover:text-white font-semibold text-xl">
              목록
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeView;
