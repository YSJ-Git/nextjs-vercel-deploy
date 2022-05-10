import React, { useEffect, useRef } from "react";
import baseApiUrl from "../utils/baseApiUrl";
import SingerLink from "../components/Index/SingerLink";
import MainVisual from "../components/Index/MainVisual";
import NoticeLatest from "../components/Index/NoticeLatest";
import Popup from "../components/Popup/PopUp";
import qs from "qs";

export default function Home({ singerLink, mainVisual, noticeLatest, popup }) {
  let deferredPrompt = useRef(null);

  const installApp = () => {
    if (!deferredPrompt.current) return false;

    //홈화면의 추가를 실행시킨다
    deferredPrompt.current.prompt();

    //실행 후 유저가 설치를 했는지 안했는지를 알 수 있다
    deferredPrompt.current.userChoice.then((choiceResult) => {
      //설치 했을 때
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
        // dispatch({
        //   type: "HIDE_BUTTON",
        // });
      } else {
        //설치 하지 않았을 때
        console.log("User dismissed the A2HS prompt");
      }
    });
  };

  useEffect(() => {
    console.log("Listening for Install prompt");
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });

    //설치가 되어있다면 버튼은 숨긴다
    if (!deferredPrompt.current) {
      console.log("설치됨");
      // return dispatch({
      //   type: "HIDE_BUTTON",
      // });
    } else {
      //버튼을 보여줌
      // dispatch({
      //   type: "SHOW_BUTTON",
      // });
      console.log("설치안됨");
    }
  }, []);

  return (
    <div>
      <main>
        <MainVisual mainVisual={mainVisual} />
        <Popup popup={popup} />
        <div className="container xl my-0 mx-auto py-7">
          <SingerLink singerLink={singerLink} />
          <NoticeLatest noticeLatest={noticeLatest} />
        </div>
        <button onClick={installApp}>다운로드</button>
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
