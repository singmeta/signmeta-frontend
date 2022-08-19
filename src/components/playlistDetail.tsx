import * as React from "react";
import "tailwindcss/tailwind.css";

function PlaylistDetail() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <div className="flex justify-evenly space-x-4 p-2 text-gray-500">
      <div>
        <img className="max-w-max" src="images/profileimg.png" alt="img" />
      </div>
      <div className="truncate">
        <p className="truncate">어떻게 이별까지 사랑하겠어</p>
      </div>
      <div>
        <span>nickname</span>
      </div>
      <div>
        <span>playtime</span>
      </div>
      <div>
        <button>
          <img
            className="max-w-max"
            src="images/deleteicon.png"
            alt="img"
          ></img>
        </button>
      </div>
      <button type="button">
        <img className="mx-auto" src="images/favoriteicon.png" alt="img" />
        <span>1.4k</span>
      </button>
    </div>
  );
}

export default PlaylistDetail;
