/* eslint-disable @next/next/no-img-element */
"use client";

import styled from "styled-components";

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled.a`
  color: var(--color-dark);
  margin: 0 1rem;
  font-weight: 600;
  text-transform: uppercase;

  &.icon {
    margin: 0 0.5rem;
  }

  &.last {
    margin-right: 0;
  }
`;

export default function NavComponent() {
  return (
    <Nav>
      <StyledLink href="/about">About</StyledLink>
      <StyledLink href="/about#projects">Projects</StyledLink>
      <StyledLink className="last" href="/contact">
        Contact
      </StyledLink>
    </Nav>
  );
}
