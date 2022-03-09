import ReactMarkdown from "react-markdown";
import baseApiUrl from "../../utils/baseApiUrl";
import Image from "next/image";

const NoticeView = ({ noticeView }) => {
  const noticeTit = noticeView.data.attributes.title;
  const noticeCont = noticeView.data.attributes.content;
  const noticeUploadFile = noticeView.data.attributes.uploadFile.data;
  //console.log("데이터: ", noticeView);
  return (
    <div className="noticeView">
      {noticeView.data !== null ? (
        <div className="noticeViewData">
          <div className="noticeTit">
            <p>{noticeTit}</p>
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
                  <li key={file.id}>
                    <a href={file.attributes.url} download>
                      {file.attributes.caption}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>뷰페이지 컨텐츠가 없습니다.</div>
      )}
    </div>
  );
};

export default NoticeView;
