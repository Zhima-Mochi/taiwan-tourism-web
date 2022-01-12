import { all } from 'redux-saga/effects'
import { scenicspotSaga } from '../actions'

function* rootSaga() {
    yield all([scenicspotSaga(),]);
}

export default rootSaga;