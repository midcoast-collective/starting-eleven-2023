"use client";

import styled from "styled-components";

export const IntroWrap = styled.div`
  background-color: black;
  border-bottom: 1px solid var(--color-black);
  overflow: hidden;
`;

export const Placeholder = styled.div`
  align-items: center;
  background-image: ${({ $image }) => `url(${$image})`};
  background-position: center;
  background-size: cover;
  display: flex;
  height: 700px;
  justify-content: center;
  width: 100%;
`;

export const GrayBackground = styled.div`
  background-color: var(--color-gray);
  border-bottom: 1px solid var(--color-black);
  padding: 3rem 0;
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  border-bottom: 1px solid var(--color-black);
  color: var(--color-black);
  font-size: var(--font-size-heading-large);
  font-weight: 600;
  line-height: 1;
  margin: 0 0 3rem;
  padding: 1.5rem 0;
  text-transform: uppercase;
`;

export const Projects = styled.div`
  padding: 3rem 0;

  @media (min-width: 800px) {
    column-gap: 3rem;
    display: grid;
    grid-template-columns: var(--grid-columns-three);
    row-gap: 3rem;
  }
`;

export const Project = styled.div`
  min-width: 0;

  a:hover {
    padding-left: 0.25rem;
  }

  p {
    margin-bottom: 0;
  }
`;

export const ProjectImageContainer = styled.a`
  display: block;
  height: 15rem;
  position: relative;
  background-size: cover;
  background-position: center;
`;

export const ProjectTitle = styled.h3`
  border-bottom: 1px solid var(--color-black);
  color: var(--color-black);
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

export const FeaturedProjectTitle = styled(ProjectTitle)`
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
`;

export const About = styled.div`
  @media (min-width: 800px) {
    column-gap: 3rem;
    display: grid;
    grid-template-columns: var(--grid-columns-three);
  }
`;

export const AboutImageContainer = styled.div`
  display: flex;
  background-image: url(/about.png);
  grid-column: 2 / 4;
  min-height: 33rem;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

export const Special = styled.div`
  @media (min-width: 800px) {
    column-gap: 3rem;
    display: grid;
    grid-template-columns: var(--grid-columns-three);
  }
`;

export const SpecialImageContainer = styled.a`
  display: flex;
  grid-column: 1 / 3;
  min-height: 33rem;
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
`;
