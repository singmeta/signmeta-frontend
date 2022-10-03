import axios from "axios";
import React from "react";
import "tailwindcss/tailwind.css";

function MyMusicDetail({ title = "", is_showed = "", created_at = "", music_id = "", music_url = "", user_nickname = "", play_time = "" }) {
  const handlePlaylist = () => {
    localStorage.setItem("select_music", music_url);
    localStorage.setItem("select_title", title);
    localStorage.setItem("select_user_nick", user_nickname);
    window.location.reload();
  };
  const handleUpload = () => {
    if (is_showed) {
      // true >> 업로드 o
      axios
        .patch(`/user-musics/${music_id}/private`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("An error occurred : ", error.response);
        });
    } else {
      //false >> 업로드 x

      axios
        .patch(`/user-musics/${music_id}/public`)
        .then((response) => {
          window.location.reload();
        })
        .catch((error) => {
          console.log("An error occurred : ", error.response);
        });
    }
  };

  let testDate = created_at.substring(0, 10);

  return (
    <div className="flex gap-2 space-x-4 p-2 text-gray-500 m-4">
      <div className="flex_play_btn">
        <button onClick={handlePlaylist}>
          <img className="max-w-max" src="images/playicon.png" alt="img"></img>
        </button>
      </div>
      <div className="flex_title">
        <p className="truncate title">{title}</p>
      </div>
      <div className="flex_item">
        <p className="truncate">{user_nickname}</p>
      </div>
      <div className="flex_item">
        <p className="truncate">{play_time}</p>
      </div>
      <div className="truncate">
        <p className="truncate">{testDate}</p>
      </div>
      <button
        type="button"
        onClick={handleUpload}
        className={`${
          is_showed
            ? "bg-red-500 p-1 text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg"
            : "bg-webtn p-1 text-white font-medium text-sm rounded-full focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg"
        }`}
      >
        {is_showed ? "cancle" : "upload"}
      </button>
      <style>
        {`
          .title {
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .flex_play_btn {
            flex: 0.3; /* flex: 1 1 0 */
            overflow: auto;
          }
          .flex_title {
            flex: 2; /* flex: 1 1 0 */
            overflow: auto;
          }
          .flex_item {
            flex: 1; /* flex: 1 1 0 */
            overflow: auto;
          }
        `}
      </style>
    </div>
  );
}

export default MyMusicDetail;
