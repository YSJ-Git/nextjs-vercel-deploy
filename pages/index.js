import baseApiUrl from "../utils/baseApiUrl";
import SingerLink from "../components/Index/SingerLink";
import MainVisual from "../components/Index/MainVisual";
import NoticeLatest from "../components/Index/NoticeLatest";
import Popup from "../components/Popup/PopUp";
import qs from "qs";

export default function Home({ singerLink, mainVisual, noticeLatest, popup }) {
  return (
    <div>
      <main>
        <MainVisual mainVisual={mainVisual} />
        <Popup popup={popup} />
        <div className="container xl my-0 mx-auto py-7">
          <SingerLink singerLink={singerLink} />
          <NoticeLatest noticeLatest={noticeLatest} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps() {
  // SingerLink API
  const singerLinkRes = await fetch(`${baseApiUrl}/api/singer-link?populate=*`);
  const singerLinkData = await singerLinkRes.json();

  //MainVisual
  const mainVisualRes = await fetch(
    `${baseApiUrl}/api/main-visuals?populate=*`
  );
  const mainVisualData = await mainVisualRes.json();

  //Notice Latest
  const query = qs.stringify(
    {
      sort: ["createdAt:desc", "id:desc"],
      pagination: {
        start: 0,
        limit: 6,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const noticeLatestRes = await fetch(`${baseApiUrl}/api/notices?${query}`);
  const noticeLatesData = await noticeLatestRes.json();

  const popuptRes = await fetch(`${baseApiUrl}/api/popups?populate=*`);
  const popupData = await popuptRes.json();

  return {
    props: {
      singerLink: singerLinkData,
      mainVisual: mainVisualData,
      noticeLatest: noticeLatesData,
      popup: popupData,
    },
  };
}
