import Sidebar from '../../components/Sidebar/Index';
import Navbar from '../../components/Navbar/Index';
import WaitRoom from '../../components/WaitRoom/Index';
import { FlexContainer, PageContainer } from './styles';

function WaitingRoom() {
    return (
        <FlexContainer>
            <Sidebar />
            <PageContainer>
                <Navbar title="Waiting Room" />
                <WaitRoom />
            </PageContainer>
        </FlexContainer>
    )
}

export default WaitingRoom;