import baseApiUrl from "../../../utils/baseApiUrl";
import NoticeView from "../../../components/Notice/NoticeView";

const NoticeId = ({ noticeView, noticeVisual }) => {
  return (
    <NoticeView
      noticeView={noticeView}
      noticeVisual={noticeVisual}
    ></NoticeView>
  );
};

export async function getServerSideProps(context) {
  // Notice id API
  const { id } = context.query;
  const noticeRes = await fetch(`${baseApiUrl}/api/notices/${id}?populate=*`);
  const noticeData = await noticeRes.json();

  //Notice Visual
  const noticeVisRes = await fetch(
    `${baseApiUrl}/api/notice-visual?populate=*`
  );
  const noticeVisData = await noticeVisRes.json();

  return {
    props: {
      noticeView: noticeData,
      noticeVisual: noticeVisData,
    },
  };
}

export default NoticeId;
