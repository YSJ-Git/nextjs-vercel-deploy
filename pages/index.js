import baseApiUrl from "../utils/baseApiUrl";
import SingerLink from "../components/Index/SingerLink";
import MainVisual from "../components/Index/MainVisual";

export default function Home({ singerLink, mainVisual }) {
  return (
    <div>
      <main>
        <MainVisual mainVisual={mainVisual} />
        <div className="container xl my-0 mx-auto py-7">
          <SingerLink singerLink={singerLink} />
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  // SingerLink API
  const singerLinkRes = await fetch(`${baseApiUrl}/api/singer-link?populate=*`);
  const singerLinkData = await singerLinkRes.json();

  //MainVisual
  const mainVisualRes = await fetch(
    `${baseApiUrl}/api/main-visuals?populate=*`
  );
  const mainVisualData = await mainVisualRes.json();

  return {
    props: {
      singerLink: singerLinkData,
      mainVisual: mainVisualData,
    },
  };
}
