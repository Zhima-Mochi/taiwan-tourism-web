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

const restaurantReducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_RESTAURANT_SUCCESS:
            return [...state, ...action.payload];
        case actions.CLEAN_DATA:
            return [];
        default:
            return state;
    }
};
const activityReducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_ACTIVITY_SUCCESS:
            return [...state, ...action.payload];
        case actions.CLEAN_DATA:
            return [];
        default:
            return state;
    }
};
const hotelReducer = (state = [], action) => {
    switch (action.type) {
        case actions.FETCH_HOTEL_SUCCESS:
            return [...state, ...action.payload];
        case actions.CLEAN_DATA:
            return [];
        default:
            return state;
    }
};

const rootReducer = combineReducers({ scenicspot_data: scenicspotReducer, restaurant_data: restaurantReducer, activity_data: activityReducer, hotel_data: hotelReducer });
export default rootReducer;