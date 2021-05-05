import Sidebar from '../../components/Sidebar/Index';
import Navbar from '../../components/Navbar/Index';
import Search from '../../components/Search/Index';
import ExercisesCards from '../../components/ExercisesCards/Index';
import { 
    FlexContainer, 
    PageContainer, 
    Flex,
    ISearch,
} from './styles';

function Settings() {
    return (
        <FlexContainer>
            <Sidebar />
            <PageContainer>
                <Navbar title="Exercises" showingButton = {true} />
                <ISearch>
                    <Search />
                </ISearch>
                <Flex>
                    <ExercisesCards />
                </Flex>
            </PageContainer>
        </FlexContainer>
    )
}

export default Settings;