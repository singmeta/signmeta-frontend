import MyMusicDetail from "components/myMusicDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

function MyPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }
  const [userMusicArray, setUserMusicArray] = useState<any[]>([]);
  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);
  console.log(REDUX_USER_ID);

  useEffect(() => {
    PopularMusicList();
    //LatestMusicList();
  }, [REDUX_USER_ID]);

  const PopularMusicList = () => {
    axios
      .get(`/user-musics/users/${REDUX_USER_ID}/popular`)
      .then((response) => {
        console.log(response.data.userMusic[0].title);
        setUserMusicArray(response.data.userMusic);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  const LatestMusicList = () => {
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
              <span className="text-lg font-bold">nickname</span>
              <img className="" src="images/mypageimg.png" alt="img"></img>
              <span className="text-base">캐릭터 변경</span>
            </div>

            <div className="col-span-2 row-span-2 flex flex-col">
              <div className="text-xl ml-3">
                <button onClick={PopularMusicList}>인기순 </button>/{" "}
                <button onClick={LatestMusicList}>최신순</button>
              </div>
              {/* 이거 map으로 돌려  components로 따로 ㄷ뺴야할듯*/}
              <div className="overflow-y-auto h-52 mt-2">
                {Object.values(userMusicArray)?.map((item: any, index: any) => (
                  <MyMusicDetail
                    title={item.title}
                    is_showed={item.is_showed}
                    created_at={item.created_at}
                    music_id={item._id}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <button
              type="button"
              className="inline-block px-5 py-2 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg m-2"
            >
              <a href="/">뒤로가기</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyPage;
