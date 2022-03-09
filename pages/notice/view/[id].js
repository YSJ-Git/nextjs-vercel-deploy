import baseApiUrl from "../../../utils/baseApiUrl";
import NoticeView from "../../../components/Notice/NoticeView";

const NoticeId = ({ noticeView, cont }) => {
  return <NoticeView noticeView={noticeView}></NoticeView>;
};

export async function getServerSideProps(context) {
  // Notice id API
  const { id } = context.query;
  const noticeRes = await fetch(`${baseApiUrl}/api/notices/${id}?populate=*`);
  const noticeData = await noticeRes.json();

  return {
    props: {
      noticeView: noticeData,
    },
  };
}

export default NoticeId;
