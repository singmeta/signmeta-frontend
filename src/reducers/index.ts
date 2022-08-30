import { combineReducers } from "redux";
import { UserIDReducer } from "./UserIDReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["UserIDReducer"],
  // blacklist -> 그것만 제외합니다
};

// 모든 리듀서를 관할하는 것임
const rootReducer = combineReducers({
  UserIDReducer,
});

export default persistReducer(persistConfig, rootReducer);
