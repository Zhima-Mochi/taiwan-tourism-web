export const FETCH_SCENICSPOTS_BEGIN = 'FETCH_SCENICSPOTS_BEGIN';
export const FETCH_SCENICSPOTS_SUCCESS = 'FETCH_SCENICSPOTS_SUCCESS';
export const FETCH_SCENICSPOTS_FAILED = 'FETCH_SCENICSPOTS_FAILED';
export const FETCH_RESTAURANT_BEGIN = 'FETCH_RESTAURANT_BEGIN';
export const FETCH_RESTAURANT_SUCCESS = 'FETCH_RESTAURANT_SUCCESS';
export const FETCH_RESTAURANT_FAILED = 'FETCH_RESTAURANT_FAILED';
export const FETCH_ACTIVITY_BEGIN = 'FETCH_ACTIVITY_BEGIN';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_FAILED = 'FETCH_ACTIVITY_FAILED';
export const FETCH_HOTEL_BEGIN = 'FETCH_HOTEL_BEGIN';
export const FETCH_HOTEL_SUCCESS = 'FETCH_HOTEL_SUCCESS';
export const FETCH_HOTEL_FAILED = 'FETCH_HOTEL_FAILED';
export const CLEAN_DATA = 'CLEAN_DATA';

export const fetch_scenicspots_begin = (region = "all", keyword = "", skip = 0, limit = -1) => ({
    type: FETCH_SCENICSPOTS_BEGIN,
    payload: {
        'region': region,
        'keyword': keyword,
        'skip': skip,
        'limit': limit
    }
});
export const fetch_restaurant_begin = (region = "all", keyword = "", skip = 0, limit = -1) => ({
    type: FETCH_RESTAURANT_BEGIN,
    payload: {
        'region': region,
        'keyword': keyword,
        'skip': skip,
        'limit': limit
    }
});
export const fetch_activity_begin = (region = "all", keyword = "", skip = 0, limit = -1) => ({
    type: FETCH_ACTIVITY_BEGIN,
    payload: {
        'region': region,
        'keyword': keyword,
        'skip': skip,
        'limit': limit
    }
});
export const fetch_hotel_begin = (region = "all", keyword = "", skip = 0, limit = -1) => ({
    type: FETCH_HOTEL_BEGIN,
    payload: {
        'region': region,
        'keyword': keyword,
        'skip': skip,
        'limit': limit
    }
});



export const clean_data = () => ({
    type: CLEAN_DATA,
})