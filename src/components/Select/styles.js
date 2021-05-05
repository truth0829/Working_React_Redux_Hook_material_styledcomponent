import styled from 'styled-components';

export const SelectContainer = styled.div `{
  font-family: Raleway;
  width: 100%;
  height: 50px;
  background: #F6F6F6;
  border: 0.5px solid rgba(202, 208, 223, 0.25);
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  
  box-shadow: 
    inset -2.5px -2.5px 6px 1px #FFFFFF, 
    inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);

  border-radius: 8px;
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  
  color: #333333;
}`;

export const Gender = styled.div`{
  margin-left: 20px;
  height: -webkit-fill-available;
  display: flex;
  align-items: center;
}`;

export const Select = styled.div`
  width: 100%;
  display: flex;
  background-color: #fff;
  box-shadow: 1px 0px 5px 1px #dadada;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 55px
`;

export const Option = styled.div`
  width: 90%;
  height: 45px;
  display: flex;
  align-items: center;
  padding-left: 10%;
  border-radius: 5px;

  &:hover {
    background-color: #dadada;
  }
`;

export const DropIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 20px
`;
