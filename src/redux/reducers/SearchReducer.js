import * as Actions from "../actions/actions";
import initialState from "../store/initialState";

export const SearchReducer = (state = initialState.search, action) => {
    switch (action.type) {
        case Actions.UPDATE_PREFECTURE:
            return {
                ...state,
                ...action.payload
            }
        case Actions.UPDATE_WEATHER:
            return {
                //...state,
                ...action.payload
                }
        case Actions.UPDATE_ERROR:
            return {
                //...state,
                ...action.payload
                }
        default:
            return state
    }
}
