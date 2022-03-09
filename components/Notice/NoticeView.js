import ReactMarkdown from "react-markdown";
import fileDownload from "../../lib/fileDownload";

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
                  <button
                    key={file.id}
                    onClick={() =>
                      fileDownload(file.attributes.url, file.attributes.caption)
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
    </div>
  );
};

export default NoticeView;
