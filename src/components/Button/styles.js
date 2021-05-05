import styled, { css } from 'styled-components';

export const Button = styled.button`
  font-family: Raleway;
  cursor: pointer;
  background: linear-gradient(
      329.58deg,
      rgba(255, 255, 255, 0.05) 9.56%,
      rgba(92, 112, 162, 0.05) 87.95%
    ),
    #f6f6f6;
  border: 1px solid rgba(242, 242, 242, 0.25);
  box-sizing: border-box;
  box-shadow: -1.66667px -1.66667px 5px rgba(102, 102, 102, 0.33),
    2.5px 2.5px 10px rgba(102, 102, 102, 0.55),
    inset 0px 0px 0px 0.333333px rgba(255, 255, 255, 0.2);
  &:focus {
    outline: none !important;
  }
  ${(props) =>
    props.shape === 'rounded' &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      width: 37px;
      height: 36px;
    `}
  ${(props) =>
    props.shape === 'default' &&
    css`
      background: linear-gradient(
          303.64deg,
          rgba(255, 255, 255, 0.4) 16.13%,
          rgba(0, 0, 0, 0.4) 132.9%
        ),
        linear-gradient(326.75deg, #6adcb3 -14.42%, #6accdc 99.59%);
      background-blend-mode: soft-light, normal;
      box-shadow: 0px 3px 10px rgba(106, 204, 220, 0.3), -5px -5px 10px #ffffff,
        3px 3px 12px rgba(202, 223, 219, 0.7);
      border-radius: 75px;
      padding: 11px 24px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      text-align: center;
      text-transform: capitalize;

      color: #fefefe;
    `}
`;
