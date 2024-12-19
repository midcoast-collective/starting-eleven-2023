import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/pageComponents";
import ResponsivePlayer from "@/app/components/responsivePlayer";
import client from "@/utils/contentful";

export const metadata = {
  title: "Starting Eleven - Setting the standard for soccer storytelling",
  description: "Setting the standard for soccer storytelling.",
};

export default async function AboutPage() {
  let data = [];

  try {
    const response = await client.getEntries({ content_type: "projects" });
    data = response?.items;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

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

          {!!data?.length &&
            data
              .filter((project) => project?.fields?.featured)
              .sort((a, b) => a?.fields?.index - b?.fields?.index)
              .map((project) => (
                <Page.Special key={project?.fields?.title}>
                  <Page.SpecialImageContainer
                    href={`/project/${project?.fields?.title.replace(
                      /\s+/g,
                      "-"
                    )}`}
                  >
                    <div
                      style={{
                        backgroundImage: project?.fields?.heroImage?.fields
                          ?.file?.url
                          ? `url(https:${project?.fields?.heroImage?.fields?.file?.url})`
                          : null,
                      }}
                    ></div>
                  </Page.SpecialImageContainer>

                  <Page.Project>
                    <Page.FeaturedProjectTitle>
                      {project?.fields?.title}
                      <br />
                      <span>{project?.fields?.client}</span>
                    </Page.FeaturedProjectTitle>

                    <p>
                      {project?.fields?.description}
                      <br />
                      <br />
                      <a
                        href={`/project/${project?.fields?.title.replace(
                          /\s+/g,
                          "-"
                        )}`}
                      >
                        More &rarr;
                      </a>
                    </p>
                  </Page.Project>
                </Page.Special>
              ))}
        </section>

        <section>
          <Page.Projects>
            {!!data?.length &&
              data
                .filter((project) => !project?.fields?.featured)
                .sort((a, b) => a?.fields?.index - b?.fields?.index)
                .map((pro) => (
                  <Page.Project key={pro?.title}>
                    <Page.ProjectImageContainer
                      href={`/project/${pro?.fields?.title.replace(
                        /\s+/g,
                        "-"
                      )}`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(https:${pro?.fields?.heroImage?.fields?.file?.url})`,
                        }}
                      ></div>
                    </Page.ProjectImageContainer>

                    <Page.ProjectTitle>
                      {pro?.fields?.title}
                      <br />
                      <span>{pro?.client}</span>
                    </Page.ProjectTitle>

                    <p>
                      <a
                        href={`/project/${pro?.fields?.title.replace(
                          /\s+/g,
                          "-"
                        )}`}
                      >
                        More &rarr;
                      </a>
                    </p>
                  </Page.Project>
                ))}
          </Page.Projects>
        </section>
      </Wrap>
    </main>
  );
}
