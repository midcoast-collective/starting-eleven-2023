/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "@restart/ui/Button";
import Modal from "@restart/ui/Modal";

import ResponsivePlayer from "../components/responsivePlayer";
import Wrap from "../components/wrap";

const Placeholder = styled.div`
  align-items: center;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center;
  background-size: cover;
  display: flex;
  height: 700px;
  justify-content: center;
  width: 100%;
`;

const PlayButton = styled.div`
  color: white;
  cursor: pointer;
  font-size: 80px;
  text-shadow: 0 0 18px black;
`;

const GrayBackground = styled.div`
  background-color: var(--color-gray);
  border-bottom: 1px solid var(--color-dark);
  padding: 3rem 0;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  border-bottom: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: var(--font-size-heading-large);
  font-weight: 600;
  line-height: 1;
  margin: 0 0 3rem;
  padding: 1.5rem 0;
  text-transform: uppercase;
`;

const Projects = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: var(--grid-columns-three);
  padding: 3rem 0;
  row-gap: 3rem;
`;

const Project = styled.div`
  min-width: 0;

  a:hover {
    padding-left: 0.25rem;
  }

  p {
    margin-bottom: 0;
  }
`;

const ProjectImageContainer = styled.a`
  display: block;
  height: 15rem;
  position: relative;
  background-size: cover;
  background-position: center;
`;

const ProjectTitle = styled.h3`
  border-bottom: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: var(--font-size-heading-small);
  font-weight: 600;
  line-height: 1;
  margin: 0.75rem 0;
  padding: 0.75rem 0;
  text-transform: uppercase;

  span {
    font-size: var(--font-size-heading-subtitle);
    font-weight: 400;
  }
`;

const FeaturedProjectTitle = styled(ProjectTitle)`
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
`;

const About = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: var(--grid-columns-three);
`;

const AboutImageContainer = styled.div`
  display: flex;
  background-image: url(/about.png);
  grid-column: 2 / 4;
  min-height: 33rem;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const StyledModal = styled(Modal)`
  outline: 0;
  border: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  max-width: 80vw;
  width: 100vw;
`;

const ModalClose = styled(Button)`
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 100;
  line-height: 1;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 9;
`;

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Special = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: var(--grid-columns-three);
`;

const SpecialImageContainer = styled.a`
  display: flex;
  grid-column: 1 / 3;
  min-height: 33rem;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export default function AboutPage() {
  const [modalState, setModalState] = useState({ about: false });

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
        <Placeholder $image="/aboutpage.png">
          <PlayButton
            onClick={() =>
              setModalState((modalState) => ({ ...modalState, about: true }))
            }
          >
            &#9658;
          </PlayButton>
        </Placeholder>

        <StyledModal
          show={modalState.about}
          onHide={() =>
            setModalState((modalState) => ({ ...modalState, about: false }))
          }
          renderBackdrop={(props) => <StyledBackdrop {...props} />}
        >
          <div>
            <ModalClose
              as="span"
              onClick={() =>
                setModalState((modalState) => ({ ...modalState, about: false }))
              }
            >
              &times;
            </ModalClose>
            <ResponsivePlayer
              desktop="https://vimeo.com/854736625"
              mobile="https://vimeo.com/854736625"
            />
          </div>
        </StyledModal>
      </section>

      <GrayBackground>
        <Wrap>
          <section id="about">
            <SectionTitle>Why Us?</SectionTitle>
            <About>
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

              <AboutImageContainer></AboutImageContainer>
            </About>
          </section>
        </Wrap>
      </GrayBackground>

      <Wrap>
        <section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <Special>
            <SpecialImageContainer
              href="/project/apple-tv-breakaway"
              style={{
                backgroundImage:
                  "url(/project/apple-tv-breakaway/images/apple-tv-breakaway.png)",
              }}
            ></SpecialImageContainer>

            <Project>
              <FeaturedProjectTitle>
                Breakaway
                <br />
                <span>Apple TV</span>
              </FeaturedProjectTitle>
              <p>
                This project is a big undertaking for us balancing a players
                personal time and achieving high quality through the camera and
                story. Sometimes the equation doesn&apos;t favor us but
                that&apos;s what makes us the best at what we do. We know how to
                be in the players shoes and bring the best out of them.
                <br />
                <br />
                Produced by: Starting Eleven
                <br />
                Director(s): Casey Wertz & Devin L&apos;Amoreaux
                <br />
                <br />
                <a href="/project/apple-tv-breakaway">More &rarr;</a>
              </p>
            </Project>
          </Special>
        </section>

        <section>
          <Projects>
            {PROJECTS.map(({ client, description, image, title }) => (
              <Project key={title}>
                <ProjectImageContainer
                  href="/project/apple-tv-breakaway"
                  style={{ backgroundImage: `url(${image})` }}
                ></ProjectImageContainer>

                <ProjectTitle>
                  {title}
                  <br />
                  <span>{client}</span>
                </ProjectTitle>

                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <br />
                <a href="/project/apple-tv-breakaway">More &rarr;</a>
              </Project>
            ))}
          </Projects>
        </section>
      </Wrap>
    </main>
  );
}
