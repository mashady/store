import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "../../styles/swiper.css";

const coverUrl =
  "https://getbootstrap.com/docs/5.2/examples/features/unsplash-photo-1.jpg";

const sliderCoverOne =
  "https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-3.jpg";

const sliderCoverTwo =
  "https://getbootstrap.com/docs/5.0/examples/features/unsplash-photo-2.jpg";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 4000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper rounded"
      >
        <SwiperSlide
          style={{
            height: "100%",
            backgroundRepat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(${coverUrl})`,
          }}
        >
          a
        </SwiperSlide>
        <SwiperSlide
          style={{
            height: "100%",
            backgroundRepat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(${sliderCoverOne})`,
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            height: "100%",
            backgroundRepat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundImage: `url(${sliderCoverTwo})`,
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
}
