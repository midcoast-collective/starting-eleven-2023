import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Messi Mania //  TV - Starting Eleven",
  description:
    "Initially, a doc that was supposed to comprise of a few games dwindled to one as it was enough to tell the story. We captured Argentina fans bowing down to a mural of Messi, fans fighting their way into the training center to see Messi, and Messi winning his first game on a free kick in the closing minute. The script was written for us.",
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
      "/project/messi-mania/gallery/12.jpg",
      "/project/messi-mania/gallery/13.jpg",
      "/project/messi-mania/gallery/14.jpg",
      "/project/messi-mania/gallery/15.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/878780966"
        mobile="https://vimeo.com/881835976"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Messi Mania <span>{"//"}</span>  TV
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Explore the global hype surrounding the move of Lionel Messi to
              Major League Soccer, the ripple effect it has sent through the
              world of soccer, and the media craze that ensued, and contrast it
              all with the simplicity of the player stepping onto the pitch and
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
              understood that his playing is enough for futbol fans to drool
              over. So we took aspects from the beautiful doc of Zidane and
              integrated the mass media around him to build up the iconic goal
              he made on his debut.
              <br />
              <br />
              The timing could have been better. The green light came two days
              before his unveiling, and we had to navigate the media craze.
              While only approved for a limited amount of credentials, we
              decided to have one camera roaming and one with the largest zoom
              possible to capture all the emotion and play.
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
              MLS Producers: Kyle Green, Galina Plutova
              <br />
              Special Thanks: Inter Miami CF, Molly Dreska, Rafa Cabrera
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          Initially, a doc that was supposed to comprise of a few games dwindled
          to one as it was enough to tell the story. We captured Argentina fans
          bowing down to a mural of Messi, fans fighting their way into the
          training center to see Messi, and Messi winning his first game on a
          free kick in the closing minute. The script was written for us.
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;The team at Starting Eleven did a great job with storytelling.
          They laid out the emotion nicely and weren&apos;t afraid to show a
          full range of emotion, which set me up to score the film. I wanted to
          press into the nervous energy the fans felt with the weather and all
          the unknowns circulating in Miami. Seeing the footage of the stadium
          erupting once Messi&apos;s name was called helped me find a theme of
          triumph I could use to send the view directly into the stadium with
          the thousands of other fans. Messi mania was a blast to work on and an
          opportunity I&apos;ll be forever grateful for!&quot;
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
