import Sidebar from '../../components/Sidebar/Index';
import Navbar from '../../components/Navbar/Index';
import DashboardCard from '../../components/DashboardCard/Index';
import ExSheetCard from '../../components/ExSheetCard/Index';
import { 
    FlexContainer, 
    PageContainer, 
    ICard, 
} from './styles';

function Dashboard() {
    return (
        <FlexContainer>
            <Sidebar />
            <PageContainer>
                <Navbar title="Hi Susie!" />
                <FlexContainer>
                    <ICard>
                        <DashboardCard />
                    </ICard>
                    <ICard>
                        <ExSheetCard />
                    </ICard>
                </FlexContainer>
            </PageContainer>
        </FlexContainer>
    )
}

export default Dashboard;