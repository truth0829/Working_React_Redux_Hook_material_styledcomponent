import styled from 'styled-components';

export const CardsContainer = styled.div`{
    margin-top: 50px;
}`;

export const Tilte = styled.div`{
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    
    color: #333333;
}`;

export const CardBox = styled.div`{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
}`;

export const Card = styled.div`{
  width: 256px;
  height: 77px;
  padding: 20px;
  border-radius: 10px;
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