import styled from 'styled-components';

export const Container = styled.div `{
  max-width: 362px;
  height: fit-content;
  background: 
    linear-gradient(
      329.58deg, 
      rgba(255, 255, 255, 0.05) 9.56%, 
      rgba(92, 112, 162, 0.05) 87.95%
    ), 
    #F6F6F6;
  
  box-shadow: 
    -22px -22px 66px #FFFFFF, 
    22px 22px 66px rgba(202, 208, 223, 0.85), 
    inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  padding: 45px 36px;
}`;

export const Title = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  letter-spacing: 0.01em;
  
  color: #333333;
  
  mix-blend-mode: normal;
}`;

export const CardT = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.01em;
  
  color: #000000;
  margin-top: 8px;
}`;

export const CardContainer = styled.div`{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 16px;
}`;

export const Card = styled.div`{
  width: 308px;
  height: 77px;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;

  &.color0 {
    background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), linear-gradient(182.75deg, #618CF1 -21.55%, #52B5F3 99.5%);
    background-blend-mode: soft-light, normal;
    box-shadow: -5px -4px 12px rgba(255, 255, 255, 0.8), 5px 5px 20px rgba(95, 157, 231, 0.55), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  }
  &.color1 {
    background: linear-gradient(96.77deg, #A53DC3 4.94%, #C975DE 103.04%);
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 14px rgba(164, 97, 175, 0.44);
  }
  &.color2 {
    background: linear-gradient(317.7deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.4) 105.18%), linear-gradient(157.27deg, #E4409B -24.78%, #F2AEAE 125.51%);
    background-blend-mode: soft-light, normal;
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 14px rgba(198, 176, 188, 0.85);
  }
  &.color3 {
    background: radial-gradient(149.37% 229.63% at 114.71% 127.22%, #618CF1 0%, #6569EE 100%);
    box-shadow: -5px -5px 10px #FAFBFF, 5px 5px 14px rgba(99, 97, 175, 0.44);
  }
}`;
export const RCT = styled.div`{
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}`;
export const RCText = styled.div`{

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 125%;
  text-align: right;
  letter-spacing: 0.5px;
  
  color: #FFFFFF;
  
  mix-blend-mode: normal;
}`;
export const RCTitle = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  
  color: #FFFFFF;
  
  mix-blend-mode: normal;
  margin-top: 5px;
}`;

export const ButtonGroup = styled.div`{
  wdith: 100%;
  margin-top: 71px;
  display: flex;
  justify-content: center;
}`;
export const Button = styled.button`{
  width: 222px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px;

  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  
  text-align: center;
  text-transform: capitalize;
  
  color: #333333;
  
  mix-blend-mode: normal;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -2px -3px 10px #FFFFFF, 0px 3px 10px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);

  cursor: pointer;
  &:focus {
    outline: none !important;
  }
  &.active {
    background: linear-gradient(303.64deg, rgba(255, 255, 255, 0.4) 16.13%, rgba(0, 0, 0, 0.4) 132.9%), linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%);
    background-blend-mode: soft-light, normal;
    
    box-shadow: 0px 3px 10px rgba(106, 204, 220, 0.3), -5px -5px 10px #FFFFFF, 3px 3px 12px rgba(202, 223, 219, 0.7);
    color: #FEFEFE;
  }
  border-radius: 75px;
}`;

export const MutiIn = styled.div`{
  display: flex;
  align-items: center;
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
}`;