import * as actions from '../actions';
import { combineReducers } from 'redux'
const scenicspotReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_SCENICSPOTS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

const rootReducer = combineReducers({ scenicspot: scenicspotReducer });
export default rootReducer;