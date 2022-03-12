import baseApiUrl from "../utils/baseApiUrl";
import SingerLink from "../components/Index/SingerLink";
import AlbumLink from "../components/Index/AlbumLink";

export default function Home({ singerLink }) {
  return (
    <div>
      <main>
        <div className="container xl my-0 mx-auto py-7">
          <SingerLink singerLink={singerLink} />
          <AlbumLink />
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

  return {
    props: {
      singerLink: singerLinkData,
    },
  };
}
