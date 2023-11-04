"use client";

import { useState } from "react";
import styled from "styled-components";
import Button from "@restart/ui/Button";
import Modal from "@restart/ui/Modal";

import ResponsivePlayer from "./responsivePlayer";
import * as Page from "@/app/components/page";

export const PlayButton = styled.div`
  color: var(--color-white);
  cursor: pointer;
  font-size: 80px;
  text-shadow: 0 0 18px black;
  transition: all 300ms;

  &:hover {
    color: var(--color-green);
  }
`;

export const StyledModal = styled(Modal)`
  outline: 0;
  border: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 80vh;
  max-width: 80vw;
  width: 100vw;
`;

export const ModalClose = styled(Button)`
  color: var(--color-white);
  cursor: pointer;
  font-size: 2rem;
  font-weight: 100;
  line-height: 1;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 9;
  transition: all 300ms;

  &:hover {
    color: var(--color-green);
  }
`;

export const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export default function ImageWithVideoModalComponent() {
  const [modalState, setModalState] = useState({ about: false });

  return (
    <>
      <Page.Placeholder $image="/aboutpage.png">
        <PlayButton
          onClick={() =>
            setModalState((modalState) => ({ ...modalState, about: true }))
          }
        >
          &#9658;
        </PlayButton>
      </Page.Placeholder>

      <StyledModal
        show={modalState.about}
        onHide={() =>
          setModalState((modalState) => ({ ...modalState, about: false }))
        }
        renderBackdrop={(props) => <StyledBackdrop {...props} />}
      >
        <div>
          <ModalClose
            as="span"
            onClick={() =>
              setModalState((modalState) => ({ ...modalState, about: false }))
            }
          >
            &times;
          </ModalClose>
          <ResponsivePlayer
            desktop="https://vimeo.com/854736625"
            mobile="https://vimeo.com/854736625"
          />
        </div>
      </StyledModal>
    </>
  );
}
