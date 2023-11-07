import { useMemo } from "react";

import ResponsivePlayer from "@/app/components/responsivePlayer";
import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "Drone Tour //  TV - Starting Eleven",
  description:
    "Combine cinematic high-resolution drone footage with dynamic FPV to tell the story of each club. For three years, we've expanded the series to include a live game and a local celebrity host to help tell authentic stories for each club.",
};

export default function ProjectPage() {
  const episodes = useMemo(
    () => [
      {
        image: "/project/apple-tv-drone-tour/episodes/1.png",
        link: "https://tv.apple.com/us/episode/mercedes-benz-stadium/umc.cmc.6qcyz95r8xlwiq6qs6gx7midp?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Mercedes-Benz Stadium",
        subtitle: "Episode 1",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/2.png",
        link: "https://tv.apple.com/us/episode/providence-park/umc.cmc.3amxxwe1076spuz3k7di6w4gm?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Providence Park",
        subtitle: "Episode 2",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/3.png",
        link: "https://tv.apple.com/us/episode/childrens-mercy-park/umc.cmc.2b4dgs1263sahf9hiqbiqir8p?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Children's Mercy Park",
        subtitle: "Episode 3",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/4.png",
        link: "https://tv.apple.com/us/episode/bmo-stadium/umc.cmc.7bqus61v2h10wdeavp32frwck?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "BMO Stadium",
        subtitle: "Episode 4",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/5.png",
        link: "https://tv.apple.com/us/episode/q2-stadium/umc.cmc.6wmn2u341jdx0kbzh53v8hr44?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Q2 Stadium",
        subtitle: "Episode 5",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/6.png",
        link: "https://tv.apple.com/us/episode/lowercom-field/umc.cmc.60k3pyhgfyktocxtl2d5na64d?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Lower.com Field",
        subtitle: "Episode 6",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/7.png",
        link: "https://tv.apple.com/us/episode/tql-stadium/umc.cmc.74wr139nlncrtlnrllwed2glk?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "TQL Stadium",
        subtitle: "Episode 7",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/8.png",
        link: "https://tv.apple.com/us/episode/geodis-park/umc.cmc.3urfnznwww2hh6041pmqwuwha?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "GEODIS Park",
        subtitle: "Episode 8",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/9.png",
        link: "https://tv.apple.com/us/episode/allianz-field/umc.cmc.285hcapdz76tbzaa3fjn9on9?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Allianz Field",
        subtitle: "Episode 9",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/10.png",
        link: "https://tv.apple.com/us/episode/citypark/umc.cmc.4f2fjr2ukaohfqc4cgs8rn6x1?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "CITYPARK",
        subtitle: "Episode 10",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/11.png",
        link: "https://tv.apple.com/us/episode/exploria-stadium/umc.cmc.7ed7bmc8r68xg3fk4np0y6reb?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Exploria Stadium",
        subtitle: "Episode 11",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/12.png",
        link: "https://tv.apple.com/us/episode/shell-energy-stadium/umc.cmc.53ofv8kt3uyw9dlv87h5um9ps?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Shell Energy Stadium",
        subtitle: "Episode 12",
      },
      {
        image: "/project/apple-tv-drone-tour/episodes/13.png",
        link: "https://tv.apple.com/us/episode/audi-field/umc.cmc.erttmwb9a9vdpbzgsubsfn0x?showId=umc.cmc.3ljun457gwwjo9unbgc12o38f",
        title: "Audi Field",
        subtitle: "Episode 13",
      },
    ],
    []
  );

  const slides = useMemo(
    () => [
      "/project/apple-tv-drone-tour/gallery/1.jpg",
      "/project/apple-tv-drone-tour/gallery/2.jpg",
      "/project/apple-tv-drone-tour/gallery/3.jpg",
      "/project/apple-tv-drone-tour/gallery/4.jpg",
      "/project/apple-tv-drone-tour/gallery/5.jpg",
      "/project/apple-tv-drone-tour/gallery/6.jpg",
      "/project/apple-tv-drone-tour/gallery/7.jpg",
      "/project/apple-tv-drone-tour/gallery/8.jpg",
      "/project/apple-tv-drone-tour/gallery/9.jpg",
      "/project/apple-tv-drone-tour/gallery/10.jpg",
      "/project/apple-tv-drone-tour/gallery/11.jpg",
      "/project/apple-tv-drone-tour/gallery/12.jpg",
      "/project/apple-tv-drone-tour/gallery/13.jpg",
      "/project/apple-tv-drone-tour/gallery/14.jpg",
      "/project/apple-tv-drone-tour/gallery/15.jpg",
      "/project/apple-tv-drone-tour/gallery/16.jpg",
      "/project/apple-tv-drone-tour/gallery/17.jpg",
      "/project/apple-tv-drone-tour/gallery/18.jpg",
    ],
    []
  );

  return (
    <main>
      <ResponsivePlayer
        desktop="https://vimeo.com/881849581"
        mobile="https://vimeo.com/881851134"
      />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            Drone Tour <span>{"//"}</span>  TV
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Showcase soccer-specific stadiums within MLS and the historical
              aspects of each club.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              Combine cinematic high-resolution drone footage with dynamic FPV
              to tell the story of each club. For three years, we&apos;ve
              expanded the series to include a live game and a local celebrity
              host to help tell authentic stories for each club.
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
              Camera: Jason Cadena, Maria Babcock, Keith Dixon, Luis Villeral,
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
          &quot;In the past year, I had the opportunity to edit numerous MLS
          drone tours, which have become some of my favorite projects. I&apos;ve
          enjoyed working with drone footage, and the addition of FPV takes the
          experience to the next level. Combining this with the most memorable
          moments from the club&apos;s history is an enjoyable creative process.
          These tours offer viewers a unique perspective of their MLS team.
          It&apos;s exciting to witness these projects come to life on Apple
          TV.&quot;
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
