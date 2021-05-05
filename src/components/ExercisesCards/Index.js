import React from 'react';
import VideoImg from '../../assets/images/pages/exercises/video_ico.png';
import Worksheet from '../../assets/images/pages/exercises/worksheet_ico.png';
import Svg1 from '../../assets/images/pages/exercises/1.svg';
import Svg2 from '../../assets/images/pages/exercises/2.svg';
import Svg3 from '../../assets/images/pages/exercises/3.svg';
import Svg4 from '../../assets/images/pages/exercises/4.svg';
import Svg5 from '../../assets/images/pages/exercises/5.svg';
import Svg6 from '../../assets/images/pages/exercises/6.svg';

import {
  Container,
  Wrapper,
  Content,
  Text3,
  Box,
  Img,
  Type,
  TypeText,
  LightText,
  BoldText,
  Button,
  Background,
} from './styles';

const ExSheetCard = () => {
  const CardData = [
    {
      text3: 'Assigned on 3/31',
      icon: VideoImg,
      type: 'Video',
      name: 'Worksheet',
      lighttext: 'A CBT Technique',
      boldtext: 'ABC Functional Analysis',
      btnText: 'Watch video',
      bg: Svg1,
    },
    {
      text3: 'Completed on 3/17',
      icon: Worksheet,
      type: '',
      name: 'Worksheet',
      lighttext: 'A Common CBT Rule',
      boldtext: 'Thought Record',
      btnText: 'View/Edit Worksheet',
      bg: Svg2,
    },
    {
      text3: 'Assigned on 3/31',
      icon: VideoImg,
      type: '',
      name: 'Worksheet',
      lighttext: 'A CBT Technique',
      boldtext: 'ABC Functional Analysis',
      btnText: 'Watch video',
      bg: Svg3,
    },
    {
      text3: 'Watched on 3/16',
      icon: VideoImg,
      type: '',
      name: 'Explainer Video',
      lighttext: 'An Advanced CBT Activity',
      boldtext: ' Putting Thoughts on Trial',
      btnText: 'Rewatch video',
      bg: Svg4,
    },
    {
      text3: 'Assigned on 3/31',
      icon: VideoImg,
      type: 'Video',
      name: 'Worksheet',
      lighttext: 'A CBT Technique',
      boldtext: 'ABC Functional Analysis',
      btnText: 'Watch video',
      bg: Svg5,
    },
    {
      text3: 'Assigned on 3/31',
      icon: VideoImg,
      type: 'Video',
      name: 'Worksheet',
      lighttext: 'A CBT Technique',
      boldtext: 'ABC Functional Analysis',
      btnText: 'Watch video',
      bg: Svg6,
    },
  ]
  
  return (
    <Container>
      {CardData.map((item, index) => (
        <Wrapper key={index}>
          <Content>
            <Text3>{item.text3}</Text3>
            <Box>
              <Img src={item.icon} />
              <Type>{item.type}</Type>
              <TypeText>{item.name}</TypeText>
            </Box>
            <LightText>{item.lighttext}</LightText>
            <BoldText>{item.boldtext}</BoldText>
            <Button>{item.btnText}</Button>
          </Content>
          <Background src={item.bg} />
        </Wrapper>
      ))}
    </Container>
  );
};

export default ExSheetCard;
