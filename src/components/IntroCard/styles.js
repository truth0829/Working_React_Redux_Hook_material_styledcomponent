import styled from 'styled-components';

export const IntroCardWrapper = styled.div`
  max-width: 346px;
  background: linear-gradient(
      329.58deg,
      rgba(255, 255, 255, 0.05) 9.56%,
      rgba(92, 112, 162, 0.05) 87.95%
    ),
    #f6f6f6;
  /* Desktop White/Up - Height > 500 */

  box-shadow: -22px -22px 66px #ffffff, 22px 22px 66px rgba(202, 208, 223, 0.85),
    inset 0px 0px 2px 2px rgba(255, 255, 255, 0.4);
  padding: 60px 53px;
  &.custom__styles {
    margin-top: 84px;
    text-align: center;
  }
`;

export const IntroTitle = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  mix-blend-mode: normal;
  margin-bottom: 10px;
`;

export const IntroPara = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #333333;
  margin-bottom: 40px;
`;

export const IntroVideoWrapper = styled.div`
  width: 104px;
  height: 200px;
  filter: drop-shadow(-5px -5px 9px #ffffff), drop-shadow(0px 5px 12px rgba(202, 208, 223, 0.85));
`;

export const InnerWrapper = styled.div`
  position: relative;
  button {
    position: absolute;
    bottom: 30px;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
  & img {
    border-radius: 5px;
    filter: drop-shadow(-5px -5px 9px #ffffff), drop-shadow(0px 5px 12px rgba(202, 208, 223, 0.85));
  }
`;

export const OuterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

export const Box = styled.div`
    text-align: center
  }
`;
