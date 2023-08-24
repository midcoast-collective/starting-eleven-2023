"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

import ResponsivePlayer from "./components/responsivePlayer";

const IntroWrap = styled.div`
  background-color: black;
  border-bottom: 1px solid var(--color-dark);
  overflow: hidden;
`;

export default function HomePage() {
  const [video, setVideo] = useState();

  useEffect(() => {
    function setVideoSource() {
      if (window.innerWidth < 800) {
        setVideo("https://vimeo.com/857607311");
      } else {
        setVideo("https://vimeo.com/854736625");
      }
    }

    window.addEventListener("resize", setVideoSource);

    setVideoSource();

    return () => window.removeEventListener("resize", setVideoSource);
  }, []);

  return (
    <main>
      <IntroWrap>
        <ResponsivePlayer url={video} />
      </IntroWrap>
    </main>
  );
}
