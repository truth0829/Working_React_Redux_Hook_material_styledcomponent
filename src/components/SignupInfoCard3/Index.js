import React from 'react';
import Select from '../Select/Index';
import BackImg from '../../assets/images/signup/Arrow.png';
import FocusedImg from '../../assets/images/signup/Focused_Icon.png';
import MarvinImg from '../../assets/images/signup/Marvin.png';
import GroupImg from '../../assets/images/signup/Group.png';
import WarmImg from '../../assets/images/signup/Warm.png';
import Slider from '../Slider/Index';

import {
  Container,
  StepBox,
  Step,
  StepIcon,
  StepTitle,
  MainBody,
  IGroup,
  InputWrapper,
  MultiGroup,
  GenderGroup,
  NameTitle,
  ButtonGroup,
  Button,
  BackBox,
  BackIcon,
  BackText,
  Wrapper,
  CardContainer,
  CardT,
  Card,
  RCT,
  RCText,
  RCTitle,
  ChoseItem,

  STitle,
  MethodWrapper,
  IButton,
  Text1,
  Text2,
  MutiIn,
  Span,
} from './styles';

const SignupInfoCard = () => {
  const StepData = [
    {
      name: 'Profile'
    },
    {
      name: 'Therapy Preferences'
    },
    {
      name: 'Sessions'
    },
    {
      name: 'Review Profile'
    },
  ]

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

  const MethodData = [
    {
      text1: 'Precontemplation',
      text2: 'No intention on changing behavior.',
    },
    {
      text1: 'Contemplation',
      text2: 'Aware a problem exists but no commitment to action.',
    },
    {
      text1: 'Preparation',
      text2: 'Intent on taking action to address the problem.',
    },
    {
      text1: 'Action',
      text2: 'Active modification of behavior.',
    },
    {
      text1: 'Maintanence',
      text2: 'Sustained change; new behavior replaces old.',
    },
  ]
  
  return (
    <Container>
      <BackBox>
        <BackIcon src={BackImg}/>
        <BackText>Back</BackText>
      </BackBox>
      <Slider value={34 }/>
      <StepBox>
        {StepData.map((item, ind) => (
          <Step key={ind}>
            <StepIcon className={ind==1?"active":""}></StepIcon>
            <StepTitle className={ind==0||ind==1?"active":""}>{item.name}</StepTitle>
          </Step>
        ))}
      </StepBox>
      <Wrapper>
        <CardT>CNIP Therapy Preferences (Click to customize)</CardT>
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
        <MainBody>
          <STitle>Stages of Change</STitle>
          <IGroup>
            {MethodData.map((item, index) => (
              <MethodWrapper key={index}>
                <Text1>{item.text1}</Text1>
                <Text2>{item.text2}</Text2>
              </MethodWrapper>
            ))}
          </IGroup>
          <IGroup></IGroup>
          <IButton>Find out what stage i’m at</IButton>
          <InputWrapper>
            <IGroup>
              <MultiGroup>
                <NameTitle>Therapist Expertise (enter up to three)</NameTitle>
                <MutiIn>
                  <ChoseItem>Anxiety<Span>&times;</Span></ChoseItem>
                  <ChoseItem>Depression<Span>&times;</Span></ChoseItem>
                </MutiIn>
              </MultiGroup>
              <GenderGroup>
                <NameTitle>Therapist Gender Preference</NameTitle>
                <Select />
              </GenderGroup>
            </IGroup>
          </InputWrapper>
        </MainBody>
      </Wrapper>
      <ButtonGroup>
        <Button>Save & Continue Later</Button>
        <Button className="active">Next: Therapy Preferences</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SignupInfoCard;
