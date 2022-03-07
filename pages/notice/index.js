import NoticeList from "../../components/Notice/NoticeList";
import baseApiUrl from "../../utils/baseApiUrl";

const Notice = ({ notice }) => {
  return <NoticeList notice={notice}></NoticeList>;
};

export async function getServerSideProps() {
  // Notice API
  const noticeRes = await fetch(`${baseApiUrl}/api/notices/?populate=*`);
  const noticeData = await noticeRes.json();

  return {
    props: {
      notice: noticeData,
    },
  };
}

export default Notice;
