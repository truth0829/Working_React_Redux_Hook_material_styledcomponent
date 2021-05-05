import React from 'react';
import Logo from '../../assets/images/exsheet/logo.png';
import Pink from '../../assets/images/exsheet/pink.png';
import Blue  from '../../assets/images/exsheet/blue.png';
import Purple from '../../assets/images/exsheet/purple.png';
import Iconwork from '../../assets/images/exsheet/worksheet_ico.png';
import Iconvideo from '../../assets/images/exsheet/video_ico.png';

import {
  Container,
  HeaderWrapper,
  TitleBox,
  LogoIcon,
  LogoTitle,
  CardWrapper,
  ViewButton,
  CardBox,CardTitleBox,
  CardTitle,
  CardDes,
  CardButton,
  CardImg,
} from './styles';

const ExSheetCard = () => {
  const CardData = [
    {
      logo: Iconwork,
      name: 'Worksheet',
      description: 'ABC Functional Analysis',
      buttonname: 'Complete Worksheet',
      image: Pink,
    },
    {
      logo: Iconvideo,
      name: 'Worksheet',
      description: 'Playing the scrip until the end',
      buttonname: 'View Video',
      image: Blue,
    },
    {
      logo: Iconwork,
      name: 'Video',
      description: 'Writing Self-Statements To Counteract Negative Thoughts',
      buttonname: 'View/Edit Worksheet',
      image: Purple,
    },
  ]
  
  return (
    <Container>
    <HeaderWrapper>
      <TitleBox>
        <LogoIcon src={Logo}></LogoIcon>
        <LogoTitle>My Exercises</LogoTitle>
      </TitleBox>
      <ViewButton>View More</ViewButton>
    </HeaderWrapper>
    {CardData.map((item, index) => (
      <CardWrapper key={index}>
        <CardImg src={item.image}></CardImg>
        <CardBox>
          <CardTitleBox>
            <img src={item.logo} />
            <CardTitle>{item.name}</CardTitle>
          </CardTitleBox>
          <CardDes>{item.description}</CardDes>
          <CardButton>{item.buttonname}</CardButton>
        </CardBox>
      </CardWrapper>
    ))}
    </Container>
  );
};

export default ExSheetCard;
