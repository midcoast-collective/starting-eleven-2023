"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

// Player ratio: 100 / (1280 / 720)
const PlayerWrapper = styled.div`
  height: 0;
  opacity: ${({ $ready }) => ($ready ? 1 : 0)};
  padding-top: 56.25%;
  position: relative;
  transition: opacity 1000ms linear;

  @media (max-width: 800px) {
    padding-top: 177.75%;
  }
`;

const ResponsivePlayer = ({
  desktop,
  mobile,
  controls = false,
  style = {},
}) => {
  const [source, setSource] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function setVideoSource() {
      if (window.innerWidth < 800) {
        setSource(mobile);
      } else {
        setSource(desktop);
      }
    }

    window.addEventListener("resize", setVideoSource);

    setVideoSource();

    return () => window.removeEventListener("resize", setVideoSource);
  }, [desktop, mobile]);

  return (
    <PlayerWrapper $ready={ready} style={style}>
      <ReactPlayer
        controls={controls}
        height="100%"
        loop
        muted
        onReady={() => setReady(true)}
        playing={true}
        playsinline
        url={source}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
      />
    </PlayerWrapper>
  );
};

export default ResponsivePlayer;
