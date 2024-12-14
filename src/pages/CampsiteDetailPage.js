import {useParams} from "react-router-dom";
import {selectCampsiteById} from "../features/campsites/campsitesSlice";
import {Container, Row} from "reactstrap";
import SubHeader from "../components/SubHeader";
import CampsiteDetail from "../features/campsites/CampsiteDetail"; 
import CommentList from "../features/comments/CommentList";

const CampsiteDetailPage = () => {
    const {campsiteId} = useParams();
    const campsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentList campsiteId={campsiteId} />
            </Row>
        </Container>
    );
}

export default CampsiteDetailPage;