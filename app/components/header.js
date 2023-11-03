/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import styled from "styled-components";

import Nav from "./nav";
import InstagramBanner from "./instagramBanner";

const Header = styled.header`
  border-bottom: 1px solid var(--color-dark);
`;

const HeaderWrap = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 1.5rem auto;
  max-width: var(--max-width);
  padding: 0 1.5rem;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const LogoWrap = styled.a`
  display: flex;
  height: 46px;
  position: relative;
  width: 400px;
`;

export default function HeaderComponent() {
  const pathname = usePathname();

  return (
    <Header>
      {pathname !== "/" ? <InstagramBanner /> : null}

      <HeaderWrap>
        <h1 className="sr-only">Starting Eleven</h1>

        <LogoWrap href="/">
          <img alt="Starting Eleven" src="/logo.png" />
        </LogoWrap>

        <Nav />
      </HeaderWrap>
    </Header>
  );
}
