import axios from "axios";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useSelector } from "react-redux";

function PlaylistDetail({ title = "", music_url = "", music_id = "" }) {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);
  console.log(REDUX_USER_ID);

  const handleDelete = () => {
    // /users/630cd41b06fbcf281d29fc02/playlists/630dc10f06fbcf281d2a151a

    axios
      .delete(`/users/${REDUX_USER_ID}/playlists/${music_id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  return (
    <div className="flex justify-evenly space-x-4 p-2 text-gray-500">
      <div>
        <img className="max-w-max" src="images/profileimg.png" alt="img" />
      </div>
      <div className="truncate">
        <p className="truncate">{title}</p>
      </div>
      <div>
        <span>nickname</span>
      </div>
      <div>
        <span>playtime</span>
      </div>
      <div>
        <button onClick={handleDelete}>
          <img
            className="max-w-max"
            src="images/deleteicon.png"
            alt="img"
          ></img>
        </button>
      </div>
      {/* <button type="button">
        <img className="mx-auto" src="images/favoriteicon.png" alt="img" />
        <span>1.4k</span>
      </button> */}
    </div>
  );
}

export default PlaylistDetail;
