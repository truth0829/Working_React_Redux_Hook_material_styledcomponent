import React from 'react';
import { Button } from '../Button/styles';
import IntroImage1 from './../../assets/images/intro1.png';
import IntroImage2 from './../../assets/images/intro2.png';
import IntroImage3 from './../../assets/images/intro3.png';
import PlayIcon from './../../assets/images/play.png';
import {
  IntroCardWrapper,
  IntroTitle,
  OuterWrapper,
  IntroVideoWrapper,
  InnerWrapper,
  IntroPara,
  Box,
} from './styles';

const cardData = [
  {
    name: 'image1',
    image: IntroImage1,
  },
  {
    name: 'image2',
    image: IntroImage2,
  },
  {
    name: 'image3',
    image: IntroImage3,
  },
];

const IntroCard = ({ title }) => {
  return (
    <IntroCardWrapper>
      <IntroTitle>{title}</IntroTitle>
      <OuterWrapper>
        {cardData.map((item, ind) => (
          <IntroVideoWrapper key={ind}>
            <InnerWrapper>
              <img src={item.image} alt="intro img" />
              <Button shape="rounded">
                <img src={PlayIcon} alt="play icon" />
              </Button>
            </InnerWrapper>
          </IntroVideoWrapper>
        ))}
      </OuterWrapper>
      <IntroTitle>Languages</IntroTitle>
      <IntroPara>English, Russian, Spanish</IntroPara>
      <IntroTitle>Therapy Types</IntroTitle>
      <IntroPara>CBT, TF-CBT</IntroPara>
      <IntroTitle>States Licensed In</IntroTitle>
      <IntroPara>California, Nevada</IntroPara>
      <Box>
        <Button className="custom__styles" shape="default">
          Change Therapist
        </Button>
      </Box>
    </IntroCardWrapper>
  );
};
export default IntroCard;
