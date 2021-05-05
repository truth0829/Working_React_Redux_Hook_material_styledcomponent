import Sidebar from '../../components/Sidebar/Index';
import Navbar from '../../components/Navbar/Index';
import TherapistCard from '../../components/TherapistCard/Index';
import IntroCard from '../../components/IntroCard/Index';
import { 
    FlexContainer, 
    PageContainer, 
    ICard, 
} from './styles';

function WaitingRoom() {
    const marginTop = {
        marginTop: '50px'
    }
    return (
        <FlexContainer>
            <Sidebar />
            <PageContainer>
                <Navbar title="Therapist" />
                <FlexContainer style={marginTop}>
                    <TherapistCard />
                    <ICard>
                        <IntroCard />
                    </ICard>
                </FlexContainer>
            </PageContainer>
        </FlexContainer>
    )
}

export default WaitingRoom;