import { all } from 'redux-saga/effects'
import * as actions from '../actions';
import { tdx_api_fetch_activity, tdx_api_fetch_hotel, tdx_api_fetch_restaurant, tdx_api_fetch_scenicspots } from '../api/tdx';
import {
    call,
    put,
    takeEvery
} from "@redux-saga/core/effects";

const fetch_scenicspots_success = data => ({
    type: actions.FETCH_SCENICSPOTS_SUCCESS,
    payload: data,
});

const fetch_restaurant_success = data => ({
    type: actions.FETCH_RESTAURANT_SUCCESS,
    payload: data,
});

const fetch_activity_success = data => ({
    type: actions.FETCH_ACTIVITY_SUCCESS,
    payload: data,
});

const fetch_hotel_success = data => ({
    type: actions.FETCH_HOTEL_SUCCESS,
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

function* fetch_restaurant(action) {
    switch (action.type) {
        case actions.FETCH_RESTAURANT_BEGIN:
            try {
                const data = yield call(() => tdx_api_fetch_restaurant(action.payload.region, action.payload.keyword, action.payload.skip, action.payload.limit));
                yield put(fetch_restaurant_success(data));
            } catch (e) {
                yield put({
                    type: actions.FETCH_RESTAURANT_FAILED,
                    message: e.message
                })
            };
            return;
        default:
            return;
    }
}

function* fetch_activity(action) {
    switch (action.type) {
        case actions.FETCH_ACTIVITY_BEGIN:
            try {
                const data = yield call(() => tdx_api_fetch_activity(action.payload.region, action.payload.keyword, action.payload.skip, action.payload.limit));
                yield put(fetch_activity_success(data));
            } catch (e) {
                yield put({
                    type: actions.FETCH_ACTIVITY_FAILED,
                    message: e.message
                })
            };
            return;
        default:
            return;
    }
}

function* fetch_hotel(action) {
    switch (action.type) {
        case actions.FETCH_HOTEL_BEGIN:
            try {
                const data = yield call(() => tdx_api_fetch_hotel(action.payload.region, action.payload.keyword, action.payload.skip, action.payload.limit));
                yield put(fetch_hotel_success(data));
            } catch (e) {
                yield put({
                    type: actions.FETCH_HOTEL_FAILED,
                    message: e.message
                })
            };
            return;
        default:
            return;
    }
}


function* scenicspotSaga() {
    yield takeEvery(actions.FETCH_SCENICSPOTS_BEGIN, fetch_scenicspots);
}
function* restaurantSaga() {
    yield takeEvery(actions.FETCH_RESTAURANT_BEGIN, fetch_restaurant);
}
function* activitySaga() {
    yield takeEvery(actions.FETCH_ACTIVITY_BEGIN, fetch_activity);
}
function* hotelSaga() {
    yield takeEvery(actions.FETCH_HOTEL_BEGIN, fetch_hotel);
}
function* rootSaga() {
    yield all([scenicspotSaga(), restaurantSaga(), activitySaga(), hotelSaga()]);
}

export default rootSaga;