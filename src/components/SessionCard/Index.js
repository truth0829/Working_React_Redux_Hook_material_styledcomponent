import React from 'react';
import Session from './../../assets/images/sidebar/Session.png';
import {
  SessionCardWraper,
  Icon,
  Title,
  Date,
} from './styles';

const SessionCard = () => {
  return (
    <SessionCardWraper>
      <Icon>
        <img src={Session} />
      </Icon>
      <Title>Join My Next Session</Title>
      <Date>Wednesday, 5/5/2021 11:30 AM</Date>
    </SessionCardWraper>
  );
};
export default SessionCard;
