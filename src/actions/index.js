import * as types from './ActionTypes';

export const naviClick = (idx) => ({
    type: types.NAVI_CLICK,
    naviIndex: idx
});
