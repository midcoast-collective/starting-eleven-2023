"use client";

import styled from "styled-components";

export const Title = styled.h1`
  font-size: var(--font-size-heading-large);
  padding-bottom: 0.75rem;
  text-transform: uppercase;
`;

export const Locations = styled.div`
  display: flex;
  padding: 1.5rem 0 3rem;

  div + div {
    margin-left: 6rem;
  }

  a:hover {
    padding-left: 0.25rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    div + div {
      margin-left: 0;
      margin-top: 1.5rem;
    }
  }
`;
