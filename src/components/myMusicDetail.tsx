import * as React from "react";
import "tailwindcss/tailwind.css";

function MyMusicDetail() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <div className="flex justify-evenly space-x-4 p-2 text-gray-500">
      <div>
        <button className="">
          <img className="max-w-max" src="images/playicon.png" alt="img"></img>
        </button>
      </div>
      <div className="truncate">
        <p className="truncate">
          어떻게 이별까지 사랑하겠어 어떻게 이별까지 사랑하겠어 어떻게 이별까지
          사랑하겠어
        </p>
      </div>
      <div>
        <span>nickname</span>
      </div>
      <div>
        <span>playtime</span>
      </div>
      <div>
        <p className="truncate">22-08-19</p>
      </div>
      <button
        type="button"
        className="p-1 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg"
      >
        upload
      </button>
    </div>
  );
}

export default MyMusicDetail;
