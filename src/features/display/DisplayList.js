import {selectFeaturedCampsite} from "../campsites/campsitesSlice";
import {selectFeaturedPromotion} from "../promotions/promotionsSlice";
import {selectFeaturedPartner} from "../partners/partnersSlice";
import {Row, Col} from "reactstrap";
//import DisplayCard from "./DisplayCard";
import AnimatedDisplayCard from "./AnimatedDisplayCard";

const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, index) => {
                return (
                    item && (
                    <Col md className="m-1" key={index}>
                        <AnimatedDisplayCard item={item} />
                    </Col>
                    )
                );
            })}     
        </Row>
    );
}

export default DisplayList;