import baseApiUrl from "../../../utils/baseApiUrl";
import NoticeView from "../../../components/Notice/NoticeView";
import markdownToHtml from "../../../lib/markdownToHtml";

const NoticeId = ({ noticeView, cont }) => {
  return <NoticeView noticeView={noticeView} content={cont}></NoticeView>;
};

export async function getServerSideProps(context) {
  // Notice id API
  const { id } = context.query;
  const noticeRes = await fetch(`${baseApiUrl}/api/notices/${id}?populate=*`);
  const noticeData = await noticeRes.json();
  const content = await markdownToHtml(
    noticeData.data.attributes.content || ""
  );

  return {
    props: {
      noticeView: noticeData,
      cont: content,
    },
  };
}

export default NoticeId;
