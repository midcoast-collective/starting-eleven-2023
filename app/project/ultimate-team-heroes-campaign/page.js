import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Ultimate Team Heroes Campaign Trickybeas - Starting Eleven",
  description:
    "The wish list from EA was to take Beasly to the Netherlands and bring him to PSV. The inspiration was taken from X-Men to slow everying down around him to prep for the PSV Champion League Match. With less then two weeks time to produce, film and edit. We built out a team comprised of specialized people to execute the vision quickly.",
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
        mobile="https://vimeo.com/879497010"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Ultimate Team Heroes Campaign - Trickybeas
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              To showcase Demarcus Beasly super-speed while integrating his
              former club PSV into his home in Fort Wayne Indian that solidifies
              Beasley&apos;s position as a Hero.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              The wish list from EA was to take Beasly to the Netherlands and
              bring him to PSV. When asked how we can integrate PSV we tried to
              bring PSV to him. The inspo was taken from x-men to slow everying
              down around him to prep for the PSV Champion League Match. With
              less then two weeks time to produce, film and edit. We built out a
              team comprised of specialized people to execute the vision
              quickly.
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
          We knew our idea was larger then the timeline and budget allowed but
          with our diversely skilled internal team, we knew what was possible on
          our end knowing all aspects of production. We found creative ways to
          bring the supper slow mo look with fast movement.
          <br />
          <br />
          We couldn&apos;t have done it without our amazing crew pre-lighting
          setups as we had to move scene to scene within 10-15 minutes. Most
          scenes with quick movements were picked up by a body double.
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
          - Maria Babcock
          <br />
          Starting Eleven, Video Editor
        </p>
      </Project.QuoteSection>
    </main>
  );
}
