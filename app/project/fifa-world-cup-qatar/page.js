import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Page from "@/app/components/pageComponents";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "FIFA World Cup Qatar 2022 // Adidas - Starting Eleven",
  description:
    "This was Devin's first time photographing at a World Cup. He used his relationships, connections and observational skills to soak in all the information he could upon his arrival. Looking for opportunities where he could excel at the tournament and have his photos stand out from the hundreds of other photographers there.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/fifa-world-cup-qatar/gallery/1.jpg",
      "/project/fifa-world-cup-qatar/gallery/2.jpg",
      "/project/fifa-world-cup-qatar/gallery/3.jpg",
      "/project/fifa-world-cup-qatar/gallery/4.jpg",
      "/project/fifa-world-cup-qatar/gallery/5.jpg",
      "/project/fifa-world-cup-qatar/gallery/6.jpg",
      "/project/fifa-world-cup-qatar/gallery/7.jpg",
      "/project/fifa-world-cup-qatar/gallery/8.jpg",
      "/project/fifa-world-cup-qatar/gallery/9.jpg",
      "/project/fifa-world-cup-qatar/gallery/10.jpg",
      "/project/fifa-world-cup-qatar/gallery/11.jpg",
      "/project/fifa-world-cup-qatar/gallery/12.jpg",
      "/project/fifa-world-cup-qatar/gallery/13.jpg",
      "/project/fifa-world-cup-qatar/gallery/14.jpg",
      "/project/fifa-world-cup-qatar/gallery/15.jpg",
      "/project/fifa-world-cup-qatar/gallery/16.jpg",
      "/project/fifa-world-cup-qatar/gallery/17.jpg",
      "/project/fifa-world-cup-qatar/gallery/18.jpg",
      "/project/fifa-world-cup-qatar/gallery/19.jpg",
      "/project/fifa-world-cup-qatar/gallery/20.jpg",
      "/project/fifa-world-cup-qatar/gallery/21.jpg",
      "/project/fifa-world-cup-qatar/gallery/22.jpg",
      "/project/fifa-world-cup-qatar/gallery/22.jpg",
      "/project/fifa-world-cup-qatar/gallery/24.jpg",
    ],
    []
  );

  return (
    <main>
      <Page.Placeholder $image="/project/fifa-world-cup-qatar/gallery/cover.jpg" />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            FIFA World Cup Qatar 2022™ <span>{"//"}</span> Adidas
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Photograph the FIFA World Cup 2022 in Qatar for Adidas&apos; and
              Major League Soccer social campaign
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              This was Devin&apos;s first time photographing at a World Cup. He
              used his relationships, connections, and observational skills to
              soak in all the information he could upon his arrival. He was
              looking for opportunities to excel at the tournament and have his
              photos stand out from the hundreds of other photographers there.
            </p>
            <p>
              Within three games, Adidas football contacted him requesting his
              services and hired him out for the rest of the tournament. This
              came with more responsibilities and pressure to deliver
              exceptional images with a fast turnaround. Adidas wanted to post
              photos about the game on their social channels seconds after the
              final whistle. With no help on the editing or ingestion of his
              photographs, Devin would capture the images, edit, and upload
              selects, all while the game was happening. This is something that
              we provide for a lot of our clients, and this is a significant
              factor in why we are the best in the game. We deliver the highest
              quality with the fastest turnaround.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>Photographer: Devin L&apos;Amoreaux</p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection>
        <p>
          &quot;I went into this World Cup fired up. I told myself I needed to
          treat the tournament as if I was representing my country and my
          legacy. I arrived in Doha working myself up, telling myself that this
          is where I would prove I&apos;m the best soccer photographer in the
          world. What better stage? Photographers from all around the world all
          shoot the same thing. We were around the pitches like sardines.
          Photographers were elbowing each other and jockeying for every inch of
          space just for a fraction of an advantage to get a better photo than
          the others. And I did it. I did it. I put my name on the map
          internationally and developed a great client relationship with the
          crew at Adidas football.&quot;
        </p>
        <p className="author">
          - Devin L&apos;Amoreaux
          <br />
          Director
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;I tell most people I went into the World Cup without
          expectations because that&apos;s an easy conversation. In reality, I
          intended to come out as the best photographer I could be, making the
          most of the opportunity, and again, I did that.&quot;
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
