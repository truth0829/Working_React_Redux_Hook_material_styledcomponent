import styled from 'styled-components';

export const Container = styled.div `{
  max-width: 1116px;
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
  padding: 32px 114px 60px 114px;
}`;

export const BackBox = styled.div`{
  display: flex;
  align-items: center;
}`;
export const BackIcon = styled.img`{
  width: auto;
  height: auto;
}`;
export const BackText = styled.div`{
  display: flex;
  align-items: center;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  
  color: #6ACCDC;
  margin-left: 8px;
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
    background: linear-gradient(155.11deg, rgba(0, 0, 0, 0.4) -6.73%, rgba(255, 255, 255, 0.4) 109.81%, rgba(255, 255, 255, 0.4) 109.81%), linear-gradient(353.3deg, #F2AEAE -33.01%, #E4409B 96.05%);
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
  width: 50%;
  height: auto;
  margin-top: 3px;
}`;

export const STitle = styled.div`{
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  
  color: #333333;
  
  mix-blend-mode: normal;
  margin-top: 45px;
}`;

export const InputWrapper = styled.div`{
  max-width: 432px;
  margin-left: auto;
}`;

export const MultiGroup = styled.div `
  width: 100%;
  height: auto;
`;

export const ChoseItem = styled.div`{
  width: fit-content;
  height: 22px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background: radial-gradient(149.37% 229.63% at 114.71% 127.22%, #618CF1 0%, #6569EE 100%);
  
  box-shadow: inset 2.5px 2.5px 12px rgba(41, 46, 218, 0.53), inset -1.67px -1.67px 8px #8AA9F1;
  border-radius: 15px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  
  color: #E2EBFF;
  margin-right: 10px;
}`;

export const Span = styled.div`{
  margin-left: 9.5px;
  cursor: pointer;
  font-size: 20px;
}`;

export const NameTitle = styled.div `
  font-family: Syne;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #000;

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

export const Wrapper = styled.div`{
  width: auto;
  display: flex;
  position: relative;
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

export const TextArea = styled.textarea `
  display: flex;
  align-items: center;
  font-family: Raleway;
  min-width: 100%;
  max-width: 100%;s
  width: 100%;
  min-height: 150px;
  padding: 20px 20px;
  background: #F6F6F6;
  border: 0.5px solid rgba(202, 208, 223, 0.25);
  box-sizing: border-box;

  box-shadow: 
    inset -2.5px -2.5px 6px 1px #FFFFFF, 
    inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    
    color: #CAD0DF;
  }
`;

export const InputData = styled.input`{
  width: 128px;
  height: 35px;
  padding-left: 30px;
  background: #F6F6F6;
  border: 0.5px solid rgba(202, 208, 223, 0.25);
  box-sizing: border-box;
  
  box-shadow: inset -2.5px -2.5px 6px 1px #FFFFFF, inset 2.5px 2.5px 8px 1px rgba(202, 208, 223, 0.5);
  border-radius: 8px;
  margin-top: 26px;
  cursor: pointer;
  padding-top: 6px;
}`;

export const Pointer = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.01em;
  
  color: #CAD0DF;
  margin-left: auto;
  margin-right: 10px;
  margin-top: -30px;
  position: absolute;
  right: 10px;
}`;



