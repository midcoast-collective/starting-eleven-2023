import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Leagues Cup // Major League Soccer - Starting Eleven",
  description:
    "Going beyond the ask of game capture, we wanted to create an iconic moment that lived forever as something written as history. Devin L'Amoreaux pitched the idea of a trophy room moment with the legendary Inter Miami team. Something we pride ourselves in is going the extra mile to achieve greatness.",
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
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/878895972"
        mobile="https://vimeo.com/882555181"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Leagues Cup <span>{"//"}</span> Major League Soccer
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Create multiple Ads for all 77 games for the World Cup-style
              tournament between two leagues, Liga MX and MLS, in three
              languages.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              We covered over 20+ games to create high-quality capture in the
              later rounds to turn ticket-sell ads around in 48 hours. We built
              an expanded team of soccer enthusiasts to tackle three languages:
              Spanish, French, and English. We made custom videos for every
              match that included a custom animation graphics package,
              voice-over scripts, In-stadium game presentation videos, and ads
              for all media outlets.
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
              Editors: Chris Burrow, Jason Cadena, Luis Villarreal, Stoney Yoos,
              Maria Babcock
              <br />
              Lead Photographer: Devin L&apos;Amoreaux
              <br />
              Video Coverage team: Jason Cadena, Luis Villarreal, Nelson Chavez,
              Nick Brown, Hanin Atighi, Lauren Terry, Jordan Borel, Julian
              Bright, Rodolfo Chona, Keith Dixon
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          Going beyond the ask of game capture, we wanted to create an iconic
          moment that lived forever as something written as history. Devin
          L&apos;Amoreaux pitched the idea of a trophy room moment with the
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
          &quot;Coordinating the creation of over 400 assets has been
          exhilarating. Working with a creative team allowed us to push the
          boundaries of how to showcase this special event. The assets we
          created bled into our capturing of some of the Leagues Cup matches. At
          times, those same people who worked on our assets could watch their
          work in real-time on the big stage!&quot;
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
