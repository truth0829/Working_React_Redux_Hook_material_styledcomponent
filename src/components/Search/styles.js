import styled from 'styled-components';

export const Container = styled.div `{
  font-family: Raleway;
  width: 100%;
  height: 50px;
  background: #F6F6F6;
  border: 0.5px solid rgba(202, 208, 223, 0.25);
  box-sizing: border-box;
  position: relative;
  
  box-shadow: 
    inset -2.5px -2.5px 6px 1px #FFFFFF, 
    inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);
  border-radius: 8px;
  &:focus {
    outline: none !important;
  }

  padding: 0px 20px;
  display: flex;
  align-items: center;
}`;

export const Img = styled.img `{
  width: 16px;
  height: 16px;
  margin-right: 12px;
}`;

export const Input = styled.input`{
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  &:focus {
    outline: none !important;
  }

  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  
  color: #333333;
  
  mix-blend-mode: normal;
}`;