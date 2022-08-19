import PlaylistDetail from "components/playlistDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";

function PlaylistPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <section className="h-screen ">
      <div className="flex justify-center justify-center items-center flex-wrap h-full g-6">
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 w-96 h-96">
          <div className="flex justify-between">
            <span className="text-xl text-slate-400 m-5 ml-10 font-bold">
              플레이리스트
            </span>
            <div className="m-4">
              <button>인기순</button> / <button>최신순</button>
              {/* onclick으로 이벤트 등록 */}
            </div>
            <button
              type="button"
              className="inline-block px-5 h-7 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg m-4"
            >
              <a href="/roomcreate">검색하기</a>
            </button>
          </div>
          <div className="overflow-y-auto h-72 p-6">
            <PlaylistDetail />
            <PlaylistDetail /> <PlaylistDetail /> <PlaylistDetail />
            <PlaylistDetail /> <PlaylistDetail /> <PlaylistDetail />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlaylistPage;
