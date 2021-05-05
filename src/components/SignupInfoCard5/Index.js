import React from 'react';
import { useState } from 'react';
import { Input } from '../Input/styles';
import Select from '../Select/Index';
import UserImg from '../../assets/images/signup/user.png';
import ProfileImg from '../../assets/images/signup/profile.png';
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
  PhotoWrapper,
  PhotoText,
  Photo,
  InputGroup,
  UploadButton,
  InputWrapper,
  Name,
  NameTitle,
  DPCon,
  ButtonGroup,
  Button,
  BackBox,
  BackIcon,
  BackText,
  CardContainer,
  CardT,
  Card,
  RCT,
  RCText,
  RCTitle,
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
      name: 'Stages of Change'
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
  
  return (
    <Container>
      <BackBox>
        <BackIcon src={BackImg}/>
        <BackText>Back</BackText>
      </BackBox>
      <Slider value={100} />
      <StepBox>
        {StepData.map((item, ind) => (
          <Step key={ind}>
            <StepIcon className={ind==4?"active":""}></StepIcon>
            <StepTitle className="active">{item.name}</StepTitle>
          </Step>
        ))}
      </StepBox>
      <MainBody>
        <PhotoWrapper>
          <PhotoText>Please upload a profile picture</PhotoText>
          <Photo src={ProfileImg}></Photo>
          <UploadButton>Upload Photo</UploadButton>
        </PhotoWrapper>
        <InputWrapper>
          <InputGroup>
            <Name>
              <NameTitle>First Name</NameTitle>
              <Input value="Aparna" disabled />
            </Name>
            <Name>
              <NameTitle>Last Name</NameTitle>
              <Input value="Atluru" disabled />
            </Name>
          </InputGroup>
          <InputGroup>
            <Name className="flex">
              <DPCon>
                <NameTitle>Date of Birth</NameTitle>
                <Input placeholder="mm/dd/yyyy" />
              </DPCon>
              <DPCon>
                <NameTitle>Phone Number</NameTitle>
                <Input value="(982) 837-3729" disabled />
              </DPCon>
            </Name>
            <Name>
              <NameTitle>Email</NameTitle>
              <Input value="aparna@hospital.com" disabled />
            </Name>
          </InputGroup>
          <InputGroup>
            <Name>
              <NameTitle>Race</NameTitle>
              <Input value="Text" disabled />
            </Name>
            <Name>
              <NameTitle>Gender</NameTitle>
              <Select placeholder="Text Input" />
            </Name>
          </InputGroup>
        </InputWrapper>
      </MainBody>
      <CardT>CNIP Therapy Preferences (Click to record your preferences)</CardT>
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
      <ButtonGroup>
        <Button>Save & Continue Later</Button>
        <Button className="active">Next: Therapy Preferences</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SignupInfoCard;
