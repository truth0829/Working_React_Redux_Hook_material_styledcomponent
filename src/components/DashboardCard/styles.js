import styled, { css } from 'styled-components';

export const Container = styled.div`{
}`;

export const CardWrapper = styled.div`{
  height: fit-content;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -22px -22px 66px #FFFFFF, 22px 22px 66px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  &.second {
    margin-top: 60px;
  }
  min-width: 454px;
  padding: 45px;

}`;

export const TitleContainer = styled.div`{
  display: flex;
  align-items: center;
}`;

export const Icon = styled.img`{
  width: 24px;
  height: 24px;
}`;

export const Title = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
  
  color: #333333;
  margin-left: 14px;
}`;

export const InnerCard = styled.div`{
  width: auto;
  height: auto;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  border: 1px solid #F1F1F1;
  box-sizing: border-box;
  
  box-shadow: -5px -4px 12px rgba(255, 255, 255, 0.8), 5px 5px 20px rgba(202, 208, 223, 0.85), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  margin-top: 40px;
  padding: 30px 40px;

  display: flex;

  &.second {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
}`;

export const Current = styled.div`{
}`;

export const Date = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
  margin-left: 50px;
}`;

export const Strong = styled.div`{
  font-weight: bold;
}`;

export const Time = styled.div`{
  font-weight: light;
}`;

export const Button = styled.button`{
  width: 151px;
  height: 39px;
  
  background: linear-gradient(303.64deg, rgba(255, 255, 255, 0.4) 16.13%, rgba(0, 0, 0, 0.4) 132.9%), linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%);
  background-blend-mode: soft-light, normal;
  
  box-shadow: 0px 3px 10px rgba(106, 204, 220, 0.3), -5px -5px 10px #FFFFFF, 3px 3px 12px rgba(202, 223, 219, 0.7);
  border-radius: 75px;

  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  text-transform: capitalize;
  
  color: #FEFEFE;
  border: none;
  margin-top: 20px;
  cursor: pointer;
  
  mix-blend-mode: normal;
  &:focus {
    outline: none !important;
  }
}`;

export const Photo = styled.img`{
  width: 68px;
  height: 68px;
}`;

export const ButtonView = styled.div`{
  width: 123px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -2px -3px 10px #FFFFFF, 0px 3px 10px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
  border-radius: 75px;

  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  
  text-align: center;
  text-transform: capitalize;
  
  color: #333333;
  cursor: pointer;
}`;

export const TextGroup = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  
  /* Gray / 1 */
  
  color: #333333;
}`;

export const LightText = styled.div`{
  font-weight: light;
}`;