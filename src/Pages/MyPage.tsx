import MyMusicDetail from "components/myMusicDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import AudioPlayer from "components/audioPlayer";

function MyPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }
  const [userNickname, setUserNickname] = useState("");
  const [popularClicked, setPopularClicked] = useState(true);

  const [userMusicArray, setUserMusicArray] = useState<any[]>([]);
  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);
  console.log(REDUX_USER_ID);

  // const REDUX_MUSIC_INFO = useSelector((state: any) => state.MusicUrlReducer);
  // console.log(REDUX_MUSIC_INFO, "music redux");

  useEffect(() => {
    PopularMusicList();
    //LatestMusicList();
    axios
      .get(`/users/${REDUX_USER_ID}`)
      .then((response) => {
        setUserNickname(response.data.user.nickname);
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
        console.log(response.data.userMusic[0].play_time);
        console.log(response.data.userMusic[0].user_nickname);
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
        console.log(response.data.userMusic[0].title);
        setUserMusicArray(response.data.userMusic);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  return (
    <section className="h-screen ">
      <div className="flex justify-center justify-center items-center flex-wrap h-full g-6">
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 w-96 h-96">
          <div className="flex justify-between">
            <span className="text-xl text-slate-400 m-5 font-bold">
              마이페이지 - 내 녹음 음악
            </span>
            <button type="button" className="text-xl mr-5">
              ⚙️
            </button>
          </div>
          <div className="grid grid-rows-2 grid-cols-3 grid-flow-col gap-2">
            <div className="row-span-2 mx-auto text-center">
              <span className="text-lg font-bold">{userNickname}</span>
              <img className="" src="images/mypageimg.png" alt="img"></img>
              <span className="text-base">캐릭터 변경</span>
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
      </div>
    </section>
  );
}

export default MyPage;
