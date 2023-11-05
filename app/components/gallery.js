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
    max-height: 42rem;

    @media (max-width: 800px) {
      max-height: 12rem;
    }
  }
`;

export default function GalleryComponent({ data }) {
  return (
    <Gallery>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.1}
        navigation
        modules={[Navigation, Scrollbar]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        height="12rem"
        breakpoints={{
          // max-width
          800: {
            slidesPerView: 1.1,
            spaceBetween: 48,
            height: "42rem",
          },
        }}
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
