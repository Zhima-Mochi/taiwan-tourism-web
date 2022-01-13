export const FETCH_SCENICSPOTS_BEGIN = 'FETCH_SCENICSPOTS_BEGIN';
export const FETCH_SCENICSPOTS_SUCCESS = 'FETCH_SCENICSPOTS_SUCCESS';
export const FETCH_SCENICSPOTS_FAILED = 'FETCH_SCENICSPOTS_FAILED';
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

export const clean_data = () => ({
    type: CLEAN_DATA,
})