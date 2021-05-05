import React from 'react';
import Select from '../Select/Index';
import BackImg from '../../assets/images/signup/Arrow.png'
import FocusedImg from '../../assets/images/signup/Focused_Icon.png'
import MarvinImg from '../../assets/images/signup/Marvin.png'
import GroupImg from '../../assets/images/signup/Group.png'
import WarmImg from '../../assets/images/signup/Warm.png'

import {
  Container,
  Title,
  CardContainer,
  CardT,
  Card,
  RCT,
  RCText,
  RCTitle,
} from './styles';

const SignupInfoCard = () => {

  const CardData = [
    {
      icon: MarvinImg,
      text: 'No Preference Saved',
      title1: 'Therapist directs sessions',
      title2: 'Vs. Client direction',
    },
    {
      icon: GroupImg,
      text: 'No Preference Saved',
      title1: 'Emotional Intensity',
      title2: 'Vs. Emotionally Reserved',
    },
    {
      icon: FocusedImg,
      text: 'No Preference Saved',
      title1: 'Focused on The past',
      title2: 'Vs. The present',
    },
    {
      icon: WarmImg,
      text: 'No Preference Saved',
      title1: 'Provide warm support',
      title2: 'Vs. A focused challenge',
    },
  ]
  
  return (
    <Container>
      <Title>Therapy Preferences</Title>
      <CardT>Click to update answers</CardT>
        <CardContainer>
          {CardData.map((item, ind) => (
            <Card key={ind} className={'color'+ind}>
              <RCT>
                <img src={item.icon} />
                <RCText>{item.text}</RCText>
              </RCT>
              <RCTitle>{item.title1}</RCTitle>
              <RCTitle>{item.title2}</RCTitle>
            </Card>
          ))}
        </CardContainer>
    </Container>
  );
};

export default SignupInfoCard;
