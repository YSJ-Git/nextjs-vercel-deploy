import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper";

const CubeComp = ({ cubeApi }) => {
  console.log("큐브: ", cubeApi);
  const cubeData = cubeApi.data.attributes;
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
        <div className="cube bg-white">
          <div>
            <Image
              src={cubeData.bg.data.attributes.url}
              alt={cubeData.bg.data.attributes.alternativeText}
              width={cubeData.bg.data.attributes.width}
              height={cubeData.bg.data.attributes.height}
            />
          </div>
          <div className="py-8 mb-8">
            <p className="text-6xl font-bold pb-3">{cubeData.introTitle}</p>
            <p className="text-xl">{cubeData.introDesc}</p>
          </div>
          <div>
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                type: "progressbar",
                clickable: true,
              }}
              modules={[EffectFade, Navigation, Pagination]}
              className="cubeSwiper"
              autoplay={{ delay: 3000 }}
            >
              {cubeData.ceos.data.length != 0 ? (
                cubeData.ceos.data.map((ceo) => (
                  <SwiperSlide key={ceo.id}>
                    <Image
                      src={ceo.attributes.url}
                      alt={ceo.attributes.alternativeText}
                      width={ceo.attributes.width}
                      height={ceo.attributes.height}
                    />
                  </SwiperSlide>
                ))
              ) : (
                <div></div>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CubeComp;
