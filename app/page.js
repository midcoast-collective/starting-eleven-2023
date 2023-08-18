"use client";

import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Wrap from "./components/wrap";
import ResponsivePlayer from "./components/responsivePlayer";
import ProjectOneImage from "../public/making-the-plane.png";
import AboutImage from "../public/about.png";
import FieldImage from "../public/field.png";
import ContactImage from "../public/contact.png";
import Logo from "../public/logo.png";

const IntroWrap = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const IntroLogo = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 400px;
  height: 46px;
  z-index: 2;
`;

const VideoContainer = styled.video`
  height: auto;
  margin-top: 3rem;
  opacity: 0;
  visibility: hidden;
  width: 100%;
`;

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

export default function Home() {
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
      {introVisible && (
        <IntroWrap onClick={() => setIntroVisible(false)}>
          <IntroLogo>
            <Image
              alt="Starting Eleven"
              fill
              priority
              src={Logo}
              sizes="400px"
              style={{ objectFit: "cover" }}
            />
          </IntroLogo>
          <ResponsivePlayer
            url="https://vimeo.com/854736625"
            style={{
              height: "100vh",
              width: "200vh",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </IntroWrap>
      )}

      <Wrap>
        <section>
          <Placeholder $image="/making-the-plane.png">
            <PlayButton>&#9658;</PlayButton>
          </Placeholder>
        </section>

        <section id="about">
          <SectionTitle>Why Us?</SectionTitle>\
          <About>
            <div>
              <p>
                <strong>
                  Starting Eleven is the leading soccer-specific media agency in
                  the United States.
                </strong>
              </p>
              <p>In the past 365 days, we have:</p>

              <p>
                - photographed Real Madrid & Juventus summer tours in 2022.
                <br />
                - photographed the new cover for EA FC 2024.
                <br />
                - photographed The World Cup 2022 for adidas.
                <br />
                - Photographed adidas x Manchester United retro launch in Spring
                2023.
                <br />- produced and directed 2 episodic series for MLS x  TV.
              </p>

              <p>
                <strong>We are the best.</strong>
              </p>

              <p>
                No other media agency in the US, and even abroad, can say that
                they did half of those things in the last year
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

        <section>
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
