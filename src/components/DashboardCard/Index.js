import React from 'react';
import CalendarIcon from '../../assets/images/components/dashboard/cal.png';
import TherapistIcon from '../../assets/images/components/dashboard/therapist.png';
import PhotoIcon from '../../assets/images/components/dashboard/photo.png';

import {
  Container,
  CardWrapper,
  TitleContainer,
  Icon,
  Title,
  InnerCard,
  Current,
  Date,
  Strong,
  Time,
  Button,
  Photo,
  ButtonView,
  TextGroup,
  LightText,
} from './styles';

const DashboardsCard = () => {
  return (
    <Container>
      <CardWrapper>
        <TitleContainer>
          <Icon src={CalendarIcon} />
          <Title>My Next Marvin Session</Title>
        </TitleContainer>
        <InnerCard>
          <Current>Today</Current>
          <Date>
            <Strong>Wednesday, March 17, 2021</Strong>
            <Time>10:30 AM</Time>
            <Button>Join Session</Button>
          </Date>
        </InnerCard>
      </CardWrapper>
      <CardWrapper className="second">
        <TitleContainer>
          <Icon src={TherapistIcon} />
          <Title>My Marvin Therapist</Title>
        </TitleContainer>
        <InnerCard className="second">
          <Photo src={PhotoIcon} />
          <TextGroup>
            <Strong>Evan Smith, PhD</Strong>
            <LightText>Psychologist</LightText>
          </TextGroup>
          <ButtonView>View Details</ButtonView>
        </InnerCard>
      </CardWrapper>
    </Container>
  );
};

export default DashboardsCard;
