import axios from "axios";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function PlaylistDetail({ title = "", music_url = "", music_id = "", user_nickname = "", play_time = "", user_id = "" }) {
  const [userCharacter, setUserCharacter] = useState("ninja");

  useEffect(() => {
    axios
      .get(`/users/${user_id}`)
      .then((response) => {
        setUserCharacter(response.data.user.character);
        //여기서 닉네임이랑 이미지 가져와야함
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  }, []);

  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);

  const handleDelete = () => {
    axios
      .delete(`/users/${REDUX_USER_ID}/playlists/${music_id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  const handlePlaylist = () => {
    localStorage.setItem("select_music", music_url);
    localStorage.setItem("select_title", title);
    window.location.reload();
  };

  return (
    <div className="flex justify-evenly p-2 text-gray-500 text-center">
      <div className="flex_item">
        <button onClick={handlePlaylist}>
          <img className="w-16 h-16" src={`images/${userCharacter}.png`} alt="img" />
        </button>
      </div>
      <div className="flex_title truncate">
        <p className="truncate text-xl">{title}</p>
      </div>
      <div className="flex_item">
        <span className=" text-xl">{user_nickname}</span>
      </div>
      <div className="flex_item">
        <span className=" text-xl">{play_time}</span>
      </div>
      <div className="flex_item">
        <button onClick={handleDelete}>
          <img className="max-w-max" src="images/deleteicon.png" alt="img"></img>
        </button>
      </div>
      {/* <button type="button">
        <img className="mx-auto" src="images/favoriteicon.png" alt="img" />
        <span>1.4k</span>
      </button> */}
      <style>
        {`
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

export default PlaylistDetail;
