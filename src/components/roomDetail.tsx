import axios from "axios";
import * as React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";
import MyModal from "./modal/Modal";

function RoomDetail({ room_name = "", room_type_id = "", password = "" }) {
  const [imgUrl, setImgUrl] = useState("");
  const [passwordTF, setPasswordTF] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const roomType = axios.get(`/room-types/${room_type_id}`).then((res) => {
    setImgUrl(res.data.roomType.thumbnail_image_url);
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleEnterRoom = () => {
    if (password !== null) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
      window.location.replace(
        "http://ec2-52-23-201-132.compute-1.amazonaws.com:5002/room/enterRoom/map2/ninja/qANw-IFBT/jun/1234"
      );
    }
  };
  useEffect(() => {
    if (password !== null) {
      setPasswordTF(true);
    }
  }, []);

  return (
    <div className="flex flex-col h-fit w-fit my-auto items-center m-auto">
      <button onClick={handleEnterRoom}>
        <img className="w-20 h-20" src={imgUrl} alt="charimg" />
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

      <MyModal
        open={modalOpen}
        close={closeModal}
        header="비밀번호를 입력하세요"
      ></MyModal>
    </div>
  );
}

export default RoomDetail;
