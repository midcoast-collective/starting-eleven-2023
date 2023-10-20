/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import ResponsivePlayer from "../../components/responsivePlayer";
import Wrap from "../../components/wrap";

const Gallery = styled.section`
  --swiper-theme-color: var(--color-light);
  --swiper-navigation-size: 1.5rem;
  --swiper-scrollbar-bg-color: rgba(255, 255, 255, 0.3);
  --swiper-scrollbar-drag-bg-color: rgba(255, 255, 255, 0.9);

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentSection = styled.section`
  padding: 3rem 0;
`;

const QuoteSection = styled.section`
  padding: 3rem 0;
  text-align: center;

  p {
    font-size: 1.15rem;
    max-width: 50rem;
    line-height: 2rem;
    margin: 0 auto 1.5rem;
  }
`;

const ProjectSection = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/859822940"
        mobile="https://vimeo.com/859822940"
      />

      <ContentSection>
        <Wrap>
          <ProjectSection>
            <FeaturedProjectTitle>
              Title
              <br />
              <span>Subtitle</span>
            </FeaturedProjectTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ProjectSection>

          <ProjectSection>
            <FeaturedProjectTitle>
              Title
              <br />
              <span>Subtitle</span>
            </FeaturedProjectTitle>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ProjectSection>
        </Wrap>
      </ContentSection>

      <section>
        <Gallery>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            modules={[Navigation, Scrollbar]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{
              height: "70vh",
              backgroundColor: "black",
              borderBottom: "1px solid var(--color-dark)",
              // overflow: "hidden",
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

      <QuoteSection>
        <p>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </p>
        <p>- Quote Author</p>
      </QuoteSection>
    </main>
  );
}
