"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";

const ReactPlayer = dynamic(() => import("react-player/vimeo"), { ssr: false });

// Player ratio: 100 / (1280 / 720)
const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  opacity: ${({ ready }) => (ready ? 1 : 0)};
  transition: opacity 1000ms linear;
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const ResponsivePlayer = ({ url, controls = false, style = {} }) => {
  const [ready, setReady] = useState(false);

  return (
    <PlayerWrapper ready={ready} style={style}>
      <Player
        controls={controls}
        loop
        muted
        playing
        playsinline
        url={url}
        width="100%"
        height="100%"
        onReady={() => setReady(true)}
      />
    </PlayerWrapper>
  );
};

export default ResponsivePlayer;
