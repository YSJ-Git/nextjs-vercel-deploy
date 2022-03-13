import baseApiUrl from "../../../utils/baseApiUrl";
import GalleryViewComponent from "../../../components/Gallery/GalleryView";

const GalleryView = ({ galleryView }) => {
  return (
    <>
      <GalleryViewComponent galleryView={galleryView} />
    </>
  );
};

export async function getServerSideProps(context) {
  // GalleryView API
  const { id } = context.query;
  const galleryViewRes = await fetch(
    `${baseApiUrl}/api/galleries/${id}?populate=*`
  );
  const galleryViewData = await galleryViewRes.json();

  return {
    props: {
      galleryView: galleryViewData,
    },
  };
}

export default GalleryView;
