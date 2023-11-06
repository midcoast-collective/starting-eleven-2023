import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Page from "@/app/components/pageComponents";
import * as Project from "@/app/components/project";

export const metadata = {
  title: "FIFA World Cup Qatar 2022 - Starting Eleven",
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
    ],
    []
  );

  return (
    <main>
      <Page.Placeholder $image="/project/fifa-world-cup-qatar/gallery/8.jpg" />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            FIFA World Cup Qatar 2022™
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Photograph the FIFA World Cup 2022 in Qatar for adidas&apos; and
              MLS&apos; social campaigns
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              This was Devin&apos;s first time photographing at a World Cup. He
              used his relationships, connections and observational skills to
              soak in all the information he could upon his arrival. Looking for
              opportunities where he could excel at the tournament and have his
              photos stand out from the hundreds of other photographers there.
              <br />
              Within three games adidas football reached out to him requesting
              his services and hired him out for the rest of the tournament.
              This came will more responsibilities and more pressure to deliver
              exceptional images and in very quick turn around as adidas wanted
              to post photos about the game on their social channels seconds
              after the final whistle. With no help on the editing or ingestion
              of his photos, Devin would capture the images, edit and upload
              selects all while the game was happening. This is something that
              we provide for a lot of our clients and believe that this is a
              major factor of why we are the best in the game. We deliver the
              highest quality, with the fastest turnaround.
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
          treat the tournament as if I was representing my country and my own
          legacy. I arrived in Doha working myself up, telling myself that this
          is where I prove that I&apos;m the best soccer photographer in the
          world. What better stage? Photographers from all around the world all
          shooting the same thing. We were areound the pitches like sardines.
          Photographers were elbowing eachother and jockeying for ever inch of
          space just for the fraction of an advantage to get a better photo that
          the others. And I did it. I think I really did it. I put my name on
          the map internationally, and developed a great client relationship
          with the crew at adidas football.&auote;
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
          &quot;I tell most people that I went in to the World Cup with no
          expectations because that&apos;s an easy conversation to have. In
          reality, I went in with the goal to come out as the best photographer
          I could be; making the most of the opportunity, and again, I think I
          did that.&quot;
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