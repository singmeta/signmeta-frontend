export const UserIDReducer = (state = "", action: any) => {
  const id = action.redux_user_id;
  switch (action.type) {
    case "SAVE_ID":
      return id;
    default:
      return "hhh";
  }
};
