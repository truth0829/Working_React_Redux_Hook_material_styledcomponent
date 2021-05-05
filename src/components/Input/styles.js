import styled, { css } from 'styled-components';

export const Input = styled.input`
  font-family: Raleway;
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  background: #F6F6F6;
  border: 0.5px solid rgba(202, 208, 223, 0.25);
  box-sizing: border-box;
  
  box-shadow: 
    inset -2.5px -2.5px 6px 1px #FFFFFF, 
    inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);
  border-radius: 8px;
  &:focus {
    outline: none !important;
  }
`;
