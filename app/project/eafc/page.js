/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import ResponsivePlayer from "../../components/responsivePlayer";
import Wrap from "../../components/wrap";

const Gallery = styled.section`
  --swiper-theme-color: var(--color-light);
  --swiper-navigation-size: 2rem;

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GalleryNav = styled.div`
  background-color: black;

  .swiper-slide {
    cursor: pointer;
    opacity: 0.4;
  }

  .swiper-slide-thumb-active {
    opacity: 1;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Project = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
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
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/859822940"
        mobile="https://vimeo.com/859822940"
      />

      <section>
        <Gallery>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            modules={[FreeMode, Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            style={{
              height: "70vh",
              backgroundColor: "black",
              borderBottom: "1px solid var(--color-dark)",
              overflow: "hidden",
            }}
          >
            <SwiperSlide>
              <img src="/project/eafc/eafc-hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </Gallery>
      </section>

      <section>
        <GalleryNav>
          <Swiper
            spaceBetween={0}
            slidesPerView={4}
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setThumbsSwiper}
            freeMode
            watchSlidesProgress
            style={{ height: "20vh", width: "100vw" }}
          >
            <SwiperSlide>
              <img src="/project/eafc/eafc-hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-3.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/eafc/eafc-3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </GalleryNav>
      </section>

      <section>
        <Wrap>
          <Project>
            <FeaturedProjectTitle>
              EAFC FUT Hero
              <br />
              <span>Demarcus Beasley</span>
            </FeaturedProjectTitle>
            <p>
              Produced by: Starting Eleven
              <br /> Directors: Casey Wertz and Devin L&apos;Amoreaux
              <br /> Art: daisyparoczyhickey
              <br /> VFX: andytorres_a
              <br /> Editor: mariababcock
              <br /> Associate Producer and 1st AD: victoriasbritton
              <br /> DP: chrisdurr__
              <br /> AC: rbranit
              <br /> Score and final mix: zane_callister
              <br /> Colorist: taylrejonesgrade
              <br /> Sound Design: @cstropko
              <br /> BTS: Jason Cadena
            </p>
          </Project>
        </Wrap>
      </section>
    </main>
  );
}
