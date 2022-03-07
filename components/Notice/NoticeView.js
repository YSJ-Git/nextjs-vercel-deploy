import markdownToHtml from "../../lib/markdownToHtml";

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
            <div
              className="noticeContent"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>
          )}
        </div>
      ) : (
        <div>뷰페이지 컨텐츠가 없습니다.</div>
      )}
    </div>
  );
};

export default NoticeView;
