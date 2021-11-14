import react, { useState, useMemo, useCallback, useEffect } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { getActivity, getHotel, getRestaurant, getScenicSpot } from "../tdxApi/tdxApi.js";
import { ActivityCards, HotelCards, RestaurantCards, ScenicSpotCards } from "./Cards.jsx";

const queryScenicSpot = {
    $select: [
        "ID",
        "Name",
        "Description",
        "Address",
        "Phone",
        "Picture",
        "TicketInfo",
        "OpenTime",
    ]
};
const queryRestaurant = {
    $select: [
        "ID",
        "Name",
        "Description",
        "Address",
        "Phone",
        "Picture",
        "OpenTime",
        "WebsiteUrl",
        "Class",
    ]
};
const queryActivity = {
    $select: [
        "ID",
        "Name",
        "Description",
        "Address",
        "Location",
        "Phone",
        "Picture",
        "Charge",
        "StartTime",
        "EndTime",
    ]
};
const queryHotel = {
    $select: [
        "ID",
        "Name",
        "Description",
        "Grade",
        "Address",
        "Phone",
        "Picture",
        "Class",
        "ServiceInfo",
        "Spec",
    ]
};

const initData = {
    Picture: {},
    StartTime: '',
    EndTime: '',
}

async function getDataCount(theme, keyword, city, placeClass = null) {
    const params = {
        $select: ["ID"],
        $keyword: keyword
    };
    if (theme === 'scenicspot') {
        return getScenicSpot(city, params).then(res => res.length);
    } else if (theme === 'restaurant') {
        return getRestaurant(city, params).then(res => res.length);
    } else if (theme === 'activity') {
        return getActivity(city, params).then(res => res.length);
    } else if (theme === 'hotel') {
        return getHotel(city, params).then(res => res.length);
    } else {
        return 0;
    }
}
async function getData(theme, keyword, city, skip, top, placeClass) {
    let params = {
        $skip: skip,
        $top: top,
        $keyword: keyword
    };
    if (theme === 'scenicspot') {
        return getScenicSpot(city, { ...queryScenicSpot, ...params });
    } else if (theme === 'restaurant') {
        return getRestaurant(city, { ...queryRestaurant, ...params });
    } else if (theme === 'activity') {
        return getActivity(city, { ...queryActivity, ...params });
    } else if (theme === 'hotel') {
        return getHotel(city, { ...queryHotel, ...params });
    } else {
        return [];
    }
}

const update_num = 30;
export default function Pagination(props) {
    const { theme, currentPage, getLastPage, displayNum, keyword, city, placeClass } = props;
    const [data, setData] = useState([]);
    const [dataCount, setDataCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [requireDataCount, setRequireDataCount] = useState(0);
    useEffect(() => {
        getDataCount(theme, keyword, city, placeClass)
            .then(res => setDataCount(res));
        getData(theme, keyword, city, 0, update_num * 2, placeClass)
            .then(res => setData(res));
    }, [keyword, city, placeClass]);

    useEffect(() => {
        getLastPage(dataCount % displayNum == 0 ? Math.max(dataCount / displayNum, 1) : Math.ceil(dataCount / displayNum));
    }, [dataCount])

    useEffect(() => {
        if (data.length == dataCount) {
            return;
        } else if (currentPage * displayNum > data.length) {
            setIsLoading(true);
            setRequireDataCount(data.length + update_num);
        } else if (currentPage * displayNum + update_num > data.length) {
            setRequireDataCount(data.length + update_num);
        }
    }, [currentPage, displayNum, data])

    useEffect(() => {
        const skip = data.length;
        const top = requireDataCount - data.length;
        async function fetchData() {
            const response = await getData(theme, keyword, city, skip, top, placeClass);
            setIsLoading(false);
            if (response.length) {
                setData([...data, ...response]);
            }
        }
        fetchData();
    }, [requireDataCount])

    if (dataCount == 0) {
        return (
            <Container className="text-center">
                沒有資料
            </Container>
        )
    } else if (isLoading) {
        return (
            <Container className="text-center">
                Loading
            </Container>
        )
    } else {
        const showData = data.slice((currentPage - 1) * displayNum, Math.min(dataCount, currentPage * displayNum));
        if (theme === 'scenicspot') {
            return <ScenicSpotCards theme={theme} showData={showData} />;
        } else if (theme === 'restaurant') {
            return <RestaurantCards theme={theme} showData={showData} />;
        } else if (theme === 'activity') {
            return <ActivityCards theme={theme} showData={showData} />;
        } else if (theme === 'hotel') {
            return <HotelCards theme={theme} showData={showData} />;
        }
    }
}
