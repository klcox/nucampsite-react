import {Container} from "reactstrap";
import SubHeader from "../components/SubHeader";
import CampsiteList from "../features/campsites/CampsiteList";

const CampsiteDirectoryPage = () => {   
    return (
        <Container>       
            <SubHeader current="Directory" />
            <CampsiteList /> 
        </Container>
    );
};

export default CampsiteDirectoryPage;