import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";
import "tailwindcss/tailwind.css";

function ChartDetail({
  title = "",
  likes = "",
  music_id = "",
  music_url = "",
  user_nickname = "",
  ranking = "",
}) {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }
  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);

  const handleLike = () => {
    axios
      .patch(`/user-musics/${music_id}/likes`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => {
        console.log("An error : ", error);
      });
  };

  const addPlaylist = () => {
    axios
      .patch(`/users/${REDUX_USER_ID}/playlists/${music_id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("An error :", error);
      });
  };

  return (
    <div className="flex flex-col h-fit w-fit my-auto items-center m-auto">
      {ranking + 1}st
      <button>
        <img src="https://i.imgur.com/EP8Qh15.png" alt="charimg" />
      </button>
      <span className="ml-4">
        {title}
        <button className="w-4" onClick={addPlaylist}>
          <img src="images/addplaylist.png" alt="img" className="mt-2" />
        </button>
      </span>
      <span className="">
        <button className="w-3 m-1" onClick={handleLike}>
          <img src="images/like.png" alt="img" />
        </button>
        {likes}
      </span>
    </div>
  );
}

export default ChartDetail;
