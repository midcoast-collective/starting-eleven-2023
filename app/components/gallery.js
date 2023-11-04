/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export const Gallery = styled.section`
  --swiper-theme-color: var(--color-white);
  --swiper-navigation-size: var(--font-size-heading-large);
  // --swiper-navigation-color: var(--color-green);
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);
  --swiper-scrollbar-drag-bg-color: var(--color-green);
  --swiper-scrollbar-bottom: -1rem;

  .swiper {
    overflow: visible;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default function EpisodesComponent({ data }) {
  return (
    <Gallery>
      <Swiper
        spaceBetween={48}
        slidesPerView={1.1}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        modules={[Navigation, Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{ height: "70vh" }}
      >
        {data.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Gallery>
  );
}
