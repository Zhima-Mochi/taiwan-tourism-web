import axios from "axios"
import getAuthorizationHeader from "./getAuthorizationHeader";

const base_url = new URL("https://ptx.transportdata.tw");
export async function tdx_api_fetch_scenicspots(region = "all", keyword = "", skip = 0, limit = -1) {
    const url = new URL(base_url);
    if (region !== "all") {
        url.pathname = `/MOTC/v2/Tourism/ScenicSpot/${region}`;
    } else {
        url.pathname = `/MOTC/v2/Tourism/ScenicSpot`;
    }
    if (keyword) {
        url.searchParams.append("$filter", `contains(ScenicSpotName,'${keyword}') or contains(Address,'${keyword}') or contains(Description,'${keyword}') or contains(DescriptionDetail,'${keyword}')`);
    }
    url.searchParams.append("$format", "JSON");
    url.searchParams.append("$skip", skip);
    if (limit !== -1) {
        url.searchParams.append("$top", limit);
    }
    return axios({
        'method': 'get',
        'url': url.href,
        'headers': getAuthorizationHeader()
    }).then((response) => {
        console.log(response.data)
        return response.data;
    }).catch((e) => {
        console.warn(e);
    });
}