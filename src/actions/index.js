import {
    call,
    put,
    takeEvery
} from "@redux-saga/core/effects";

export const FETCH_SCENICSPOTS_BEGIN = 'FETCH_SCENICSPOTS_BEGIN';
export const FETCH_SCENICSPOTS_SUCCESS = 'FETCH_SCENICSPOTS_SUCCESS';
export const FETCH_SCENICSPOTS_FAILED = 'FETCH_SCENICSPOTS_FAILED';

export const fetch_scenicspots_begin = () => ({
    type: FETCH_SCENICSPOTS_BEGIN,
});

const fetch_scenicspots_success = data => ({
    type: FETCH_SCENICSPOTS_SUCCESS,
    payload: {
        data,
    },
});

function* fetch_scenicspots(region, keyword, skip, limit) {
    try {
        const data = yield call(() => fetch('https://example.com/').then(response => response.json()));
        yield put(fetch_scenicspots_success(data));
    } catch (e) {
        yield put({
            type: FETCH_SCENICSPOTS_FAILED,
            message: e.message
        })
    }
}

export function* scenicspotSaga() {
    yield takeEvery(fetch_scenicspots_begin, fetch_scenicspots);
}