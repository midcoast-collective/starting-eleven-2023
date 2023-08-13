"use client";

import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  box-sizing: border-box;
  margin: auto;
  width: 100%;
  max-width: var(--max-width);
  padding: 0 1.5rem;
`;

export default function WrapComponent({ children }) {
  return <Wrap>{children}</Wrap>;
}
