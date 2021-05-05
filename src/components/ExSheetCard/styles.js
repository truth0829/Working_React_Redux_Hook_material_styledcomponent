import styled, { css } from 'styled-components';

export const Container = styled.div`{
  max-width: 502px;
  padding: 45px 53px;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -22px -22px 66px #FFFFFF, 22px 22px 66px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  border-radius: 16px;
}`;

export const HeaderWrapper = styled.div`{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}`;

export const TitleBox = styled.div`{
  display: flex;
  align-items: center;
}`;

export const LogoIcon = styled.img`{
  width: 28.8px;
  height: 24px;
}`;

export const LogoTitle = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 23px;
  
  color: #333333;
  margin-left: 14.2px;
}`;

export const ViewButton = styled.button`{
  width: 113px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -2px -3px 10px #FFFFFF, 0px 3px 10px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
  border-radius: 75px;

  border: none;
  &:focus {
    outline: none!important;
  }
}`;

export const CardWrapper = styled.div`{
  position: relative;
  width: 100%;
  margin: 20px 0px;
  background: 
    linear-gradient(
      329.58deg, rgba(255, 255, 255, 0.05) 9.56%, 
      rgba(92, 112, 162, 0.05) 87.95%
    ), 
    #F6F6F6;
  
  border: 1px solid #F1F1F1;
  box-sizing: border-box;
  
  box-shadow:
    -5px -4px 12px rgba(255, 255, 255, 0.8), 5px 5px 20px rgba(202, 208, 223, 0.85), 
    inset 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  border-radius: 10px;
}`;

export const CardImg = styled.img`{
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
}`;

export const CardBox = styled.div`{
  position: relative;
  padding: 30px;
}`;

export const CardTitleBox = styled.div`{
  display: flex;
  align-items: center;
}`;

export const CardTitle = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  
  color: #333333;
  margin-left: 8px;
}`;

export const CardDes = styled.div`{
  // max-width: 252px;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #333333;
  margin-top: 5px;
}`;

export const CardButton = styled.button`{
  width: 168.48px;
  height: 39px;
  margin-top: 16px;
  cursor: pointer;
  background: linear-gradient(329.58deg, rgba(255, 255, 255, 0.05) 9.56%, rgba(92, 112, 162, 0.05) 87.95%), #F6F6F6;
  
  box-shadow: -2px -3px 10px #FFFFFF, 0px 3px 10px rgba(202, 208, 223, 0.85), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.5);
  border-radius: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  &:focus {
    outline: none!important;
  }

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
}`;
