import styled from 'styled-components';

export const StageCardContainer = styled.div `{
  max-width: 622px;
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

export const DesBox = styled.div`{
  width: 100%;
}`;

export const Title = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
}`;

export const Text = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  color: #000000;
  margin-top: 12px;
}`;

export const Tab = styled.div`{
  width: 100%;
}`;

export const TabList = styled.div`{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 23px;
}`;

export const TabItem = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  
  color: #333333;
  
  opacity: 0.44;
  cursor: pointer;

  &:hover, &.active {
    opacity: 1;
    border-bottom: 1px solid #000;
    line-height: 16px;
  }
}`;

export const TabCon = styled.div`{
  width: 100%;
}`;

export const TabTitle = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
}`;

export const TabDesc = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  color: #333333;
  margin: 10px 0px 16px 0px;
}`;

export const TabUpdate = styled.button`{
  width: 169px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: 
    linear-gradient(
      303.64deg, 
      rgba(255, 255, 255, 0.4) 16.13%, 
      rgba(0, 0, 0, 0.4) 132.9%), 
      linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%);
  background-blend-mode: soft-light, normal;
  
  box-shadow: 
    0px 3px 10px rgba(106, 204, 220, 0.3), 
    -5px -5px 10px #FFFFFF, 
    3px 3px 12px rgba(202, 223, 219, 0.7);
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
  cursor: pointer;
  &:focus {
    outline: none !important;
  }
}`;