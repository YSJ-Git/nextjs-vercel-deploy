import ReactMarkdown from "react-markdown";
import fileDownload from "../../lib/fileDownload";
import "moment/locale/ko";
import moment from "moment";
import Link from "next/link";

const NoticeView = ({ noticeView }) => {
  const noticeTit = noticeView.data.attributes.title;
  const noticeCont = noticeView.data.attributes.content;
  const publishedAt = noticeView.data.attributes.publishedAt;
  const noticeUploadFile = noticeView.data.attributes.uploadFile.data;
  const date = moment(publishedAt).format("YYYY-MM-DD");
  //console.log("데이터: ", noticeView);
  return (
    <div className="noticeView">
      <div className="container">
        {noticeView.data !== null ? (
          <div className="noticeViewData">
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
