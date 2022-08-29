// reducers/index.js
import { SAVE_ID } from "../actions";
import { combineReducers } from "redux";

const UserIDReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SAVE_ID:
      return action.redux_user_id;
    default:
      return state;
  }
};

const App = combineReducers({
  UserIDReducer,
});

export default App;
