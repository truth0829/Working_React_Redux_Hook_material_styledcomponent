import styled from 'styled-components';

export const Container = styled.div `{
  max-width: 1132px;
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
  padding: 70px 114px 60px 114px;
}`;

export const StepBox = styled.div`{
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}`;

export const Step = styled.div`{
  display: flex;
  align-items: center;
}`;

export const StepIcon = styled.div`{
  width: 6px;
  height: 6px;
  left: 236px;
  top: 204px;
  border-radius: 50%;
  margin-right: 6px;
  &.active {
    background: linear-gradient(154.86deg, rgba(0, 0, 0, 0.4) -1.09%, rgba(255, 255, 255, 0.4) 93.59%), linear-gradient(154.44deg, #6ACCDC 3.24%, #6ADCB3 106.71%);
    background-blend-mode: soft-light, normal;
  }
}`;

export const StepTitle = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #CAD0DF;
  &.active {
    color: #333333;
  }
}`;

export const MainBody = styled.div`{
  width: 100%;
  display: flex;
  margin-top: 30px;
}`;

export const PhotoWrapper = styled.div`{
  width: 20%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}`;
export const PhotoText = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  
  color: #333333;
  
  mix-blend-mode: normal;
}`;

export const Photo = styled.img`{
  width: 98px;
  height: 98px;
  cursor: pointer;
  margin-top: 36px;
  border-radius: 50%;
  box-shadow: -6px -5px 10px #FFFFFF, 3px 5px 12px rgba(202, 208, 223, 0.85);
  border: 6px solid #F6F6F6;
}`;
export const UploadButton = styled.div`{
  width: 133px;
  height: 39px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  
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
  
  mix-blend-mode: normal;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
}`;

export const InputWrapper = styled.div`{
  width: 78%;
  margin-left: 2%;
}`;

export const InputGroup = styled.div `
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div `
  width: 49%;
  height: auto;
  margin-top: 30px;
  &.flex {
    display: flex;
    justify-content: space-between;
  }
`;

export const NameTitle = styled.div `
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #333333;

  mix-blend-mode: normal;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

export const NameCon = styled.div`{
  width: 100%;
  display: flex;
  justify-content: space-between;
}`;
export const NameBox = styled.div`{
  width: 49%;
}`;

export const DPCon = styled.div`{
  wdith: 49%;
}`;

export const ButtonGroup = styled.div`{
  wdith: 100%;
  margin-top: 270px;
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