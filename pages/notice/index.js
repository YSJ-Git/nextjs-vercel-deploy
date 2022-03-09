import NoticeList from "../../components/Notice/NoticeList";
import baseApiUrl from "../../utils/baseApiUrl";

const Notice = ({ notice, noticeVisual }) => {
  return <NoticeList notice={notice} noticeVisual={noticeVisual}></NoticeList>;
};

export async function getServerSideProps() {
  // Notice API
  const noticeRes = await fetch(`${baseApiUrl}/api/notices/?populate=*`);
  const noticeData = await noticeRes.json();

  //Notice Visual
  const noticeVisRes = await fetch(
    `${baseApiUrl}/api/notice-visual?populate=*`
  );
  const noticeVisData = await noticeVisRes.json();

  return {
    props: {
      notice: noticeData,
      noticeVisual: noticeVisData,
    },
  };
}

export default Notice;
