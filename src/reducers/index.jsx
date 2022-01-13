import * as actions from '../actions';
import { combineReducers } from 'redux'

const scenicspotReducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_SCENICSPOTS_SUCCESS:
            return [...state, ...action.payload];
        case actions.CLEAN_DATA:
            return [];
        default:
            return state;
    }
};

const rootReducer = combineReducers({ scenicspot: scenicspotReducer });
export default rootReducer;