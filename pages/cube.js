import baseApiUrl from "../utils/baseApiUrl";
import Cube from "../components/Cube/CubeComp";

const CubePage = ({ cubeApi }) => {
  return <Cube cubeApi={cubeApi} />;
};

export async function getServerSideProps() {
  // Cube API
  const cubeRes = await fetch(`${baseApiUrl}/api/cube?populate=*`);
  const cubeData = await cubeRes.json();

  return {
    props: {
      cubeApi: cubeData,
    },
  };
}

export default CubePage;
