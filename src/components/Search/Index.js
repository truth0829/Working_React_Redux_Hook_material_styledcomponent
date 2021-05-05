import React from 'react';
import SearchIcon from '../../assets/images/pages/exercises/Search.png';
import {
  Container,
  Input,
  Img,
} from './styles';

const CommonInput = () => {
  return (
    <Container>
      <Img src={SearchIcon} />
      <Input placeholder="Search" />
    </Container>
  );
};

export default CommonInput;
