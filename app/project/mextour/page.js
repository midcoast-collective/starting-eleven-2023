import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Mextour // Mexican National Team - Starting Eleven",
  description:
    "We all know games are best recapped immediately after. So we built a system that gets a creative edit within hours of the game to relive the game the very next morning using frame to cloud and a highly talented internal coverage team.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/mextour/gallery/1.jpg",
      "/project/mextour/gallery/2.jpg",
      "/project/mextour/gallery/3.jpg",
      "/project/mextour/gallery/4.jpg",
      "/project/mextour/gallery/5.jpg",
      "/project/mextour/gallery/6.jpg",
      "/project/mextour/gallery/7.jpg",
      "/project/mextour/gallery/8.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/879446806"
        mobile="https://vimeo.com/879446806"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Mextour // Mexican National Team
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Player content capture, same-day edits, custom graphics, original
              content, and story-driven content.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              For media day specifically, the concept came with the idea that
              many players can change for each FIFA window, and we knew we
              wanted a way to integrate missing players but push the creative as
              far as possible. We did a floor and video wall to show each
              player&apos;s identity.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Director(s): Casey Wertz & Devin L&apos;Amoreaux
              <br />
              Production Desinger: Casey Wertz
              <br />
              1st AD: Luis Villareal
              <br />
              AC: Jason Cadena
              <br />
              Animation: Maria Babcock, Nico, Ben Makovsky
              <br />
              Photography: Devin L&apos;Amoreaux
            </p>
          </Project.ProjectSection>
        </Wrap>

        {episodes.length > 0 ? <Episodes data={episodes} /> : null}

        <ResponsivePlayer
          desktop="https://vimeo.com/880027068"
          mobile="https://vimeo.com/880027068"
        />
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          We all know games are best recapped immediately after. So we built a
          system that gets a creative edit within hours of the game to relive
          the game the very next morning using frame-to-cloud and a highly
          talented internal coverage team.
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;Mextour Media Day 2023 has been an incredibly fulfilling project
          for me. Directing emerging talents like Santiago Gimenez and
          established legends like Guillermo Ochoa is always a privilege, and
          this time was no exception. The entire team came together to create a
          remarkable experience for our client and their players, and it&apos;s
          moments like these that make our work truly rewarding.&quot;
        </p>
        <p className="author">
          - Luis Villareal
          <br />
          Starting Eleven, Video Editor
        </p>
      </Project.QuoteSection>
    </main>
  );
}
