import styled, { css } from 'styled-components';

export const FlexContainer = styled.div`{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 125px;
}`;

export const Flex = styled.div`{
  display: flex;
  justify-content: center;
  height: 315.06px;
}`;

export const Img = styled.img`{
  width: 505.12px;
  height: 100%;
  margin-right: 68px;
  border-radius: 7px;
}`;

export const ButtonGroup = styled.div`{
  width: 520px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}`;

export const LgButton = styled.div`{
  width: 100%;
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background: linear-gradient(355.87deg, rgba(255, 255, 255, 0.05) 3.28%, rgba(235, 235, 235, 0.05) 63.85%, rgba(83, 138, 150, 0.025) 108.18%), #F6F6F6;
  
  border: 1px solid #F1F1F1;
  box-sizing: border-box;
  box-shadow: -5px -4px 12px rgba(255, 255, 255, 0.8), 5px 5px 20px rgba(202, 208, 223, 0.85), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  border-radius: 10px;

  padding: 0px 36px;
}`;

export const BDesription = styled.div`{
  display: flex;
  align-items: center;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
}`;

export const Icon = styled.img`{
  width: 30px;
  height: 30px;
  margin-right: 15px;
}`;

export const ReviewHref = styled.a`{
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  
  color: #6ACCDC;
}`;

export const SmButton = styled.div`{
  width: 176px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -4px -4px 16px #FFFFFF, 6px 6px 12px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
  border-radius: 75px;
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: capitalize;
  
  color: #333333;
}`;

export const NormalButton = styled.div`{
  width: 211px;
  height: 55px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  background: linear-gradient(303.64deg, rgba(255, 255, 255, 0.4) 16.13%, rgba(0, 0, 0, 0.4) 132.9%), linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%);
  background-blend-mode: soft-light, normal;
  
  box-shadow: 8px 8px 16px rgba(106, 204, 220, 0.3), -4px -4px 16px #FFFFFF, 4px 4px 12px rgba(202, 223, 219, 0.7);
  border-radius: 100px;
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
  
  text-align: center;
  
  color: #FEFEFE;

  margin-top: 90px;
  padding: 0px 45px;
}`;