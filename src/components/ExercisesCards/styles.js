import styled, { css } from 'styled-components';

export const Container = styled.div`{
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}`;

export const Wrapper = styled.div`{
  width: 290px;
  height: 408px;
  border-radius: 16px;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -7px -7px 14px #FFFFFF, 5px 5px 25px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  position: relative;
  margin: 20px;
}`;

export const Content = styled.div`{
  padding: 30px 40px;
}`;

export const Text3 = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  color: #333333;
}`;

export const Box = styled.div`{
  display: flex;
  align-items: center;
  margin-top: 16px;
}`;

export const Img = styled.img`{
  width: 24px;
  height: 24px;
}`;

export const Type = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
  margin-left: 16px;
  margin-right: 10px;
}`;

export const TypeText = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
}`;

export const LightText = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  
  color: #333333;
  margin-top: 25px;
}`;

export const BoldText = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  
  color: #333333;
}`;

export const Button = styled.button`{
  width: 180px;
  height: 39px;
  
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -2px -3px 10px #FFFFFF, 0px 3px 10px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
  border-radius: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  cursor: pointer;
  margin-top: 40px;
  &:focus {
    outline: none !important;
  }
}`;

export const Background = styled.img `{
  position: absolute;
  bottom: 0px;

  width: 100%;
  height: auto;
  border-radius: 16px;
}`;