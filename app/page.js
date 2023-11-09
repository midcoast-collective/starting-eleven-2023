import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import ResponsivePlayer from "@/app/components/responsivePlayer";

export const metadata = {
  title: "About - Starting Eleven",
  description: "Setting the standard for soccer storytelling.",
};

export default function AboutPage() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        client: "MLS x  TV",
        featured: true,
        title: "Breakaway",
        image: "/project/apple-tv-breakaway/gallery/21.jpg",
        link: "/project/apple-tv-breakaway",
        description:
          "This project is a big undertaking for us, balancing a player's time and achieving high quality through the camera and story. Sometimes, the equation doesn't favor us, but that is what makes us the best at what we do. We know how to be in the player's shoes and bring the best out of them.",
      },
      {
        id: 2,
        client: "MLS x  TV",
        featured: false,
        link: "/project/apple-tv-drone-tour",
        title: "Drone Tour",
        image: "/project/apple-tv-drone-tour/gallery/13.jpg",
        description:
          "Combine cinematic high-resolution drone footage with dynamic FPV to tell the story of each club. For three years, we've expanded the series to include a live game and a local celebrity host to help tell authentic stories for each club.",
      },
      {
        id: 3,
        client: "EA Sports",
        featured: false,
        link: "/project/fc-24-cover-shoot",
        title: "FC 24 Cover Shoot",
        image: "/project/fc-24-cover-shoot/gallery/1.jpg",
        description:
          "Starting Eleven founding partner and lead photographer Devin L'Amoreaux, was hired to photograph eventual cover star Erling Haaland and another high-profile player over the course of 2 football matches. The agency was already big fans of Devin's in-game photography and trusted he was the right photographer for the job.",
      },
      {
        id: 4,
        client: "Trickybeas x EAFC",
        featured: false,
        link: "/project/ultimate-team-heroes-campaign",
        title: "Ultimate Team Heroes Campaign",
        image: "/project/ultimate-team-heroes-campaign/gallery/1.jpg",
        description:
          "The wish list from EA was to take Beasly to the Netherlands and bring him to PSV. When asked how we could integrate PSV, we tried to bring PSV to him. The inspo was taken from X-Men to slow everything down around him to prep for the PSV Champion League Match, with less than two weeks to produce, film, and edit. We built a team of specialized people to execute the vision quickly while keeping quality high.",
      },
      {
        id: 5,
        client: "Adidas x MLS",
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
        image: "/project/leagues-cup/gallery/11.jpg",
        description:
          "Going beyond the ask of game capture, we wanted to create an iconic moment that lived forever as something written as history. Devin L'Amoreaux pitched the idea of a trophy room moment with the legendary Inter Miami team. Something we pride ourselves in is going the extra mile to achieve greatness.",
      },
      {
        id: 7,
        client: " TV",
        featured: true,
        link: "/project/messi-mania",
        title: "Messi Mania",
        image: "/project/messi-mania/gallery/3.jpg",
        description:
          "Initially, a doc that was supposed to comprise of a few games dwindled to one as it was enough to tell the story. We captured Argentina fans bowing down to a mural of Messi, fans fighting their way into the training center to see Messi, and Messi winning his first game on a free kick in the closing minute. The script was written for us.",
      },
      {
        id: 8,
        client: "Mexican National Team",
        featured: false,
        link: "/project/mextour",
        title: "Mextour",
        image: "/project/mextour/gallery/8.jpg",
        description:
          "We all know games are best recapped immediately after. So we built a system that gets a creative edit within hours of the game to relive the game the very next morning using frame to cloud and a highly talented internal coverage team.",
      },
    ],
    []
  );

  return (
    <main>
      <section>
        <ResponsivePlayer
          desktop="https://vimeo.com/854736625"
          mobile="https://vimeo.com/857607311"
        />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section id="about">
            <Page.SectionTitle as="h1">About Us</Page.SectionTitle>
            <Page.About>
              <div>
                <h3>Setting the standard for soccer storytelling.</h3>
                <p>
                  <br />
                  It&apos;s not a game. It&apos;s art.
                </p>
                <p>
                  Starting Eleven is the leading soccer-specific production
                  agency in the United States. From conception to
                  post-production, we deliver authentic stories rooted in
                  respect for the sport — and everyone who loves it. We elevate
                  narratives for athletes, clubs, leagues, and brands by
                  connecting artist to artist.
                </p>
                <p>
                  Starting Eleven has covered everything from the World Cup and
                  the cover of EAFC (previously FIFA) to every significant
                  soccer game played in the United States. We are a bilingual,
                  multicultural team of soccer enthusiasts.
                </p>
                <p>This is our passion, not just another job.</p>
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
