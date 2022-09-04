import axios from "axios";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

function RoomDetail({ room_name = "", room_type_id = "", password = "" }) {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }
  const [imgUrl, setImgUrl] = useState("");
  const [passwordTF, setPasswordTF] = useState(false);

  const roomType = axios.get(`/room-types/${room_type_id}`).then((res) => {
    setImgUrl(res.data.roomType.thumbnail_image_url);
  });

  const handleEnterRoom = () => {
    if (password !== null) {
      // 비밀번호 있으면 모달창 o
    } else {
      //비밀번호 없으면 모달창 x
    }
  };
  useEffect(() => {
    if (password !== null) {
      setPasswordTF(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-fit w-fit my-auto items-center m-auto">
      <button>
        <a href="/webview">
          <img className="w-20 h-20" src={imgUrl} alt="charimg" />
        </a>
      </button>

      <span className="font-bold">
        방 제목{" "}
        {passwordTF ? (
          <button className="w-4">
            <img src="images/lockimg.png" alt="img" className="mt-2" />
          </button>
        ) : (
          <span></span>
        )}
      </span>
      <span className="text-xl">{room_name}</span>
    </div>
  );
}

export default RoomDetail;
