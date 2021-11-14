import { useState } from "react";
import { Row, Col, Container, Card, Button, Ratio, Modal } from "react-bootstrap"
import defaultImage from "../picture/default-image.png"
import { InfoModal } from './Modal'
function BasicCardContent(props) {
    const { item } = props;
    return (
        <div className="border-0 rounded bg-white resultList pb-2" >
            <img className="resultImage p-0 m-0 d-block " src={item.Picture.PictureUrl1 || defaultImage} alt={item.Picture.PictureDescription1} />
            <Container className="resultTitle mt-2">
                {item.Name}
            </Container>
            <Container className="resultOpenTime mt-2" >
                <p className="text-truncate " style={{ maxWidth: "15rem" }}>
                    <i className="bi bi-clock mr-2"></i>{item.OpenTime}
                </p>
            </Container>
            <Container className="mt-2 resultPhone">
                <a target="_blank" href={`tel:${item.Phone}`} className="text-decoration-none">
                    <i className="bi bi-telephone-fill mr-2"></i>{item.Phone}
                </a>
            </Container>
            <Container className="resultAddress mt-2" >
                <a target="_blank" href={`https://maps.google.com/?q=${item.Address}`} className="text-decoration-none">
                    {item.MapUrl}
                    <p className="text-truncate " style={{ maxWidth: "15rem" }}>
                        <i className="bi bi-geo-alt-fill mr-2"></i>{item.Address}
                    </p>
                </a>
            </Container>
        </div>
    )
}
export function ScenicSpotCards(props) {
    const { showData } = props;
    const [showId, setShowId] = useState(0);
    const resetIsShow = () => {
        setShowId(0);
    }
    const dataList = showData.map(item => (
        <>
            <Col key={item.ID} onClick={() => setShowId(item.ID)}>
                <BasicCardContent item={item} />
            </Col>
        </>
    ));
    return (
        <>
            <Row className="px-0 ">
                {dataList}
            </Row>
        </>
    )
}

export function RestaurantCards(props) {
    const { showData } = props;
    const dataList = showData.map(item => (
        <Col key={item.ID} >
            <BasicCardContent item={item} />
        </Col>
    ));
    return (
        <Row className="px-0 ">
            {dataList}
        </Row>
    )
}

export function ActivityCards(props) {
    const { showData } = props;
    const dataList = showData.map(item => (
        <Col key={item.ID} >
            <BasicCardContent item={item} />
        </Col>
    ));
    return (
        <Row className="px-0 ">
            {dataList}
        </Row>
    )
}
export function HotelCards(props) {
    const { showData } = props;
    const dataList = showData.map(item => (
        <Col key={item.ID} >
            <BasicCardContent item={item} />
        </Col>
    ));
    return (
        <Row className="px-0 ">
            {dataList}
        </Row>
    )
}