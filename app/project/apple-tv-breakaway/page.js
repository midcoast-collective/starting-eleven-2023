import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Breakaway //  TV - Starting Eleven",
  description:
    "This project is a big undertaking for us, balancing a player's time and achieving high quality through the camera and story. Sometimes, the equation doesn't favor us, but that is what makes us the best at what we do. We know how to be in the player's shoes and bring the best out of them.",
};

export default function ProjectPage() {
  const episodes = useMemo(
    () => [
      {
        image: "/project/apple-tv-breakaway/episodes/1.png",
        link: "https://tv.apple.com/us/episode/paul-arriola/umc.cmc.3l8fphf61qe2dw5r74tnbwo85?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Paul Arriola",
        subtitle: "Episode 1",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/2.png",
        link: "https://tv.apple.com/us/episode/cade-cowell/umc.cmc.367cndfhcyqhuslehovrt58y3?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Cade Cowell",
        subtitle: "Episode 2",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/3.png",
        link: "https://tv.apple.com/us/episode/alan-pulido/umc.cmc.71zwtcfbjhisyx92yzw0slq6?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Alan Pulido",
        subtitle: "Episode 3",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/4.png",
        link: "https://tv.apple.com/us/episode/josef-martinez/umc.cmc.5po8uqi96xpsridzqenzyjp34?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Josef Martinez",
        subtitle: "Episode 4",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/5.png",
        link: "https://tv.apple.com/us/episode/mateusz-klich/umc.cmc.26p1ubihp6w7cmm2it64mx2wm?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Mateusz Klich",
        subtitle: "Episode 5",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/6.png",
        link: "https://tv.apple.com/us/episode/chicho-arango/umc.cmc.7fktx04a6aaqf4xqn6hq7o49h?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "Chicho Arango",
        subtitle: "Episode 6",
      },
      {
        image: "/project/apple-tv-breakaway/episodes/7.png",
        link: "https://tv.apple.com/us/episode/john-tolkin/umc.cmc.1gb88vore8r8mx7mapj9v01sy?showId=umc.cmc.183ozzhvpkijmzgaa6irat6x5",
        title: "John Tolkin",
        subtitle: "Episode 7",
      },
    ],
    []
  );

  const slides = useMemo(
    () => [
      "/project/apple-tv-breakaway/gallery/1.jpg",
      "/project/apple-tv-breakaway/gallery/2.jpg",
      "/project/apple-tv-breakaway/gallery/3.jpg",
      "/project/apple-tv-breakaway/gallery/4.jpg",
      "/project/apple-tv-breakaway/gallery/5.jpg",
      "/project/apple-tv-breakaway/gallery/6.jpg",
      "/project/apple-tv-breakaway/gallery/7.jpg",
      "/project/apple-tv-breakaway/gallery/8.jpg",
      "/project/apple-tv-breakaway/gallery/9.jpg",
      "/project/apple-tv-breakaway/gallery/10.jpg",
      "/project/apple-tv-breakaway/gallery/11.jpg",
      "/project/apple-tv-breakaway/gallery/12.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/882193208"
        mobile="https://vimeo.com/882207054"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Breakaway <span>{"//"}</span>  TV
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Share the personalities of players off the pitch within Major
              League Soccer.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              We work with each player specifically on what they want to do and
              how they want to tell their story. We bring them into our pre/pro
              before we fly to them. We set up a few things for them to do and
              record a voice-over with them to tell their story in an intimate
              way.
            </p>
            <p>
              Everything is catered to best tell their story from the crew size,
              what we do, and how we record their voice-over; it keeps the story
              at the forefront of this project.{" "}
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>
              Produced by: Starting Eleven
              <br />
              Director(s): Casey Wertz &amp; Devin L&apos;Amoreaux
            </p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          This project is a big undertaking for us, balancing a player&apos;s
          time and achieving high quality through the camera and story.
          Sometimes, the equation doesn&apos;t favor us, but that is what makes
          us the best at what we do. We know how to be in the player&apos;s
          shoes and bring the best out of them.
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;Working with players one-on-one is my favorite part of
          documenting soccer. Without the players, there genuinely is nothing.
          When we are working together on Breakaway, there is no filter.
          It&apos;s just us and the player, and we must figure out how to tell
          their story best. A lot of trust is involved in this process, and I
          love that. There is a lot of pressure as well because, just like us,
          players have worked hard to make a name for themselves, and it&apos;s
          our job to do them justice in a world they don&apos;t
          understand.&quot;
        </p>
        <p className="author">
          - Devin L&apos;Amoreaux
          <br />
          Director
        </p>
      </Project.QuoteSection>
    </main>
  );
}
