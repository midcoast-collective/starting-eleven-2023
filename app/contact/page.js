"use client";

import Wrap from "@/app/components/wrap";
import * as Page from "@/app/components/page";

export default function ContactPage() {
  return (
    <main>
      <section>
        <Page.Placeholder $image="/stadium-gameday.png" />
      </section>

      <Page.GrayBackground>
        <Wrap>
          <section>
            <Page.SectionTitle>Contact us</Page.SectionTitle>
            <Page.About>
              <div>
                <p>
                  <strong>Setting the standard for soccer storytelling.</strong>
                </p>
                <p>It&apos;s not a game. It&apos;s art.</p>
                <p>
                  Starting Eleven is the leading soccer-specific production
                  agency in the country. From conception to post-production, we
                  deliver authentic stories rooted in respect for the sport —
                  and everyone who loves it. We elevate narratives for athletes,
                  clubs, leagues, and brands by connecting artist to artist.
                </p>
                <p>
                  <strong>
                    STARTING ELEVEN HAS COVERED EVERYTHING FROM THE WORLD CUP TO
                    SHOOTING THE COVER OF EAFC (PREVIOUSLY FIFA) TO EVERY
                    SIGNIFICANT soccer game within the United States. WE ARE A
                    BILINGUAL, MULTICULTURAL TEAM OF SOCCER ENTHUSIASTS.
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
      </Wrap>
    </main>
  );
}
