import React from 'react';
import { Input } from '../Input/styles';
import Select from '../Select/Index';
import UserImg from '../../assets/images/signup/user.png';
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
  
  return (
    <Container>
      <Slider value={1.5} />
      <StepBox>
        {StepData.map((item, ind) => (
          <Step key={ind}>
            <StepIcon className={ind==0?"active":""}></StepIcon>
            <StepTitle className={ind==0?"active":""}>{item.name}</StepTitle>
          </Step>
        ))}
      </StepBox>
      <MainBody>
        <PhotoWrapper>
          <PhotoText>Please upload a profile picture</PhotoText>
          <Photo src={UserImg}></Photo>
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
      <ButtonGroup>
        <Button>Save & Continue Later</Button>
        <Button className="active">Next: Therapy Preferences</Button>
      </ButtonGroup>
    </Container>
  );
};

export default SignupInfoCard;
