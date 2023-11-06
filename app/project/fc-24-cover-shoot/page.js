import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import Gallery from "@/app/components/gallery";
import Episodes from "@/app/components/episodes";
import * as Project from "@/app/components/project";
import * as Page from "@/app/components/pageComponents";

export const metadata = {
  title: "FC 24 Cover Shoot EA Sports - Starting Eleven",
  description:
    "Starting Eleven founding partner and lead photographer, Devin L'Amoreaux was hired to photograph eventual cover star, Erling Haaland, and another high profile player, over the course of 2 football matches. The agency were already big fans of Devin's in-game photography and trusted he was the right photographer for the job.",
};

export default function ProjectPage() {
  const episodes = useMemo(() => [], []);

  const slides = useMemo(
    () => [
      "/project/fc-24-cover-shoot/gallery/1.jpg",
      "/project/fc-24-cover-shoot/gallery/2.jpg",
      "/project/fc-24-cover-shoot/gallery/3.jpg",
      "/project/fc-24-cover-shoot/gallery/4.jpg",
    ],
    []
  );

  return (
    <main>
      <Page.Placeholder $image="/project/fc-24-cover-shoot/gallery/4.jpg" />

      <Project.ContentSection>
        <Wrap>
          <Project.ProjectTitle>
            FC 24 Cover Shoot - EA Sports
          </Project.ProjectTitle>
          <Project.ProjectSection>
            <Project.ProjectSectionTitle>
              Project Scope
            </Project.ProjectSectionTitle>
            <p>
              Photograph the first ever &quot;FC 24&quot; cover, post-rebrand
              for the most popular sport game in the world, Electronic Arts
              &quot;FIFA&quot;.
              <br />
              <br />
              This cover shoot will also be the first cover to ever have the
              image taken in a live game scenario. The client believed that with
              the rebrand to FC, the approach should feel &quot;200%
              football&quot; meaning they wanted to bring the fans as close to
              the real world as possible. This mean capturing the cover photo in
              a real live environment.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Approach</Project.ProjectSectionTitle>
            <p>
              &quot;This is what I do&quot;
              <br />
              <br />
              Starting Eleven founding partner and lead photographer, Devin
              L&apos;Amoreaux was hired to photograph eventual cover star,
              Erling Haaland, and another high profile player, over the course
              of 2 football matches. The agency were already big fans of
              Devin&apos;s in-game photography and trusted he was the right
              photographer for the job.
              <br />
              <br />
              Prior to flying to Manchester to photograph Manchester City vs Red
              Bull Leipzig in a Champions League match up, Devin consulted with
              the managing agency on his plans of maximizing his chances of
              getting &quot;the shot&quot;. Trusting his years of experience, he
              was able to place himself in a position on gameday where Haaland
              scored and celebrated infront of him multiple times.
              <br />
              <br />
              At the end of the day, Devin was confident in his photographs that
              surely one image would be fit for the cover. All though none of
              Devin&apos;s preferred selects were chosen for the cover, we are
              still extremely proud that the cover photo was ultimately one he
              captured on the game day and is now being displayed all over the
              planet and on the screens and game cases of football fans the
              world over.
            </p>
          </Project.ProjectSection>

          <Project.ProjectSection>
            <Project.ProjectSectionTitle>Credits</Project.ProjectSectionTitle>
            <p>Photographer: Devin L&apos;Amoreaux</p>
          </Project.ProjectSection>

          {episodes.length > 0 ? <Episodes data={episodes} /> : null}
        </Wrap>
      </Project.ContentSection>

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;Photographing the FC 24 cover is a dream come true, simple as
          that. As a kid I grew up playing every version of EA&apos;s FIFA to
          ever exist. I would run to my local Walmart or Gamestop in the days
          before social media just to see who could be on the cover and I&apos;d
          speculate with my friends and teammates at training. To be honest I
          always dreamed that one day it would be me on the cover… I guess I
          will have to settle for shooting it now.&quot;
        </p>
        <p className="author">
          - Devin L&apos;Amoreaux
          <br />
          Photographer
        </p>
      </Project.QuoteSection>

      {slides.length > 0 ? (
        <section>
          <Gallery data={slides} />
        </section>
      ) : null}

      <Project.QuoteSection style={{ paddingTop: "6rem" }}>
        <p>
          &quot;I think it&apos;s also relevant to say that when I first looked
          at the cover photo I thought &quot;that&apos;s not so special.&quot; I
          felt that it was a cool achievement sure but staring at a single photo
          didn&apos;t not feel like an amazing achievement… and then I had to
          tell myself that it&apos;s not just that one cover photo that should
          feel special on its own, but rather the millions and millions of
          photos I took before this one; all of those photos that helped earn
          the opportunity to be selected to take this cover photo, those are
          what I&apos;m most proud of… and this cover photo is just the
          culmination of tha.&quot;
        </p>
        <p className="author">
          - Devin L&apos;Amoreaux
          <br />
          Photographer
        </p>
      </Project.QuoteSection>
    </main>
  );
}