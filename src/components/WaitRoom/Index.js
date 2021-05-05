import React from 'react';
import ChatImg from '../../assets/images/waitingroom/chat.png'
import PreIcon from '../../assets/images/waitingroom/pre.png'
import ExertIcon from '../../assets/images/waitingroom/exer.png'
import NextIcon from '../../assets/images/waitingroom/next.png'
import { 
  FlexContainer,
  Flex,
  Img,
  ButtonGroup,
  LgButton,
  BDesription,
  Icon,
  ReviewHref,
  SmButton,
  NormalButton,
} from './styles';
import { Button } from '../SignupInfoCard2/styles';

const WaitRoom = () => {
  const ButtonData = [
    {
      icon: PreIcon,
      name: 'Pre-session Survey Completed',
      review: 'Review Survey',
    },
    {
      icon: ExertIcon,
      name: 'Exercise Completed',
      review: 'Review Exercise',
    }
  ]
  return (
    <FlexContainer>
      <Flex>
        <Img src={ChatImg} />
        <ButtonGroup>
          {ButtonData.map((items, index) => (
            <LgButton key={index}>
              <BDesription>
                <Icon src={items.icon}></Icon>
                {items.name}
              </BDesription>
              <ReviewHref>{items.review}</ReviewHref>
            </LgButton>
          ))}
          <SmButton>Make a Test Call</SmButton>
        </ButtonGroup>
      </Flex>
      <NormalButton>
        Begin Marvin Session
        <img src={NextIcon} />
      </NormalButton>
    </FlexContainer>
  );
};

export default WaitRoom;
