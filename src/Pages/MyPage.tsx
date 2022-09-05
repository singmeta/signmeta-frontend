import MyMusicDetail from "components/myMusicDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import AudioPlayer from "components/audioPlayer";
import "../font/font.css";
import SearchModal from "components/modal/SearchModal";

function MyPage() {
  const [userNickname, setUserNickname] = useState("");
  const [popularClicked, setPopularClicked] = useState(true);
  const [userCharacter, setUserCharacter] = useState("ninja");
  const [changeCharacter, setChangeCharacter] = useState("ninja");

  const [searchMusicList, setSearchMusicList] = useState<any[]>([]);
  const [word, setWord] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [userMusicArray, setUserMusicArray] = useState<any[]>([]);
  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);

  const handleSearch = () => {
    axios
      .get(`/user-musics/users/${REDUX_USER_ID}/search?q=${word}`)
      .then((res) => {
        setSearchMusicList(res.data.userMusic);
        setModalOpen(true);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCharacter = () => {
    axios.patch(`/users/${REDUX_USER_ID}?character=${changeCharacter}`);
    window.location.reload();
  };

  useEffect(() => {
    PopularMusicList();
    //LatestMusicList();
    axios
      .get(`/users/${REDUX_USER_ID}`)
      .then((response) => {
        setUserNickname(response.data.user.nickname);
        setUserCharacter(response.data.user.character);
        //여기서 닉네임이랑 이미지 가져와야함
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  }, [REDUX_USER_ID]);

  const PopularMusicList = () => {
    setPopularClicked(true);
    axios
      .get(`/user-musics/users/${REDUX_USER_ID}/popular`)
      .then((response) => {
        setUserMusicArray(response.data.userMusic);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  const LatestMusicList = () => {
    setPopularClicked(false);
    axios
      .get(`/user-musics/users/${REDUX_USER_ID}/latest`)
      .then((response) => {
        setUserMusicArray(response.data.userMusic);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex justify-center justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 rounded-2xl w-96 h-96">
          <div className="flex justify-between">
            <p className=" text-2xl text-slate-400 m-5 ">
              마이페이지 - 내 녹음 음악
            </p>
            <div className="flex m-2">
              <button onClick={handleSearch}>
                <img
                  src="images/searchimg.png"
                  alt="img"
                  className=" w-4 h-4"
                />
              </button>
              <input
                onChange={(e) => setWord(e.target.value)}
                className="m-3 border w-30 h-7 rounded"
                type="text"
              ></input>
            </div>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
            <div className="row-span-2 mx-auto text-center">
              <span className="text-xl font-bold ">{userNickname} 님</span>
              <img
                className="border-2 border-gray-200 rounded-3xl"
                src={`images/${userCharacter}.png`}
                alt="img"
              ></img>
              {/* <span className="text-base">캐릭터 변경</span> */}
              <div className="flex justify-center">
                <label className="block text-sm font-semibold mt-1 mr-1 dark:text-black">
                  <button onClick={handleCharacter}>캐릭터 변경</button>
                </label>
                <select
                  id="peopleNum"
                  className="shadow-md form-control block w-16  text-xl font-normal text-base text-gray-700 bg-white bg-clip-padding border border-gray-100 rounded focus:border-gray-300 focus:outline-none"
                  onChange={(e) => setChangeCharacter(e.target.value)}
                >
                  <option value="default" disabled>
                    Choose a Your Standerd...
                  </option>
                  <option value="ninja">Ninja</option>
                  <option value="nurse">Nurse</option>
                  <option value="knight">Knight</option>
                  <option value="boss">Boss</option>
                  <option value="professor">Professor</option>
                </select>
              </div>
            </div>

            <div className="col-span-2 row-span-2 flex flex-col">
              <div className="ml-3">
                <button
                  onClick={PopularMusicList}
                  className={`${popularClicked ? "text-xl font-bold" : ""}`}
                >
                  인기순{" "}
                </button>
                /{" "}
                <button
                  onClick={LatestMusicList}
                  className={`${popularClicked ? "" : "text-xl font-bold"}`}
                >
                  최신순
                </button>
              </div>
              {/* 이거 map으로 돌려  components로 따로 ㄷ뺴야할듯*/}
              <div className="overflow-y-auto h-52 mt-2">
                {Object.values(userMusicArray)?.map((item: any, index: any) => (
                  <MyMusicDetail
                    title={item.title}
                    is_showed={item.is_showed}
                    created_at={item.created_at}
                    music_id={item._id}
                    music_url={item.record_url}
                    user_nickname={item.user_nickname}
                    play_time={item.play_time}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-evenly">
            <AudioPlayer />
          </div>
        </div>
        <SearchModal
          open={modalOpen}
          close={closeModal}
          header={searchMusicList}
        ></SearchModal>
      </div>
    </section>
  );
}

export default MyPage;
