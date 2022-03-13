import baseApiUrl from "../../utils/baseApiUrl";
import GalleryList from "../../components/Gallery/GalleryList";

const Gallery = ({ gallery }) => {
  return (
    <>
      <GalleryList gallery={gallery} />
    </>
  );
};

export async function getServerSideProps() {
  // GalleryList API
  const galleryRes = await fetch(`${baseApiUrl}/api/galleries?populate=*`);
  const galleryData = await galleryRes.json();

  return {
    props: {
      gallery: galleryData,
    },
  };
}

export default Gallery;
