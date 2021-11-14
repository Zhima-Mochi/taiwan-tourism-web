import { Container, Navbar, Row, Col, Nav, InputGroup, FormControl, Button } from 'react-bootstrap';
import lantern from "../icon/TW_Sky Lantern.svg"
import '../module.css'
import { useEffect, useState } from 'react'
import Pagination from './Pagination';





function ThemeTitle(props) {
    const { titleName } = props;
    return (
        <Container className="spot-list-title-line mb-3 noselect px-0">
            <p>
                <a href="#" className="text-decoration-none mr-2" >:::</a>
                <svg className="mr-2" style={{ width: "2rem", height: "2rem" }}>
                    <image href={lantern} />
                </svg>
                <span className="spot-list-title-name">{titleName}</span>
            </p>
        </Container>
    )
}


function ThemePageList(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [displayNum, setDisplayNum] = useState(3);
    const { theme, keyword, city, placeClass, show } = props;
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        if (windowSize.width > 1100) {
            setDisplayNum(3);
        } else if (windowSize.width > 576) {
            setDisplayNum(2);
        } else {
            setDisplayNum(1);
        }
    }
        , [windowSize])

    useEffect(() => {
        setCurrentPage(1);
    }, [keyword, city, placeClass])
    const getLastPage = (pg) => {
        setLastPage(pg);
    };

    const prevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const nextPageClick = () => {
        if (currentPage < lastPage) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <Container >
            <Row className="resultList">
                <Col className="px-0" onClick={prevPageClick}>
                    <div className={currentPage === 1 ? "pageChangeArrow d-none" : "pageChangeArrow"} >
                        <i aria-hidden="true" className="bi bi-chevron-left"></i>
                        <span className="sr-only">上一頁</span>
                    </div>
                </Col>
                <Col xs={10} className="px-0">
                    {
                        <Pagination displayNum={displayNum} {...{ theme, getLastPage, currentPage, keyword, city, placeClass }} />
                    }
                </Col>
                <Col className="px-0" onClick={nextPageClick} >
                    <div className={currentPage === lastPage ? "pageChangeArrow d-none" : "pageChangeArrow"}  >
                        <i aria-hidden="true" className="bi bi-chevron-right"></i>
                        <span className="sr-only">下一頁</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
// decide to show outside
function ThemeBlock(props) {
    const { theme, keyword, city, placeClass, show } = props;
    const titleName = (
        theme === 'scenicspot' ?
            '景點 ScenicSpot' :
            theme === 'restaurant' ?
                '美食 Restaurant' :
                theme === 'activity' ?
                    '活動 Activity' :
                    '住宿 Hotel'
    );
    return (
        <div className="mt-5">
            <ThemeTitle titleName={titleName} />
            <ThemePageList {...{ theme, keyword, city, placeClass, show }} />
        </div>
    )
}



export default function ResultBlock(props) {
    const { theme, keyword, city, placeClass } = props;
    const showScenicSpot = (theme === 'all' || theme === 'scenicspot');
    const showRestaurant = (theme === 'all' || theme === 'restaurant');
    const showActivity = (theme === 'all' || theme === 'activity');
    const showHotel = (theme === 'all' || theme === 'hotel');
    const themeBlockProps = {
        keyword,
        city,
        placeClass,
    }
    return (
        <>
            <Container className="mt-5 mb-5">
                <div className={!showScenicSpot ? 'd-none' : ""}>
                    <ThemeBlock theme='scenicspot' show={showScenicSpot} {...themeBlockProps} />
                </div>
                <div className={!showRestaurant ? 'd-none' : ""}>
                    <ThemeBlock theme='restaurant' show={showRestaurant} {...themeBlockProps} />
                </div>
                <div className={!showActivity ? 'd-none' : ""}>
                    <ThemeBlock theme='activity' show={showActivity} {...themeBlockProps} />
                </div>
                <div className={!showHotel ? 'd-none' : ""}>
                    <ThemeBlock theme='hotel' show={showHotel} {...themeBlockProps} />
                </div>
            </Container>
            <Container fluid="true" className="footerStyle mt-0">
                &copy; {new Date().getFullYear()} Yu Tsai-Heng {'&'} Zhima-Mochi
            </Container>
        </>
    );
}