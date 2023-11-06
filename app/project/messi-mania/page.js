import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Messi Mania - Starting Eleven",
  description:
    "Originally a doc that was suppose to be comprised of a few games dwindled to one as it was enough to tell the story in our opinion. We captured argentina fans bowing down to a mural of messi, fans fighting their way into the training center to see messi, to messi winning his first game on a free kick in the closing minute. The script was written for us.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/messi-mania/gallery/1.jpg",
      "/project/messi-mania/gallery/2.jpg",
      "/project/messi-mania/gallery/3.jpg",
      "/project/messi-mania/gallery/4.jpg",
      "/project/messi-mania/gallery/5.jpg",
      "/project/messi-mania/gallery/6.jpg",
      "/project/messi-mania/gallery/7.jpg",
      "/project/messi-mania/gallery/8.jpg",
      "/project/messi-mania/gallery/9.jpg",
      "/project/messi-mania/gallery/10.jpg",
      "/project/messi-mania/gallery/11.jpg",
      "/project/messi-mania/gallery/14.jpg",
      "/project/messi-mania/gallery/15.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/878780966"
        mobile="https://vimeo.com/878780966"
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
              Explore the global hype surrounding the move by Lionel Messi to
              Major League Soccer, the ripple effect it has sent through the
              world of soccer, the media craze that ensued, and contrast it all
              with the simplicity of the player stepping on to the pitch and
              playing the beautiful game.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              &quot;Zidane: A 21st Century Portrait&quot;
              <br />
              <br />
              When we see Messi, his name is enough to feel something. We
              understood that him playing is enough for futbol fans to drool
              over. So we took aspects from the beautiful doc of Zidane and
              integrated the mass media around him to build up the iconic goal
              he made on his debut.
              <br />
              <br />
              The timing was difficult. The greenlight came 2 days before his
              unveil and had to navigate the media craze. While only approved
              for a limited amount of credentials we decided to have one camera
              roaming and one with the largest zoom possible to capture all the
              emotion and play.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Directors: Casey Wertz & Devin L&apos;Amoreaux
              <br />
              Dp: Keith Dixon
              <br />
              Gimbal Op: Joe Sanchez
              <br />
              Ac: Jason Cadena
              <br />
              Music + sound mix: Zane Callister
              <br />
              Sound design: Christian O&apos;Keefe
              <br />
              Color: Ian Matthews
              <br />
              Edit: Christian O&apos;Keefe
              <br />
              <br />
              MLS Producers:
              <br />
              Kyle Green
              <br />
              Galina Plutova
              <br />
              <br />
              Special Thanks:
              <br />
              Inter Miami CF
              <br />
              Molly Dreska
              <br />
              Rafa Cabrera
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          Originally a doc that was suppose to be comprised of a few games
          dwindled to one as it was enough to tell the story in our opinion. We
          captured argentina fans bowing down to a mural of messi, fans fighting
          their way into the training center to see messi, to messi winning his
          first game on a free kick in the closing minute. The script was
          written for us.
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
          - Zane Callister
          <br />
          Score and Mix
        </p>
      </Project.QuoteSection>
    </main>
  );
}