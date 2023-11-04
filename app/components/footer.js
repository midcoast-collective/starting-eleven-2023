"use client";

import styled from "styled-components";

import Nav from "@/app/components/nav";
import Wrap from "@/app/components/wrap";
import InstagramBanner from "@/app/components/instagramBanner";

const Footer = styled.div`
  background-color: white;
  display: flex;
  padding: 1.5rem 0;
  justify-content: space-between;

  a {
    margin-left: 1.5rem;
  }
`;

export default function FooterComponent() {
  const date = new Date();

  return (
    <footer>
      <InstagramBanner />

      <Wrap>
        <Footer>
          <div>
            <p style={{ marginBottom: 0 }}>
              <strong>Setting the standard for soccer storytelling.</strong>
            </p>
            <p style={{ marginBottom: 0 }}>
              <small>
                &copy;{date.getFullYear()} Starting Eleven. All rights reserved.
              </small>
            </p>
          </div>
          <div>
            <Nav />
          </div>
        </Footer>
      </Wrap>
    </footer>
  );
}
