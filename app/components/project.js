"use client";

import styled from "styled-components";

export const Gallery = styled.section`
  --swiper-theme-color: var(--color-light);
  --swiper-navigation-size: 1.5rem;
  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.2);
  --swiper-scrollbar-drag-bg-color: var(--color-dark);
  --swiper-scrollbar-bottom: -1rem;

  .swiper {
    overflow: visible;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentSection = styled.section`
  padding: 3rem 0;
`;

export const ProjectTitle = styled.h1`
  font-size: var(--font-size-heading-large);
  font-weight: 600;
  line-height: 1;
  padding: 3rem 0;
  text-align: center;
`;

export const ProjectSection = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: var(--grid-columns-three);
  column-gap: 3rem;

  p {
    grid-column: 2 / 4;
  }
`;

export const ProjectSectionTitle = styled.h2`
  border-bottom: 0;
  border-top: 0;
  color: var(--color-dark);
  font-size: var(--font-size-heading-subtitle);
  font-weight: 600;
  line-height: 1.5rem;
  margin: 0 0 0.75rem;
  padding: 0 0 0.75rem;
  text-align: right;
  text-transform: uppercase;
`;

export const QuoteSection = styled.section`
  padding: 1.5rem 0 3rem;

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
`;
