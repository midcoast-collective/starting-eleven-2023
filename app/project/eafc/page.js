/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ResponsivePlayer from "../../components/responsivePlayer";
import Wrap from "../../components/wrap";

const Gallery = styled.section`
  display: flex;
`;

const Project = styled.div`
  min-width: 0;

  a:hover {
    padding-left: 0.25rem;
  }

  p {
    margin-bottom: 0;
  }
`;

const ProjectImageContainer = styled.a`
  display: block;
  height: 12rem;
  position: relative;
  background-size: cover;
  background-position: center;
`;

const ProjectTitle = styled.h3`
  border-bottom: 1px solid var(--color-dark);
  border-top: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  margin: 1.5rem 0 0.75rem;
  padding: 0.75rem 0;
  text-transform: uppercase;

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const FeaturedProjectTitle = styled(ProjectTitle)`
  border-bottom: 0;
  border-top: 0;
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
`;

export default function ProjectPage() {
  return (
    <main>
      <Gallery>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ResponsivePlayer
              desktop="https://vimeo.com/859822940"
              mobile="https://vimeo.com/859822940"
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Gallery>

      <Wrap>
        <section>Stuff to say</section>
      </Wrap>
    </main>
  );
}
