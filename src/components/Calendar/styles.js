
import styled from 'styled-components';

export const StageCardContainer = styled.div `{
  max-width: 712px;
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
  margin: 10px 0px;
}`;

export const TabUpdate = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  
  color: #333333;
}`;