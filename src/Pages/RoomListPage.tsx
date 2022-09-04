import * as React from "react";
import "tailwindcss/tailwind.css";
import RoomDetail from "../components/roomDetail";
import { useState, useEffect } from "react";
import axios from "axios";

function RoomListPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }
  const [roomList, setRoomList] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/rooms`).then((res) => {
      setRoomList(res.data.rooms);
    });
  }, []);

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 rounded-2xl w-96 h-96">
          <div className="flex justify-between">
            <p className="font-bold text-xl text-slate-400 m-5 ml-8">
              방 리스트
            </p>

            <button
              type="button"
              className="px-5 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg m-2 mr-5"
            >
              <a href="/roomcreate">방 만들기</a>
            </button>
          </div>

          <div className="overflow-y-auto h-72 grid grid-cols-5 gap-4 pt-5">
            {Object.values(roomList)?.map((item: any, index: any) => (
              <RoomDetail
                room_name={item.room_name}
                room_type_id={item.room_type_id}
                password={item.password}
                key={index}
              />
            ))}

            {/* 
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
            ))} */}

            {/* 컴포넌트 등록해서 map으로 돌려 (data : 1. 이미지 2. 닉네임 3. 참여 인원 ) */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomListPage;
