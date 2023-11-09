import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Ultimate Team Heroes Campaign // Trickybeas x EAFC - Starting Eleven",
  description:
    "The wish list from EA was to take Beasly to the Netherlands and bring him to PSV. When asked how we could integrate PSV, we tried to bring PSV to him. The inspo was taken from X-Men to slow everything down around him to prep for the PSV Champion League Match, with less than two weeks to produce, film, and edit. We built a team of specialized people to execute the vision quickly while keeping quality high.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/ultimate-team-heroes-campaign/gallery/1.jpg",
      "/project/ultimate-team-heroes-campaign/gallery/2.jpg",
      "/project/ultimate-team-heroes-campaign/gallery/3.jpg",
      "/project/ultimate-team-heroes-campaign/gallery/4.jpg",
      "/project/ultimate-team-heroes-campaign/gallery/5.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/879497010"
        mobile="https://vimeo.com/881774473"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Ultimate Team Heroes Campaign <span>{"//"}</span> Trickybeas x EAFC
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              To showcase Demarcus Beasly&apos;s super-speed while integrating
              his former club, PSV, into his home in Fort Wayne, Indiana,
              solidifies Beasley&apos;s position as a Hero.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              The wish list from EA was to take Beasly to the Netherlands and
              bring him to PSV. When asked how we could integrate PSV, we tried
              to bring PSV to him. The inspo was taken from X-Men to slow
              everything down around him to prep for the PSV Champion League
              Match, with less than two weeks to produce, film, and edit. We
              built a team of specialized people to execute the vision quickly
              while keeping quality high.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Director(s): Casey Wertz & Devin L&apos;Amoreaux
              <br />
              DP: Chris Durr
              <br />
              AC: Roger Branit
              <br />
              AP & 1st AD: Victoria Britton
              <br />
              Editor: Maria Babcock
              <br />
              VFX: Andy Torres
              <br />
              Color: Taylre Jones
              <br />
              Score & final mix: Zane Callister
              <br />
              Sound Design: Christian Stropko
              <br />
              Art: Daisy Hickey
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          We knew our idea was more significant than the timeline and budget
          allowed, but with our diversely skilled internal team, we knew what
          was possible on our end, knowing all aspects of production. We found
          creative ways to bring the supper slow-mo look with fast movement.
        </p>
        <p>
          We couldn&apos;t have done it without our fantastic crew pre-lighting
          setups, as we had to move from scene to scene within 10-15 minutes.
          Most scenes with quick movements were picked up by a body double.
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;Working on the EAFC project was an exciting experience. I
          started with the base edit while collaborating with people
          specializing in sound, visual effects, and color. With the quick
          turnaround, our collective contributions resulted in an impressive end
          product where we integrated our best work to bring the project to
          life.&quot;
        </p>
        <p className="author">
          - Maria Babcock
          <br />
          Starting Eleven, Video Editor
        </p>
      </Project.QuoteSection>

      <Project.QuoteSection>
        <p>
          &quot;Coming from a background that has touched every aspect of
          production. I knew that we could pitch and execute an idea unsuitable
          for the due dates given to us. There are a few jobs that come through
          that I can tap into all those parts of my brain and help bring
          something to fruition. I wouldn&apos;t say I love to do these, but
          they are an adrenaline rush I enjoy occasionally.&quot;
        </p>
        <p className="author">
          - Casey Wertz
          <br />
          Starting Eleven, Partner
        </p>
      </Project.QuoteSection>
    </main>
  );
}
