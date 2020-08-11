import * as actions from './user-panel-action-types';

export const saveCount = (data) => {
    console.log(" In user panel actions");
  return {
      type: actions.SAVE_CLICK_COUNT,
      payload: data,
  }
};