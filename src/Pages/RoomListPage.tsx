import * as React from "react";
import "tailwindcss/tailwind.css";
import RoomDetail from "../components/roomDetail";

function RoomListPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 rounded-2xl w-96 h-96">
          <div className="flex justify-between">
            <button
              type="button"
              className="inline-block px-5 py-2 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg m-2"
            >
              <a href="/roomcreate">방 만들기</a>
            </button>
            <div className="mr-8">
              <button>인기순</button> / <button>최신순</button>
              {/* onclick으로 이벤트 등록 */}
            </div>
            <button type="button" className="text-xl m-2">
              🔄
            </button>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />
            <RoomDetail />

            {/* 컴포넌트 등록해서 map으로 돌려 (data : 1. 이미지 2. 닉네임 3. 참여 인원 ) */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomListPage;
