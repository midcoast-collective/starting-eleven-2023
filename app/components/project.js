"use client";

import styled from "styled-components";

export const ContentSection = styled.section`
  padding: 3rem 0;
`;

export const ProjectTitle = styled.h1`
  font-size: var(--font-size-heading-large);
  font-weight: 600;
  line-height: 1;
  padding: 3rem 0;
  text-align: center;
  text-transform: uppercase;

  span {
    font-weight: 100;
  }
`;

export const ProjectSection = styled.div`
  padding: 1.5rem 0;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: var(--grid-columns-three);
    column-gap: 3rem;
  }

  p {
    grid-column: 2 / 4;
  }
`;

export const ProjectSectionTitle = styled.h2`
  border-bottom: 0;
  border-top: 0;
  color: var(--color-black);
  font-size: var(--font-size-heading-subtitle);
  font-weight: 600;
  grid-column: 1 / 2;
  line-height: 1.5rem;
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
  text-align: ${({ $align }) => $align ?? "right"};
  text-transform: uppercase;

  @media (max-width: 800px) {
    text-align: left;
  }
`;

export const QuoteSection = styled.section`
  padding: 1.5rem 1.5rem 3rem;

  p {
    font-size: 1rem;
    max-width: 50rem;
    line-height: 2rem;
    margin: 0 auto 1.5rem;
    text-align: left;
  }

  p.author {
    text-align: right;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
