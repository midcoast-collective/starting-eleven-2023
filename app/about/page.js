import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/page";
import ImageWithVideoModal from "@/app/components/imageWithVideoModal";

export const metadata = {
  title: "About - Starting Eleven",
  description: "Setting the standard for soccer storytelling.",
};

export default function AboutPage() {
  const PROJECTS = [
    {
      id: 1,
      client: "Client Name",
      title: "Leagues Cup 2023",
      image: "/PLANE.png",
      description: `<p>
        PRODUCED BY: Starting Eleven
        <br />
        DIRECTED BY: Casey Wertz & Devin L&apos;Amoreaux
        <br />
        CAMERA OPERATORS: Luis Villarreal & Alec Gnass
        <br />
        EDITOR: Alec Gnass
        <br />
        Photography: Devin L&apos;Amoreaux
      </p>`,
    },
    {
      id: 2,
      client: "@mls x @appletv",
      title: "Breakaway - Ep. 5 (Mateusz Klich)",
      image: "/BREAKAWAY.jpg",
      description: `<p>
        PRODUCED BY: Starting Eleven
        <br />
        DIRECTED BY: Casey Wertz & Devin L&apos;Amoreaux
        <br />
        CAMERA OPERATORS: Luis Villarreal & Alec Gnass
        <br />
        EDITOR: Alec Gnass
        <br />
        Photography: Devin L&apos;Amoreaux
      </p>`,
    },
    {
      id: 3,
      client: "Puma",
      title: "A New King (Xavi Simons)",
      image: "/NEW_KING.jpg",
      description: `<p>
          PRODUCED BY: Starting Eleven
          <br />
          CREATIVE: Starting Eleven
          <br />
          DP/EDITOR: Jason Cadena
        </p>`,
    },
  ];

  return (
    <main>
      <section>
        <ImageWithVideoModal />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section id="about">
            <Page.SectionTitle>Why Us?</Page.SectionTitle>
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

              <Page.AboutImageContainer></Page.AboutImageContainer>
            </Page.About>
          </section>
        </Wrap>
      </Page.GrayBackground>

      <Wrap>
        <section id="projects">
          <Page.SectionTitle>Projects</Page.SectionTitle>
          <Page.Special>
            <Page.SpecialImageContainer
              href="/project/apple-tv-breakaway"
              style={{
                backgroundImage:
                  "url(/project/apple-tv-breakaway/images/apple-tv-breakaway.png)",
              }}
            ></Page.SpecialImageContainer>

            <Page.Project>
              <Page.FeaturedProjectTitle>
                Breakaway
                <br />
                <span>Apple TV</span>
              </Page.FeaturedProjectTitle>
              <p>
                This project is a big undertaking for us balancing a players
                personal time and achieving high quality through the camera and
                story. Sometimes the equation doesn&apos;t favor us but
                that&apos;s what makes us the best at what we do. We know how to
                be in the players shoes and bring the best out of them.
                <br />
                <br />
                <a href="/project/apple-tv-breakaway">More &rarr;</a>
              </p>
            </Page.Project>
          </Page.Special>
        </section>

        <section>
          <Page.Projects>
            {PROJECTS.map(({ client, description, image, title }) => (
              <Page.Project key={title}>
                <Page.ProjectImageContainer
                  href="/project/apple-tv-breakaway"
                  style={{ backgroundImage: `url(${image})` }}
                ></Page.ProjectImageContainer>

                <Page.ProjectTitle>
                  {title}
                  <br />
                  <span>{client}</span>
                </Page.ProjectTitle>

                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <br />
                <a href="/project/apple-tv-breakaway">More &rarr;</a>
              </Page.Project>
            ))}
          </Page.Projects>
        </section>
      </Wrap>
    </main>
  );
}
