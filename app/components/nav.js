"use client";

import styled from "styled-components";

const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 800px) {
    justify-content: space-around;
    padding: 0.75rem 0;
  }
`;

const StyledLink = styled.a`
  color: var(--color-black);
  margin: 0 1rem;
  font-weight: 600;
  font-size: var(--font-size-strong);

  &.icon {
    margin: 0 0.5rem;
  }

  &.last {
    @media (min-width: 800px) {
      margin-right: 0;
    }
  }
`;

export default function NavComponent() {
  return (
    <Nav>
      <StyledLink href="/#about">About</StyledLink>
      <StyledLink href="/#projects">Projects</StyledLink>
      <StyledLink className="last" href="/contact">
        Contact
      </StyledLink>
    </Nav>
  );
}
