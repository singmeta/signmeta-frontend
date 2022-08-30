import axios from "axios";
import * as React from "react";
import "tailwindcss/tailwind.css";

function MyMusicDetail({
  title = "",
  is_showed = "",
  created_at = "",
  music_id = "",
}) {
  const handleUpload = () => {
    axios
      .patch(`/user-musics/${music_id}/public`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  const handleCancle = () => {
    axios
      .patch(`/user-musics/${music_id}/private`)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  return (
    <div className="flex justify-evenly space-x-4 p-2 text-gray-500">
      <div>
        <button>
          <img className="max-w-max" src="images/playicon.png" alt="img"></img>
        </button>
      </div>
      <div>
        <p className="truncate">{title}</p>
      </div>
      <div>
        <span>nickname</span>
      </div>
      <div>
        <span>playtime</span>
      </div>
      <div className="truncate">
        <p className="truncate">{created_at}</p>
      </div>
      {is_showed ? (
        <button
          type="button"
          onClick={handleCancle}
          className="p-1 bg-red-500 text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg"
        >
          cancle
        </button>
      ) : (
        <button
          type="button"
          onClick={handleUpload}
          className="p-1 bg-webtn text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg"
        >
          upload
        </button>
      )}
    </div>
  );
}

export default MyMusicDetail;
