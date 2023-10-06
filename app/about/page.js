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

const SectionTitle = styled.h2`
  border-bottom: 1px solid var(--color-dark);
  border-top: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
  margin: 3rem 0;
  padding: 1.5rem 0;
  text-transform: uppercase;
`;

const Projects = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  height: 12rem;
  position: relative;
  background-size: cover;
  background-position: center;
`;

const ProjectTitle = styled.h3`
  border-bottom: 1px solid var(--color-dark);
  border-top: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1;
  margin: 1.5rem 0 0.75rem;
  padding: 0.75rem 0;
  text-transform: uppercase;

  span {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const FeaturedProjectTitle = styled(ProjectTitle)`
  border-bottom: 0;
  border-top: 0;
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
`;

const About = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const AboutImageContainer = styled.div`
  display: flex;
  background-image: url(/about.png);
  height: 61.8vh;
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
  grid-template-columns: 2fr 1fr;
`;

const SpecialImageContainer = styled.a`
  display: flex;

  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

const Contact = styled.div``;

const ContactImageContainer = styled.div`
  background-image: url(field.png);
  background-position: center;
  background-size: cover;
  height: 350px;
  margin-bottom: 3px;
  position: relative;
  width: 100%;
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
        <Placeholder $image="/PLANE.png">
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
                Starting Eleven is the leading soccer-specific production agency
                in the country. From conception to post-production, we deliver
                authentic stories rooted in respect for the sport — and everyone
                who loves it. We elevate narratives for athletes, clubs,
                leagues, and brands by connecting artist to artist.
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

        <section id="projects">
          <SectionTitle>Featured Project</SectionTitle>
          <Special>
            <SpecialImageContainer
              href="/project/eafc/"
              style={{ backgroundImage: "url(/project/eafc/eafc-hero.jpg)" }}
            ></SpecialImageContainer>

            <Project>
              <FeaturedProjectTitle>
                EAFC FUT Hero
                <br />
                <span>Demarcus Beasley</span>
              </FeaturedProjectTitle>
              <p>
                Produced by: Starting Eleven
                <br /> Directors: Casey Wertz and Devin L&apos;Amoreaux
                <br /> Art: daisyparoczyhickey
                <br /> VFX: andytorres_a
                <br /> Editor: mariababcock
                <br /> Associate Producer and 1st AD: victoriasbritton
                <br /> DP: chrisdurr__
                <br /> AC: rbranit
                <br /> Score and final mix: zane_callister
                <br /> Colorist: taylrejonesgrade
                <br /> Sound Design: @cstropko
                <br /> BTS: Jason Cadena
                <br />
                <br />
                <a href="#0">More &rarr;</a>
              </p>
            </Project>
          </Special>
        </section>

        <section>
          <SectionTitle>Projects</SectionTitle>
          <Projects>
            {PROJECTS.map(({ client, description, image, title }) => (
              <Project key={title}>
                <ProjectImageContainer
                  href="/project/eafc/"
                  style={{ backgroundImage: `url(${image})` }}
                ></ProjectImageContainer>

                <ProjectTitle>
                  {title}
                  <br />
                  <span>{client}</span>
                </ProjectTitle>

                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <a href="/project/eafc/">More &rarr;</a>
              </Project>
            ))}
          </Projects>
        </section>

        <section id="contact">
          <SectionTitle>Contact us</SectionTitle>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p>
              <strong>email@startingeleven.com</strong>
            </p>
          </div>

          <Contact>
            <ContactImageContainer></ContactImageContainer>
          </Contact>
        </section>
      </Wrap>
    </main>
  );
}
