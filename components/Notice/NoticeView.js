import ReactMarkdown from "react-markdown";
import baseApiUrl from "../../utils/baseApiUrl";

const NoticeView = ({ noticeView, content }) => {
  console.log("데이터: ", noticeView);
  return (
    <div className="noticeView">
      {noticeView.data !== null ? (
        <div className="noticeViewData">
          <div className="noticeTit">
            <p>{noticeView.data.attributes.title}</p>
          </div>
          {noticeView.data.attributes.content && (
            <ReactMarkdown
              components={{
                img: ({ node, ...props }) => (
                  <img
                    style={{ maxWidth: "100%" }}
                    {...props}
                    src={baseApiUrl + node.properties.src}
                  />
                ),
              }}
            >
              {noticeView.data.attributes.content}
            </ReactMarkdown>
          )}
        </div>
      ) : (
        <div>뷰페이지 컨텐츠가 없습니다.</div>
      )}
    </div>
  );
};

export default NoticeView;
