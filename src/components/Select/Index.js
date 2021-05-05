import React from 'react';
import { useState  } from 'react';
import {
  SelectContainer,
  Gender,
  Select,
  Option,
  DropIcon,
} from './styles';

const CommonInput = () => {
  const [isGenderModal, setIsGenderModal] = useState(false);
  const [isGender, setIsGender] = useState(true);
  const handleGender = () => {
    setIsGenderModal(true);
  }
  const handleFemale = () => {
    setIsGender(true);
    setIsGenderModal(false);
  }
  const handleMale = () => {
    setIsGender(false);
    setIsGenderModal(false);
  }
  return (
    <SelectContainer>
      <Gender onClick={handleGender}>{isGender?'Female':'Male'}</Gender>
      {isGenderModal?
        <Select>
          <Option onClick={handleFemale}>Female</Option>
          <Option onClick={handleMale}>Male</Option>
        </Select>
      :""}
      <DropIcon onClick={handleGender}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="5" width="12" height="8">
            <path d="M8.62538 12.1945C8.8273 12.4131 9.1727 12.4131 9.37462 12.1945L14.4446 6.70607C14.7463 6.37942 14.5147 5.85001 14.07 5.85001H3.93004C3.48535 5.85001 3.25367 6.37942 3.55542 6.70607L8.62538 12.1945Z" fill="black"/>
          </mask>
          <g mask="url(#mask0)">
            <rect x="18" width="18" height="18" transform="rotate(90 18 0)" fill="#333333"/>
          </g>
        </svg>
      </DropIcon>
    </SelectContainer>
  );
};

export default CommonInput;
