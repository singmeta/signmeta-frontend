import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import MainPage from "./Pages/MainPage";
import RoomListPage from "./Pages/RoomListPage";
import WebView from "./Pages/WebView";
import RoomCreatePage from "./Pages/RoomCreatePage";
import MyPage from "Pages/MyPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/roomlist" element={<RoomListPage />} />
          <Route path="/webview" element={<WebView />} />
          <Route path="/roomcreate" element={<RoomCreatePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
