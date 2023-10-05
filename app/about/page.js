"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Wrap from "../components/wrap";
import ProjectOneImage from "../../public/making-the-plane.png";
import AboutImage from "../../public/about.png";
import FieldImage from "../../public/field.png";

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

  p:hover {
    a {
      margin-left: 0.25rem;
    }
  }
`;

const ProjectImageContainer = styled.a`
  display: block;
  height: 15rem;
  position: relative;
`;

const ProjectTitle = styled.h3`
  border-bottom: 1px solid var(--color-dark);
  border-top: 1px solid var(--color-dark);
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  margin: 1.5rem 0 0.75rem;
  padding: 0.75rem 0;
  text-transform: uppercase;
`;

const About = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const AboutImageContainer = styled.div`
  height: 500px;
  position: relative;
  width: 100%;
`;

const Special = styled.div`
  column-gap: 3rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const SpecialImageContainer = styled.div`
  height: 500px;
  position: relative;
  width: 100%;
`;

const Contact = styled.div``;

const ContactImageContainer = styled.div`
  height: 350px;
  margin-bottom: 3px;
  position: relative;
  width: 100%;
`;

export default function AboutPage() {
  const [introVisible, setIntroVisible] = useState(true);

  const PROJECTS = [
    {
      id: 1,
      title: "Project 1 Title",
      image: ProjectOneImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Project 2 Title",
      image: ProjectOneImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Project 3 Title",
      image: ProjectOneImage,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <main>
      <section>
        <Placeholder $image="/making-the-plane.png">
          <PlayButton>&#9658;</PlayButton>
        </Placeholder>
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
            <AboutImageContainer>
              <Image
                src={AboutImage}
                alt="Why us? - Starting Eleven"
                fill
                sizes="800px"
                style={{ objectFit: "cover" }}
              />
            </AboutImageContainer>
          </About>
        </section>

        <section>
          <SectionTitle>We are special</SectionTitle>
          <Special>
            <SpecialImageContainer>
              <Image
                src={FieldImage}
                alt="We are special - Starting Eleven"
                fill
                sizes="800px"
                style={{ objectFit: "cover" }}
              />
            </SpecialImageContainer>
            <div>
              <p>
                1. Talented crew: best in the business. photo & video. from
                in-game action to editorial campaign work, we do it all.
              </p>
              <p>
                2. Camera to cloud technology: We can shoot high-quality video
                on the field & instantly have it uploaded for editors back home
                to get it live on social channels fast.
              </p>
              <p>
                3. Experience: We have worked with the biggest players in the
                world. we worked for you last summer, we can be trusted.
              </p>
              <p>
                4. We understand the u.s. market. we live here, we have
                conversations with local fans, & we can build content plans
                around those insights.
              </p>
              <p>
                5. We have multiple shooters and editors. We will always have
                enough crew available to capture everything you need.
              </p>
              <p>
                6. Cost effective - We do not charge for any travel or lodging.
              </p>
            </div>
          </Special>
        </section>

        <section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <Projects>
            {PROJECTS.map(({ description, image, title }) => (
              <Project key={title}>
                <ProjectImageContainer href="#0">
                  <Image
                    alt={title}
                    fill
                    sizes="400px"
                    src={image}
                    style={{ objectFit: "cover" }}
                  />
                </ProjectImageContainer>
                <ProjectTitle>{title}</ProjectTitle>
                <p>
                  {`${description}...`}
                  <a href="#0"> &rarr;</a>
                </p>
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
            <ContactImageContainer>
              <Image
                src={FieldImage}
                alt="We are special - Starting Eleven"
                fill
                sizes="1400px"
                style={{ objectFit: "cover" }}
              />
            </ContactImageContainer>
          </Contact>
        </section>
      </Wrap>
    </main>
  );
}
