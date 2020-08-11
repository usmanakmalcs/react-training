import * as actions from "./admin-panel-action-types";

const initState = {
    count: 0,
};

// state = {
//     count: 0,
// }
//
// action = {
//     type: 'ACTION_SET_CLICK_COUNT',
//     payload: 123,
// }

const admin_reducer = (state = initState,action)=> {
    const newState = {...state};
    console.log(" In admin panel reducer");
    switch (action.type) {
        case actions.SAVE_CLICK_COUNT:
            console.log("Saving Count");
            newState.count = action.payload;
            break;
        default:
            break;
    }
    return newState;
};

export default admin_reducer;