import styled from 'styled-components';

export const SessionCardWraper = styled.div`
  width: 162px;

  background: #F1F1F1;
  border-radius: 16px;
  box-shadow: inset 0px 0px 1px 1px rgba(255, 255, 255, 0.4);
  filter: drop-shadow(5px 5px 20px rgba(202, 208, 223, 0.85));

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 29px 15px;
  margin-top: 153px;
}`;

export const Icon = styled.div`{
  width: 100%;
  display: flex;
  justify-content: center;
}`;

export const Title = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  
  color: #333333;
  margin: 10px 0px;
}`;

export const Date = styled.div`{
  font-family: Raleway;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  
  color: #333333;
}`;