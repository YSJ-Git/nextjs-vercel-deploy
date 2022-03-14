import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const MainVisual = ({ mainVisual }) => {
  //console.log("메인비주얼: ", mainVisual);
  const mainVisualData = mainVisual.data;
  //console.log("메인비주얼2: ", mainVisualData);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          marginBottom: "10px",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        autoplay={{ delay: 3000 }}
      >
        {mainVisual &&
          mainVisualData.map((list) => (
            <SwiperSlide key={list.id}>
              <Image
                src={list.attributes.MainVisualImg.data[0].attributes.url}
                alt={
                  list.attributes.MainVisualImg.data[0].attributes
                    .alternativeText
                }
                width={list.attributes.MainVisualImg.data[0].attributes.width}
                height={list.attributes.MainVisualImg.data[0].attributes.height}
              />
              <p className="txt absolute left-24 bottom-24 text-white font-bold text-base transition-all duration-[1500ms] opacity-0 lg:text-4xl xl:text-5xl 2xl:text-7xl">
                {list.attributes.MainVisualTxt}
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{
          marginBottom: "50px",
        }}
      >
        {mainVisual &&
          mainVisualData.map((list) => (
            <SwiperSlide key={list.id}>
              <Image
                src={list.attributes.MainVisualImg.data[0].attributes.url}
                alt={
                  list.attributes.MainVisualImg.data[0].attributes
                    .alternativeText
                }
                width={list.attributes.MainVisualImg.data[0].attributes.width}
                height={list.attributes.MainVisualImg.data[0].attributes.height}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default MainVisual;
