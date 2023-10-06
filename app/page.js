"use client";

import styled from "styled-components";

import ResponsivePlayer from "./components/responsivePlayer";

const IntroWrap = styled.div`
  background-color: black;
  border-bottom: 1px solid var(--color-dark);
  overflow: hidden;
`;

export default function HomePage() {
  return (
    <main>
      <IntroWrap>
        <ResponsivePlayer
          desktop="https://vimeo.com/854736625"
          mobile="https://vimeo.com/857607311"
        />
      </IntroWrap>
    </main>
  );
}
