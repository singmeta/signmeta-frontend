import * as React from "react";
import "tailwindcss/tailwind.css";
import Profile1 from "../images/profile1";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import NoticeModal from "components/modal/NoticeModal";

function MainPage() {
  const [userNickname, setUserNickname] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`/users/${REDUX_USER_ID}`)
      .then((response) => {
        setUserNickname(response.data.user.nickname);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);
  // console.log(REDUX_USER_ID);

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12  md:mb-0 ">
          <div className="grid grid-cols-6 gap-3 h-full max-w-7xl rounded-2xl bg-no-repeat bg-singmetaBack flex justify-center p-6 m-10">
            <div className="col-start-1 col-span-2 ... flex items-center ml-7 m-auto">
              <Profile1 />
              <div className="ml-3">
                <strong>{userNickname}</strong>
                <p>
                  <span className="text-white text-sm">프로필 수정하기</span>
                </p>
              </div>
            </div>
            <button className="col-end-7 col-span-1 ... m-auto  text-white">
              <img src="https://i.imgur.com/6eE5nJm.png" alt="exit" />
              exit
            </button>
            <button className="col-start-1 col-span-1 ... m-auto text-white">
              <a href="/playlistpage">
                <img src="https://i.imgur.com/xvXJoPm.png" alt="" />
                playlist
              </a>
            </button>
            <button className="col-end-5 row-span-2 col-span-2 m-auto">
              <img src="https://i.imgur.com/WkuQGWl.png" alt="character" />
            </button>
            <button className="col-end-7 col-span-1 ... m-auto  text-white">
              <a href="/chartpage">
                <img src="https://i.imgur.com/YEH2xPE.png" alt="" />
                chart
              </a>
            </button>
            <button className="col-start-1 col-span-1 ... m-auto text-white">
              <a href="/mypage">
                <img src="https://i.imgur.com/oI7F4hZ.png" alt="" />
                mypage
              </a>
            </button>

            <button className="col-start-1 col-span-1 ..."></button>
            <button
              onClick={(e) => setModalOpen(true)}
              className="col-start-1 col-span-1 ... m-auto  text-white"
            >
              <img src="https://i.imgur.com/0Q6vDCL.png" alt="" />
              notice
            </button>
            <button className="col-end-7 col-span-1 ... m-auto">
              <a href="/roomlist">
                <img src="https://i.imgur.com/J73mp5N.png" alt="room" />
              </a>
            </button>
          </div>
          <NoticeModal
            open={modalOpen}
            close={closeModal}
            header=""
          ></NoticeModal>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
