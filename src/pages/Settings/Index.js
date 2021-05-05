import Sidebar from '../../components/Sidebar/Index';
import Navbar from '../../components/Navbar/Index';
import ProfileCard from '../../components/ProfileCard/Index';
import StageCard1 from '../../components/StageCard/Index';
import SettingsAnswerCard from '../../components/SettingsAnswerCard/Index';
import { 
    FlexContainer, 
    PageContainer, 
    ICard, 
    IStageCard,
} from './styles';

function Settings() {
    const marginTop = {
        marginTop: '50px'
    }
    return (
        <FlexContainer>
            <Sidebar />
            <PageContainer>
                <Navbar title="Settings" />
                <FlexContainer style={marginTop}>
                    <ICard>
                        <ProfileCard />
                        <IStageCard>
                            <StageCard1 />
                        </IStageCard>
                    </ICard>
                    <SettingsAnswerCard />
                </FlexContainer>
            </PageContainer>
        </FlexContainer>
    )
}

export default Settings;