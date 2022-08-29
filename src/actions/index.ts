// actions/index.js
export const SAVE_ID = "SAVE_ID";

export const save_id = (id: any) => {
  return {
    type: SAVE_ID,
    redux_user_id: id,
  };
};
