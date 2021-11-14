import React, { useState } from "react"
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import './module.css'
import { cityList } from "../constants/cityList";
import ResultBlock from "./ResultBlock";
function KeywordSelect(props) {
    const { onSearchClick } = props;
    return (
        <Row>
            <Col>
                <InputGroup className="select-part-main-box mb-2" >
                    <FormControl
                        id="keywordSearch"
                        placeholder="輸入目的地、景點或相關關鍵字"
                        aria-label="輸入目的地、景點或相關關鍵字"
                        aria-describedby="keyword-btn"
                        autoComplete="off"
                    />
                    <Button id="keyword-btn" style={{ backgroundColor: "#00A7BA", borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
                        onClick={() => onSearchClick(document.getElementById("keywordSearch").value)}
                    >
                        <i className="bi bi-search"></i>
                    </Button>
                </InputGroup>
            </Col>
        </Row>
    );
}

function CitySelect(props) {
    const { onCityChange } = props;
    return (
        <InputGroup className="mb-2">
            <FormControl onChange={(e) => onCityChange(e.target.value)} className="select-part-main-box" as="select" aria-label="依地區選擇">
                <option value="all" >依地區</option>
                {
                    cityList.map((item) => {
                        return <option key={item.id} value={item.id}>{item.name}</option>;
                    })
                }
            </FormControl>
        </InputGroup >
    );
}

function PlaceClassSelect(props) {
    const { onPlaceClassChange, theme } = props;
    return (
        <InputGroup className="mb-2">
            <FormControl className="select-part-main-box" as="select" aria-label="依類型選擇">
                <option>依類型</option>
            </FormControl>
        </InputGroup>
    );
}

export default function SecondarySearchBar(props) {
    const { theme } = props;
    const [keyword, setKeyword] = useState("");
    const [city, setCity] = useState("all");
    const [placeClass, setPlaceClass] = useState("all");
    const onSearchClick = (kw) => setKeyword(kw);
    const onCityChange = (ct) => setCity(ct);
    const onPlaceClassChange = (pc) => setPlaceClass(pc);
    return (
        <>
            <div className="select-part-main-bg " >
                <Container className="select-part-main" fluid>
                    <Container className="select-part-main-title mb-2 noselect" >樂遊台灣</Container>
                    <Container className="select-part-main-sub-title mb-4 noselect" >TRAVEL AROUND TAIWAN, BE FUN!</Container>
                    <Container className="col-lg-6 mb-2">
                        <KeywordSelect onSearchClick={onSearchClick} />
                        <Row>
                            <Col>
                                <CitySelect onCityChange={onCityChange} />
                            </Col>
                            {theme !== "all" &&
                                <Col>
                                    <PlaceClassSelect onPlaceClassChange={onPlaceClassChange} theme={theme} />
                                </Col>
                            }
                        </Row>
                    </Container>
                </Container>
            </div>
            <ResultBlock theme={theme} keyword={keyword} city={city} placeClass={placeClass} />
        </>
    )
}