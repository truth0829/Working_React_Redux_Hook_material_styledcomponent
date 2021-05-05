import React, { useState } from 'react';
import BackImg from '../../assets/images/signup/Arrow.png';
import Chips, { Chip } from 'react-chips';
import CalendarCom from '../Calendar/Index';
import Slider from '../Slider/Index';

import {
  Container,
  StepBox,
  Step,
  StepIcon,
  StepTitle,
  MainBody,
  InputWrapper,
  MultiGroup,
  NameTitle,
  ButtonGroup,
  Button,
  BackBox,
  BackIcon,
  BackText,
  Wrapper,
  ChoseItem,

  STitle,
  MutiIn,
  Span,
  TextArea,
  InputData,
  Pointer,
} from './styles';

const SignupInfoCard = () => {
  const [ischip, setIschip] = useState([]);
  const onChipChange = (ischip) => {
    setIschip(ischip);
  }
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

  const CustomClass = {
    chips__ : {
      background: 'red'
    }
  }
  
  return (
    <Container>
      <BackBox>
        <BackIcon src={BackImg}/>
        <BackText>Back</BackText>
      </BackBox>
      <Slider value={68} />
      <StepBox>
        {StepData.map((item, ind) => (
          <Step key={ind}>
            <StepIcon className={ind==2?"active":""}></StepIcon>
            <StepTitle className={ind==0||ind==1||ind==2?"active":""}>{item.name}</StepTitle>
          </Step>
        ))}
      </StepBox>
      <STitle>Schedule your First Appointments</STitle>
      <InputData value="Select Data" disabled />
      <Wrapper>  
        <MainBody>
          <CalendarCom />
        </MainBody>
        <MainBody>
          <InputWrapper>
            <MultiGroup>
              <NameTitle>Discussion Topics for Sessions (enter up to three)</NameTitle>
                <Chips
                  className={CustomClass.chips__}
                  value={ischip}
                  onChange={onChipChange}
                  suggestions={["Anxiety1", "Depression1", "Anxiety2", "Depression2","Anxiety3", "Depression3","Anxiety4", "Depression4","Anxiet5", "Depression5","Anxiety6", "Depression6"]}
                >
                  <MutiIn>
                  </MutiIn>
                </Chips>
                {/* <MutiIn>
                  <ChoseItem>Anxiety<Span>&times;</Span></ChoseItem>
                  <ChoseItem>Depression<Span>&times;</Span></ChoseItem>
                </MutiIn> */}
            </MultiGroup>
            <MultiGroup>
              <NameTitle>Therapist Gender Preference</NameTitle>
              <TextArea placeholder="Would you like to describe reason(s) for your session further?" />
              <Pointer>0/30</Pointer>
            </MultiGroup>
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
