const CubeComp = ({ cubeApi }) => {
  console.log("큐브: ", cubeApi);
  return (
    <div className="sub justify-self-center w-full">
      <div className="subVisual relative h-60 bg-sky-500">
        <p className="subVisText absolute left-2/4 top-2/4 -translate-y-1/2 -translate-x-1/2 z-10 text-white text-center">
          <span className="text-5xl font-bold block pb-4">Cube</span>
          <span className="block text-lg font-semibold">
            큐브엔터테인먼트를 소개합니다.
          </span>
        </p>
      </div>
      <div className="container xl my-0 mx-auto p-7">
        <div className="cube bg-white"></div>
      </div>
    </div>
  );
};

export default CubeComp;
