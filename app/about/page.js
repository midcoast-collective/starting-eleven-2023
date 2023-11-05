import { useMemo } from "react";

import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/page";
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
        client: "MLS x AppleTV",
        featured: true,
        title: "Breakaway",
        image: "",
        link: "/project/apple-tv-breakaway",
        description:
          "This project is a big undertaking for us balancing a players personal time and achieving high quality through the camera and story. Sometimes the equation doesn't favor us but that's what makes us the best at what we do. We know how to be in the players shoes and bring the best out of them.",
      },
      {
        id: 2,
        client: "MLS x AppleTV",
        featured: false,
        link: "/project/apple-tv-drone-tour",
        title: "Drone Tour",
        image:
          "/project/apple-tv-drone-tour/gallery/lamoreaux_portland_drone_tourL1021571-Enhanced-NR.jpg",
        description:
          "Combine cinematic high resolution drone footage with dynamic FPV to tell the story of each club. Over the course of 3 years, we've expanded on the series to include a live game and local celebrity host to help tell authentic story for each club.",
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
