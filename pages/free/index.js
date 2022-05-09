import Free from "../../components/Free/Free";
import baseApiUrl from "../../utils/baseApiUrl";
import nookies from "nookies";
import qs from "qs";

const FreeList = ({ free }) => {
  return (
    <div>
      <Free free={free} />
    </div>
  );
};

export async function getServerSideProps() {
  const query = qs.stringify(
    {
      filters: {
        writer: {
          $eq: "test@test.com",
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  // GalleryList API
  const freeRes = await fetch(`${baseApiUrl}/api/frees?${query}`);
  const freeData = await freeRes.json();

  return {
    props: {
      free: freeData,
    },
  };
}

export default FreeList;
