import ReactMarkdown from "react-markdown";
import fileDownload from "../../lib/fileDownload";
import "moment/locale/ko";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const NoticeView = ({ noticeView, noticeVisual }) => {
  const visData = noticeVisual.data.attributes.noticeVisualImg.data.attributes;
  const noticeTit = noticeView.data.attributes.title;
  const noticeCont = noticeView.data.attributes.content;
  const publishedAt = noticeView.data.attributes.publishedAt;
  const noticeUploadFile = noticeView.data.attributes.uploadFile.data;
  const date = moment(publishedAt).format("YYYY-MM-DD");
  //console.log("데이터: ", noticeView);
  return (
    <div className="sub justify-self-center">
      <div className="subVisual relative">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-5xl drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
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
        {noticeView.data !== null ? (
          <div className="noticeView">
            <div className="noticeTit">
              <p className="text-2xl font-bold text-center">{noticeTit}</p>
            </div>
            <div className="publishedAt">
              <p className="text-center">{date}</p>
            </div>

            {noticeCont && (
              <div className="noticeCont">
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => (
                      <img
                        style={{ maxWidth: "100%" }}
                        {...props}
                        src={node.properties.src}
                      />
                    ),
                  }}
                >
                  {noticeCont}
                </ReactMarkdown>
              </div>
            )}

            {noticeUploadFile && (
              <div className="noticeFile">
                <ul>
                  {noticeUploadFile.map((file) => (
                    <button
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
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>뷰페이지 컨텐츠가 없습니다.</div>
        )}
        <div className="goList">
          <Link href="/notice">
            <a>목록</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoticeView;
