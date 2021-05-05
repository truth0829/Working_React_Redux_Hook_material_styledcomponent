import React from 'react';
import {
  StageCardContainer,
  DesBox,
  Title,
  Text,
  Tab,
  TabList,
  TabItem,
  TabCon,
  TabTitle,
  TabDesc,
  TabUpdate,

} from './styles';

const StageCard = () => {

  const DesBoxData = {
      name: 'Stage of Change',
      text: 'The stages of change depict the typical course of recovery when dealing with difficult change.s',
  }

  const TabItemData = [
    {
      name: 'Precontemplation'
    },
    {
      name: 'Contemplation'
    },
    {
      name: 'Preparation'
    },
    {
      name: 'Action'
    },
    {
      name: 'Maintanence'
    },
  ]

  const TabConData = {
      title: 'Your Result: Preparation',
      text: 'The individual has decided to change their behavior, and they begin to think about how to do so. During this stage they will begin to make minor changes to support their goal, but they might not have completely ended the unwanted behavior.'
  }

  return (
    <StageCardContainer>
      <DesBox>
        <Title>{DesBoxData.name}</Title>
        <Text>{DesBoxData.text}</Text>
      </DesBox>
      <Tab>
        <TabList>
        {TabItemData.map((item, ind) => (
          <TabItem key={ind} className={ind==2?"active":""}>
            {item.name}
          </TabItem>
        ))}
        </TabList>
        <TabCon>
          <TabTitle>{TabConData.title}</TabTitle>
          <TabDesc>{TabConData.text}</TabDesc>
          <TabUpdate>Update my answers</TabUpdate>
        </TabCon>
      </Tab>
    </StageCardContainer>
  );
};

export default StageCard;
