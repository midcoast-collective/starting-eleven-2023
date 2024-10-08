/* eslint-disable @next/next/no-img-element */

"use client";

import styled from "styled-components";
import Wrap from "@/app/components/wrap";
import LaAboutCompany from "@/app/components/studio/about";
import LaBookCard from "@/app/components/studio/bookCard";
import LaIncludedBooking from "@/app/components/studio/includedBooking";
import LaLocation from "@/app/components/studio/location";
import LaCarousel from "@/app/components/studio/carousel";
import LaHealth from "@/app/components/studio/healthSafety";
import LaReviewComponent from "@/app/components/studio/review";
import LaMobileHero from "@/app/components/studio/mobileHero";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import LaBookMobile from "@/app/components/studio/bookMobile";
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CropIcon from '@mui/icons-material/Crop';


export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 0 5px;
  margin-top: 2rem;
  @media (min-width: 1100px) {
    padding: 0 10em;
  }
     @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin-top:4rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex,
  flexDirection: column;
`;

export const LocationContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Title = styled.h2`
  font-size: 1.9em;
  margin: 0;
  font-weight: 700;
  color: var(--color-black);
`;

export const Location = styled.p`
  font-size: 1em;
  color: #6a6e7a;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: var(--color-black);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap:10px;
  justify-content: flex-end;
   @media (max-width: 768px) {
    display:none;
  }
`;

export const Button = styled.p`
  color: var(--color-black);
  cursor: pointer;
  margin-left: 10px;
  display:flex;
  font-weight: 600;
  &:hover {
    color: #6a6e7a;
  }
