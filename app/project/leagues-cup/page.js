import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Leagues Cup - Starting Eleven",
  description:
    "Going beyond the ask of game capture, we wanted to create a iconic moment that lived forever as something written as history. Devin L'Amoreaux, pitched the idea of a trophy room moment with the legendary Inter Miami team. Something we pride ourselves in is going the extra mile to achieve greatness.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/leagues-cup/gallery/1.jpg",
      "/project/leagues-cup/gallery/2.jpg",
      "/project/leagues-cup/gallery/3.jpg",
      "/project/leagues-cup/gallery/4.jpg",
      "/project/leagues-cup/gallery/5.jpg",
      "/project/leagues-cup/gallery/6.jpg",
      "/project/leagues-cup/gallery/7.jpg",
      "/project/leagues-cup/gallery/8.jpg",
      "/project/leagues-cup/gallery/9.jpg",
      "/project/leagues-cup/gallery/10.jpg",
      "/project/leagues-cup/gallery/11.jpg",
      "/project/leagues-cup/gallery/12.jpg",
      "/project/leagues-cup/gallery/13.jpg",
      "/project/leagues-cup/gallery/14.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/878895972"
        mobile="https://vimeo.com/878895972"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Leagues Cup - Major League Soccer
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Create Mutiple Ad&apos;s for all 77 games for the world cup style
              tournament between two leagues; liga mx and mls, in three
              languages.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              We covered over 20+ games to create high quality capture in the
              later rounds to turn ticket sell ads around in 48 hours. We built
              a expanded team of soccer enthusiast to tackle three different
              languages; spanish, french, and english. We made custom videos for
              every single match that included; a custom animation graphics
              package, voice-over scripts, In-stadium game presenaton videos,
              and ads for all media outlets.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Director of Operations: Brandon Bland
              <br />
              Director: Casey Wertz
              <br />
              Animation: Ben Makovsky and Maria Babcock
              <br />
              Editors: Chris Burrow, Jason Cadena, Luis Villarreal, Stoney Yoos
              <br />
              Lead Photographer: Devin L&apos;Amoreaux
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          Going beyond the ask of game capture, we wanted to create a iconic
          moment that lived forever as something written as history. Devin
          L&apos;Amoreaux, pitched the idea of a trophy room moment with the
          legendary Inter Miami team. Something we pride ourselves in is going
          the extra mile to achieve greatness.
        </p>
      </Project.QuoteSection>

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
          - Brandon Bland
          <br />
          Starting Eleven, Director of Operations
        </p>
      </Project.QuoteSection>
    </main>
  );
}
