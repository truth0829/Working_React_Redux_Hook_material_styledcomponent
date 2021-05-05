
import React from 'react';
import SideLogo from './../../assets/images/sidebar/SideLogo.png';
import Dashboard from './../../assets/images/sidebar/Dashboard0.png';
import Therapist from './../../assets/images/sidebar/Therapist.png';
import Exercise from './../../assets/images/sidebar/Exercise.png';
import Settings from './../../assets/images/sidebar/Settings.png';
import Chat from './../../assets/images/sidebar/Chat.png';
import SessionCard  from '../SessionCard/Index';
import {
    SidebarWraper,
    SideTab,
    TabItem,
    Title,
    Icon,
    ButtonGroup,
    Button,
} from './styles';

const SidebarNameData = {
    Dashboard: Dashboard,
    Therapist: Therapist,
    Exercise: Exercise,
    Settings: Settings,
    Chat: Chat,
};

const Sidebar = () => {
  return (
    <SidebarWraper>
        <img src={SideLogo} />
        <SideTab>
            <TabItem>
                <Title>Dashboard</Title>
                <Icon>
                    <img src={SidebarNameData.Dashboard}></img>
                </Icon>
            </TabItem>
            <TabItem>
                <Title>Therapist</Title>
                <Icon>
                    <img src={SidebarNameData.Therapist}></img>
                </Icon>
            </TabItem>
            <TabItem>
                <Title>Exercise</Title>
                <Icon>
                    <img src={SidebarNameData.Exercise}></img>
                </Icon>
            </TabItem>
            <TabItem>
                <Title>Settings</Title>
                <Icon>
                    <img src={SidebarNameData.Settings}></img>
                </Icon>
            </TabItem>
            <TabItem className="unavailable">
                <Title>Chat</Title>
                <Icon>
                    <img src={SidebarNameData.Chat}></img>
                </Icon>
            </TabItem>
        </SideTab>
        <SessionCard />
        <ButtonGroup>
            <Button>Contact Marvin</Button>
            <Button>Emergency Support</Button>
        </ButtonGroup>
    </SidebarWraper>
  );
};
export default Sidebar;
