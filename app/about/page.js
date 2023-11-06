import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import ImageWithVideoModal from "@/app/components/imageWithVideoModal";

export const metadata = {
  title: "About - Starting Eleven",
  description: "Setting the standard for soccer storytelling.",
};

export default function AboutPage() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        client: "MLS + AppleTV",
        featured: true,
        title: "Breakaway",
        image: "",
        link: "/project/apple-tv-breakaway",
        description:
          "This project is a big undertaking for us balancing a players personal time and achieving high quality through the camera and story. Sometimes the equation doesn't favor us but that's what makes us the best at what we do. We know how to be in the players shoes and bring the best out of them.",
      },
      {
        id: 2,
        client: "MLS + AppleTV",
        featured: false,
        link: "/project/apple-tv-drone-tour",
        title: "Drone Tour",
        image: "/project/apple-tv-drone-tour/gallery/1.jpg",
        description:
          "Combine cinematic high resolution drone footage with dynamic FPV to tell the story of each club. Over the course of 3 years, we've expanded on the series to include a live game and local celebrity host to help tell authentic story for each club.",
      },
      {
        id: 3,
        client: "EA Sports",
        featured: false,
        link: "/project/fc-24-cover-shoot",
        title: "FC 24 Cover Shoot",
        image: "/project/fc-24-cover-shoot/gallery/1.jpg",
        description:
          "Starting Eleven founding partner and lead photographer, Devin L'Amoreaux was hired to photograph eventual cover star, Erling Haaland, and another high profile player, over the course of 2 football matches. The agency were already big fans of Devin's in-game photography and trusted he was the right photographer for the job.",
      },
      {
        id: 4,
        client: "Trickybeas",
        featured: false,
        link: "/project/ultimate-team-heroes-campaign",
        title: "Ultimate Team Heroes Campaign",
        image: "/project/ultimate-team-heroes-campaign/gallery/1.jpg",
        description:
          "The wish list from EA was to take Beasly to the Netherlands and bring him to PSV. The inspiration was taken from X-Men to slow everying down around him to prep for the PSV Champion League Match. With less then two weeks time to produce, film and edit. We built out a team comprised of specialized people to execute the vision quickly.",
      },
      {
        id: 5,
        client: "Adidas + MLS",
        featured: false,
        link: "/project/fifa-world-cup-qatar",
        title: "FIFA World Cup Qatar 2022™",
        image: "/project/fifa-world-cup-qatar/gallery/8.jpg",
        description:
          "This was Devin's first time photographing at a World Cup. He used his relationships, connections and observational skills to soak in all the information he could upon his arrival. Looking for opportunities where he could excel at the tournament and have his photos stand out from the hundreds of other photographers there.",
      },
      {
        id: 6,
        client: "Major League Soccer",
        featured: false,
        link: "/project/leagues-cup",
        title: "Leagues Cup",
        image: "/project/leagues-cup/gallery/2.jpg",
        description:
          "Going beyond the ask of game capture, we wanted to create a iconic moment that lived forever as something written as history. Devin L'Amoreaux, pitched the idea of a trophy room moment with the legendary Inter Miami team. Something we pride ourselves in is going the extra mile to achieve greatness.",
      },
      {
        id: 7,
        client: "Apple TV",
        featured: false,
        link: "/project/messi-mania",
        title: "Messi Mania",
        image: "/project/messi-mania/gallery/3.jpg",
        description:
          "Originally a doc that was suppose to be comprised of a few games dwindled to one as it was enough to tell the story in our opinion. We captured argentina fans bowing down to a mural of messi, fans fighting their way into the training center to see messi, to messi winning his first game on a free kick in the closing minute. The script was written for us. ",
      },
    ],
    []
  );

  return (
    <main>
      <section>
        <ImageWithVideoModal />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section id="about">
            <Page.SectionTitle as="h1">Why Us?</Page.SectionTitle>
            <Page.About>
              <div>
                <h3>Setting the standard for soccer storytelling.</h3>
                <p>
                  <br />
                  It&apos;s not a game. It&apos;s art.
                </p>
                <p>
                  Starting Eleven is the leading soccer-specific production
                  agency in the country. From conception to post-production, we
                  deliver authentic stories rooted in respect for the sport —
                  and everyone who loves it. We elevate narratives for athletes,
                  clubs, leagues, and brands by connecting artist to artist.
                </p>
                <p>
                  <strong>
                    Starting Eleven has covered everything from the World Cup to
                    the cover of EAFC (previously FIFA) to covering every
                    significant soccer game played in the United States. We are
                    a bilingual, multicultural team of soccer enthusiasts.
                  </strong>
                </p>
              </div>

              <Page.AboutImageContainer />
            </Page.About>
          </section>
        </Wrap>
      </Page.GrayBackground>

      <Wrap>
        <section id="projects">
          <Page.SectionTitle>Projects</Page.SectionTitle>

          {projects
            .filter((project) => project.featured)
            .map(({ client, description, link, image, title }) => (
              <Page.Special key={title}>
                <Page.SpecialImageContainer
                  href={link}
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></Page.SpecialImageContainer>

                <Page.Project>
                  <Page.FeaturedProjectTitle>
                    {title}
                    <br />
                    <span>{client}</span>
                  </Page.FeaturedProjectTitle>

                  <p>
                    {description}
                    <br />
                    <br />
                    <a href={link}>More &rarr;</a>
                  </p>
                </Page.Project>
              </Page.Special>
            ))}
        </section>

        <section>
          <Page.Projects>
            {projects
              .filter((project) => !project.featured)
              .map(({ client, description, link, image, title }) => (
                <Page.Project key={title}>
                  <Page.ProjectImageContainer
                    href={link}
                    style={{ backgroundImage: `url(${image})` }}
                  ></Page.ProjectImageContainer>

                  <Page.ProjectTitle>
                    {title}
                    <br />
                    <span>{client}</span>
                  </Page.ProjectTitle>

                  <p>
                    {description}
                    <br />
                    <br />
                    <a href={link}>More &rarr;</a>
                  </p>
                </Page.Project>
              ))}
          </Page.Projects>
        </section>
      </Wrap>
    </main>
  );
}
