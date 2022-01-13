import { all } from 'redux-saga/effects'
import * as actions from '../actions';
import { tdx_api_fetch_scenicspots } from '../api/tdx';
import {
    call,
    put,
    takeEvery
} from "@redux-saga/core/effects";

const fetch_scenicspots_success = data => ({
    type: actions.FETCH_SCENICSPOTS_SUCCESS,
    payload: data,
});

function* fetch_scenicspots(action) {
    switch (action.type) {
        case actions.FETCH_SCENICSPOTS_BEGIN:
            try {
                const data = yield call(() => tdx_api_fetch_scenicspots(action.payload.region, action.payload.keyword, action.payload.skip, action.payload.limit));
                yield put(fetch_scenicspots_success(data));
            } catch (e) {
                yield put({
                    type: actions.FETCH_SCENICSPOTS_FAILED,
                    message: e.message
                })
            };
            return;
        default:
            return;
    }

}

export function* scenicspotSaga() {
    yield takeEvery(actions.FETCH_SCENICSPOTS_BEGIN, fetch_scenicspots);
}

function* rootSaga() {
    yield all([scenicspotSaga(),]);
}

export default rootSaga;