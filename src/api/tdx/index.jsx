import axios from "axios"
import getAuthorizationHeader from "./getAuthorizationHeader";

const base_url = "https://ptx.transportdata.tw/MOTC/v2/";
async function tdx_api_fetch_scenicspots() {
    const url = `${base_url}Tourism/`;
    
}

async function requestTdxApi(path = "", params = {}) {
    const TDX_TOURISM_API_URL = process.env.REACT_APP_API_HOST_NAME + '/MOTC/v2/Tourism/';
    let paramStr = '';
    if (params['$keyword'] && params['$keyword'].trim()) {
        const keyword = params['$keyword'].trim();
        params['$filter'] = `contains(Name,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}')`;
        delete params['$keyword'];
    } else {
        delete params['$keyword'];
    }
    for (const [key, value] of Object.entries(params)) {
        paramStr += key + '=' + value.toString() + '|'
    }
    paramStr += '$format=JSON'
    let url = TDX_TOURISM_API_URL + path + '?q=' + paramStr;
    return fetch(url).then(res => {
        return res.json();
    });
}

export const getScenicSpot = (city = "all", params = null) => {
    if (city === 'all') {
        return requestTdxApi('ScenicSpot/',
            params
        );
    } else {
        return requestTdxApi(`ScenicSpot/${city}`,
            params
        );
    }
};

export const getRestaurant = (city = "all", params = null) => {
    if (city === 'all') {
        return requestTdxApi('Restaurant/',
            params
        );
    } else {
        return requestTdxApi(`Restaurant/${city}`,
            params
        );
    }
};

export const getActivity = (city = "all", params = null) => {
    if (city === 'all') {
        return requestTdxApi('Activity/',
            params
        );
    } else {
        return requestTdxApi(`Activity/${city}`,
            params
        );
    }
};

export const getHotel = (city = "all", params = null) => {
    if (city === 'all') {
        return requestTdxApi('Hotel/',
            params
        );
    } else {
        return requestTdxApi(`Hotel/${city}`,
            params
        );
    }
};