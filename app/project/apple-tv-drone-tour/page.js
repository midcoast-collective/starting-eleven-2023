import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Drone Tour Apple TV - Starting Eleven",
  description:
    "Combine cinematic high resolution drone footage with dynamic FPV to tell the story of each club. Over the course of 3 years, we've expanded on the series to include a live game and local celebrity host to help tell authentic story for each club.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/apple-tv-drone-tour/gallery/1.jpg",
      "/project/apple-tv-drone-tour/gallery/2.jpg",
      "/project/apple-tv-drone-tour/gallery/3.jpg",
      "/project/apple-tv-drone-tour/gallery/4.jpg",
      "/project/apple-tv-drone-tour/gallery/5.jpg",
      "/project/apple-tv-drone-tour/gallery/6.jpg",
      "/project/apple-tv-drone-tour/gallery/7.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/880027459"
        mobile="https://vimeo.com/880027459"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>Drone Tour - Apple TV</Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Showcase soccer specific stadiums within MLS and historical
              aspects of each club.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              Combine cinematic high resolution drone footage with dynamic FPV
              to tell the story of each club. Over the course of 3 years,
              we&apos;ve expanded on the series to include a live game and local
              celebrity host to help tell authentic story for each club.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Director: Casey Wertz
              <br />
              Drone pilot/FPV: Bryson Wooden
              <br />
              Camera: Jason Cadena Maria Babcock Keith Dixon Luis Villeral
              Nelson Chavez
              <br />
              Editor: Maria Babcock
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      {/* <Project.QuoteSection>
        <p>
        </p>
      </Project.QuoteSection> */}

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </p>
        <p className="author">
          - Maria Babcock
          <br />
          Starting Eleven, Video Editor
        </p>
      </Project.QuoteSection>
    </main>
  );
}
