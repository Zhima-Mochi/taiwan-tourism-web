import { useState } from "react"
import { Container, Navbar, Row, Col, Nav } from 'react-bootstrap';
import { themeList } from "../constants/themeList"
import logo_whale_192 from '../logo/logo_whale_192.png'
import logo_whale_512 from '../logo/logo_whale_512.png'
import './module.css'
import SecondarySearchBar from "./SecondarySearchBar";

export default function HeaderSearchBar(props) {
    const [theme, setTheme] = useState('all');
    return (
        <>
            <Container className="header-main-bar noselect bg-white" fluid="true">
                <Row>
                    <Col md className="header-col-left">
                        <span className="header-main-bar-title">
                            <img
                                src={logo_whale_192}
                                className="logo-whale"
                                alt="logo"
                            />
                            樂遊台灣
                        </span>

                    </Col>
                    <Col md={8} className="header-col-middle" fluid="true">
                        <Navbar>
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => setTheme('all')}>:::</Nav.Link>
                                {
                                    themeList.map((item, idx) => {
                                        const theme_id = item[0].toLowerCase();
                                        const theme_name = item[1];
                                        const theme_sub_name = item[0].toUpperCase();
                                        const navItem = (
                                            <Nav.Link key={idx} className="header-main-bar-navbar" onClick={() => setTheme(theme_id)} >
                                                {theme_name}
                                                <br />
                                                <span style={{ color: "#a1c1f3" }}>{theme_sub_name}</span>
                                            </Nav.Link>
                                        )
                                        return navItem;
                                    })
                                }
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            <SecondarySearchBar theme={theme} />
        </>
    );
}