`;

export const ImageContainer = styled.div`
  padding: 0 5px;

  @media (min-width: 1100px) {
    padding: 0 10em;
  }
    @media (max-width: 768px) {
    display:none;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    "imgOne imgTwo imgThree"
    "imgOne imgFive imgSix";
  grid-template-columns: 60% 20% 20%;

  & > :first-child {
    grid-area: imgOne;
    height: 400px;
  }
  & > :last-child {
    pointer-events: none;
    position: relative;
  }
`;

export const ImageItem = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    filter: brightness(0.7);
  }
`;
export const ViewAllText = styled.span`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  pointer-events: none;
  filter: brightness(3);
`;
export const ViewAllImage = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  height: 35px;
  text-align: center;
  pointer-events: none;
  filter: brightness(3);
`;
export const RatingContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(7, 1fr); 
  width:min-content;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    grid-template-rows: repeat(2, auto); 
    width:auto;
  }
`;

export const RatingItem = styled.p`
  font-size: 1.1em;
  color: var(--color-black);
 width:max-content;
`;

export const RatingDot = styled.span`
  margin: 0 15px;
  width: fit-content;
  width:max-content; 
   @media (max-width: 768px) {
   display:none;
}
`;


export const HR = styled.hr`
  margin: 10px 0;
  border: none;
  border-top: 1.5px solid #d1d3db;
  width: 100%;
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 2em 5px;

  @media (min-width: 1100px) {
    grid-template-columns: 70% 30%;
  }
    @media (min-width: 900px) and (max-width: 1100px) {
    grid-template-columns: 60% 40%;
  }
  @media (min-width: 1100px) {
    padding: 2em 10em;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const MessageTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MessageName = styled.p`
  color: #6a6e7a;
  margin: 0;
  line-height: 1;
`;

export const MessageImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 900px) {
    width: 90px;
    height: 90px;
  }
`;
export const MessageDiv = styled.div`
    display:flex;
    @media (max-width: 900px) {
    justify-content: center;  
    }
}
`;
export const MessageButton = styled.button`
  border: 1px solid #d1d3db;;
  color: var(--color-black);
  background: transparent;
  padding: 13px 15px;
  font-size: 0.9em;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #121212;
    background-color: #e6e6e6;
    border-color: #afb2c0;
}

}
`;
export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  gap:20px;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index:1000;
  @media (min-width: 768px) {
    display: none;  
    }
`;

export const SaveButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight:bold;

  &:before {
    content: '♡';
    margin-right: 4px;
    font-weight:bold;
     font-size: 30px;
  }
`;

export const BookButton = styled.button`
  width: 100%;
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 10px 10px;
  border: none;
  font-size: 1.2rem;
`;

import React from "react";

function LaStudio() {
  const images = [
    { id: 1, src: "/project/apple-tv-breakaway/episodes/1.png" },
    { id: 2, src: "/project/apple-tv-breakaway/episodes/2.png" },
    { id: 3, src: "/project/apple-tv-breakaway/episodes/3.png" },
    { id: 4, src: "/project/apple-tv-breakaway/episodes/4.png" },
    { id: 5, src: "/project/apple-tv-breakaway/episodes/7.png" },
  ];
  return (
    <div>
    <LaMobileHero />
      {/* <Wrap> */}
        <GridContainer>
          <TitleContainer>
            <Title>
              Venice Beach - Cyc-wall, Loft w/ Skylight, Recording Booth, Green
              Room and more.
            </Title>
            <LocationContainer>
              <Location>Venice, </Location>
              <Location>Los Angeles, CA </Location>
            </LocationContainer>
          </TitleContainer>

          <ButtonsContainer>
            <Button><FavoriteBorderIcon style={{fontSize:"20px"}}/> Share</Button>
            <Button><IosShareIcon style={{fontSize:"20px"}}/>Save</Button>
          </ButtonsContainer>
        </GridContainer>

        <ImageContainer>
          <ImageGrid>
            {images.map((image, id) =>
              id === images.length - 1 ? (
                <div key={id}>
                  <ImageItem style={{filter: "brightness(0.4)"}} src={image.src} />
                  <ViewAllImage src={"/features/skylight.svg"}/>
                  <ViewAllText>View All</ViewAllText>
                </div>
              ) : (
                <ImageItem key={id} src={image.src} />
              )
            )}
          </ImageGrid>
        </ImageContainer>

        {/* about space */}
        <AboutContainer>
          <TitleContainer>
            <RatingContainer>
              <div style={{display:"flex"}}>
              <StarIcon style={{ marginRight: "4px", fontSize:"22px" }} /> 
              <RatingItem style={{ textDecoration: "underline" }}>
              5.0 (1)
              </RatingItem></div>
              <RatingDot>•</RatingDot>
              <div style={{display:"flex"}}>
              <PersonIcon style={{ marginRight: "4px", fontSize:"22px" }} /> 
              <RatingItem>100 people</RatingItem>
              </div>
              <RatingDot>•</RatingDot>
              <div style={{display:"flex"}}>
              <AccessTimeFilledIcon style={{ marginRight: "4px", fontSize:"22px" }} /> 
              <RatingItem>4 hr min</RatingItem>
              </div>
              <RatingDot>•</RatingDot>
              <div style={{display:"flex"}}>
              <CropIcon style={{ marginRight: "4px", fontSize:"22px" }} /> 
              <RatingItem>2159 sqft</RatingItem>
              </div>
            </RatingContainer>

          <LaBookMobile />
            <HR></HR>

            <MessageContainer>
              <MessageTitle>
                <MessageImage src={images[0].src}></MessageImage>
                <MessageName>Hosted by Devin L.</MessageName>
              </MessageTitle>
              <MessageDiv>
              <MessageButton>Message Host</MessageButton>
              </MessageDiv>
            </MessageContainer>
            <HR></HR>
            <LaAboutCompany />
            <LaIncludedBooking />
            <LaLocation />
            <LaHealth />
            <HR></HR>
            <LaReviewComponent />
          </TitleContainer>
          <LaBookCard />
        </AboutContainer>
      {/* </Wrap> */}
      <LaCarousel />
      <Container>
      <SaveButton>Save</SaveButton>
      <BookButton>Book Now</BookButton>
    </Container>
    </div>
  );
}

export default LaStudio;
