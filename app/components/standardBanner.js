"use client";

import styled from "styled-components";

const Banner = styled.div`
  background-color: var(--color-black);
  padding: 1rem 0 1rem;
`;

const BannerWrap = styled.div`
  align-items: center;
  color: var(--color-white);
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  justify-content: center;
  text-align: right;
  text-transform: uppercase;
  width: 100%;

  svg {
    fill: var(--color-white);
    margin-left: 0.5rem;
    margin-bottom: 0.05rem;
    width: var(--font-size-heading-large);
    height: var(--font-size-heading-large);
  }

  @media (max-width: 800px) {
    font-size: 0.75rem;
  }
`;

export default function StandardBanner() {
  return (
    <Banner>
      <BannerWrap>Setting the standard for soccer storytelling</BannerWrap>
    </Banner>
  );
}
