import styled from 'styled-components';

export const ProfileCardWraper = styled.div`
  width: 594px;
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
  padding: 45px 52px;
`;

export const ProfileContent = styled.div`
  margin: 30px 0px 0px 16px;
`;

export const ProImgWraper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProConTitle = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;

  color: #333333;
`;

export const ProImgCircle = styled.div `{
  margin-top: 10px;
  display: flex;
  align-items: center;
}`;

export const Img = styled.img `
  width: 80px;
  height: 80px;
`;

export const Form = styled.div `
  width: 100%;
  height: auto;
`;

export const PhotoButton = styled.button`{
  width: 140px;
  height: 30px;
  margin: 0px 17px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background: linear-gradient(303.64deg, rgba(255, 255, 255, 0.4) 16.13%, rgba(0, 0, 0, 0.4) 132.9%), linear-gradient(326.75deg, #6ADCB3 -14.42%, #6ACCDC 99.59%);
  background-blend-mode: soft-light, normal;
  
  box-shadow: 0px 3px 10px rgba(106, 204, 220, 0.3), -5px -5px 10px #FFFFFF, 3px 3px 12px rgba(202, 223, 219, 0.7);
  border-radius: 75px;

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
  
  color: #FEFEFE;
  
  mix-blend-mode: normal;
}`;

export const Delete = styled.button`{
  width: 89px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  &:focus {
    outline: none!important;
  }
  
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
`;

export const DRG = styled.div `
  width: 32%;
  height: auto;
  margin-top: 30px;
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

export const MultiGroup = styled.div `
  width: 100%;
  height: auto;
  margin-top: 30px;
  &.flex {
    display: flex;
    justify-content: space-between;
  }
`;

export const MultiIn = styled.div`{
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
