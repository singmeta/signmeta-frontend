import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(rootReducer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
