/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import ResponsivePlayer from "../../components/responsivePlayer";
import Wrap from "../../components/wrap";
import * as Project from "../../components/project";

export default function ProjectPage() {
  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/880027959"
        mobile="https://vimeo.com/880027959"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>Breakaway - Apple TV</Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Share the personalities of players off-the pitch within Major
              Leauge Soccer.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              We work with each player specifically on what they want to do and
              how they want to tell their story. We bring them into our pre/pro
              before we fly to them. We setup a few things for them to do and
              record a voice-over with them to tell their story in a intimate
              way.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>Produced by: Starting Eleven</p>
            <p>Director(s): Casey Wertz & Devin L&apos;Amoreaux</p>
          </Project.ProjectSection>
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection style={{ paddingTop: "1.5rem" }}>
        <p>
          This project is a big undertaking for us balancing a players personal
          time and achieving high quality through the camera and story.
          Sometimes the equation doesnt favor us but thats what makes us the
          best as what we do. We know how to be in the players shoes and bring
          the best out of them.
        </p>
        <p>
          Not to often we get asked by players and agents if we can work with
          them specifically. (this can be worded better for sure)
        </p>
      </Project.QuoteSection>

      <section>
        <Project.Gallery>
          <Swiper
            spaceBetween={48}
            slidesPerView={1.1}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            modules={[Navigation, Scrollbar]}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ height: "70vh" }}
          >
            <SwiperSlide>
              <img src="/project/apple-tv-breakaway/eafc-hero.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/project/apple-tv-breakaway/eafc-hero.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </Project.Gallery>
      </section>

      <Project.QuoteSection>
        <p>
          &quot;Working with players 1 on 1 is my favorite part of documenting
          soccer. Without the players there genuinely is nothing. When we are
          working together on Breakaway there is no filter. It&apos;s just us
          and the player and we have to figure out how to tell their story in
          the best way. A lot of trust is involved in this process and I love
          that. There is a lot of pressure as well because just like us, players
          have worked hard to make a name for themselves and its our job to do
          them justice in a world that they don&apos;t really understand.&quot;
        </p>
        <p>
          - Devin L&apos;Amoreaux
          <br />
          Director
        </p>
      </Project.QuoteSection>
    </main>
  );
}