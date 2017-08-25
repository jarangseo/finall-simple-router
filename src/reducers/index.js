import * as types from '../actions/ActionTypes';

const initialState = {
    naviData: ['Home', 'Posts', 'Photos', 'User'],
    naviIndex: 0
};

function getNaviIndex(state = initialState, action) {
    switch( action.type ) {
        case types.NAVI_CLICK:
            return {
                ...state,
                naviIndex: action.naviIndex
            };
        default:
            return state;
    }
}

export default getNaviIndex;