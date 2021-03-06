import * as actions from "./user-panel-action-types";

const initState = {
    count: 0,
    userData: null,
};

// state = {
//     count: 0,
// }
//
// action = {
//     type: 'ACTION_SET_CLICK_COUNT',
//     payload: 123,
// }

const user_reducer = (state = initState,action)=> {
    const newState = {...state};
    console.log(" In user panel reducer");
    switch (action.type) {
        case actions.SAVE_CLICK_COUNT:
            console.log("Saving Count");
            newState.count = action.payload;
            break;
        case actions.SAVE_USER_DATA:
            console.log("Saving Api Data");
            newState.userData = action.payload;
            break;
        default:
            break;
    }
    return newState;
};

export default user_reducer;