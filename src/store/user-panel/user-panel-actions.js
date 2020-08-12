import * as actions from './user-panel-action-types';

export const saveCount = (data) => {
    console.log(" In user panel actions");
  return {
      type: actions.SAVE_CLICK_COUNT,
      payload: data,
  }
};

const saveUserData = (data) => {
    console.log(" In user panel actions");
    return {
        type: actions.SAVE_USER_DATA,
        payload: data,
    }
};

export const getUserData = ()=> {
    // API Call
    // Dispatch event by myself here (Save Count Function)
    return (dispatch)=>{

        // API Call to get user data -> Success / Then -> dispatch(saveAPIData())
                                     //-> Failure / Catch -> Display error message
    }

}