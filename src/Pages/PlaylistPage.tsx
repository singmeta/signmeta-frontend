import axios from "axios";
import PlaylistDetail from "components/playlistDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AudioPlayer from "components/audioPlayer";

function PlaylistPage() {
  const [userPlaylist, setUserPlaylist] = useState<any[]>([]);

  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);

  useEffect(() => {
    axios
      .get(`/users/${REDUX_USER_ID}/playlists`)
      .then((response) => {
        setUserPlaylist(response.data.playlists);
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  }, []);

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex justify-center justify-center items-center flex-wrap h-full"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 rounded-2xl w-96 h-96">
          <div className="flex justify-between">
            <span className="text-xl text-slate-400 m-5 ml-10 font-bold">
              플레이리스트
            </span>
            <div className="m-4">{/* onclick으로 이벤트 등록 */}</div>
            <button
              type="button"
              className="inline-block px-5 h-7 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg m-4"
            >
              <a href="/roomcreate">검색하기</a>
            </button>
          </div>
          <div className="overflow-y-auto h-64 p-6">
            {Object.values(userPlaylist)?.map((item: any, index: any) => (
              <PlaylistDetail
                title={item.title}
                music_url={item.record_url}
                music_id={item._id}
                user_nickname={item.user_nickname}
                play_time={item.play_time}
                user_id={item.user_id}
                key={index}
              />
            ))}
          </div>
          <div>
            <AudioPlayer />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaylistPage;
