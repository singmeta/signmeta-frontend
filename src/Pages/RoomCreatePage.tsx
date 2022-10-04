import * as React from "react";
import "tailwindcss/tailwind.css";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BackBtn from "components/BackBtn";

interface RoomInfo {
  user_id: FormDataEntryValue | null;
  room_name: FormDataEntryValue | null;
  room_type_id: FormDataEntryValue | null;
  is_required_password: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

function RoomCreatePage() {
  const [roomName, setRoomName] = useState("");
  const [roomPW, setRoomPW] = useState("");
  const [roomTheme, setRoomTheme] = useState(0);
  const [themeIDList, setThemeIDList] = useState<any[]>([]);

  const [checkedPW, setCheckedPW] = useState("N");

  const navigate = useNavigate();

  const REDUX_USER_ID = useSelector((state: any) => state.UserIDReducer);

  useEffect(() => {
    axios.get(`/room-types`).then((res) => {
      setThemeIDList(res.data.roomTypes);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const roomInfo: RoomInfo = {
      user_id: REDUX_USER_ID,
      room_name: roomName,
      room_type_id: themeIDList[roomTheme]._id,
      is_required_password: checkedPW,
      password: roomPW,
    };

    if (roomName !== "") {
      axios
        .post<RoomInfo>(`/rooms`, roomInfo)
        .then((response) => {
          //navigate(`/roomlist`);
          window.location.replace(
            "http://ec2-52-23-201-132.compute-1.amazonaws.com:5002/room/createRoom/map2/ninja/jun/1234"
          );
        })
        .catch((error) => {
          console.log("An error occurred : ", error.response);
        });
    } else {
      alert("방 제목을 작성해주세요");
    }
  };

  const handleChecked = (e: any) => {
    if (e.target.checked) {
      setCheckedPW("Y");
    } else {
      setCheckedPW("N");
    }

    if (e.target.checked === false) {
      setRoomPW("");
    }
  };

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const settings = {
    spaceBetween: 10,
    navigation: {},
    pagination: { clickable: true },
    scrollbar: { draggable: true, el: null },
    slidesPerView: 1,
    onSlideChange: (swiper: any) => {
      setRoomTheme(swiper.activeIndex); //테마 설정
      console.log(swiper.activeIndex);
    },
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="absolute top-3 right-3">
          <BackBtn />
        </div>
        <div
          style={{ fontFamily: "IrishGrover" }}
          className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
        >
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center lg:justify-start mb-10">
                <p className="text-4xl font-semibold mb-10">
                  노래방 환경을 선택해주세요
                </p>
              </div>
              <Swiper {...settings} className="flex justify-center m-10">
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="images/roomtheme1.png" alt="asdgasdgsdag" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="images/roomtheme2.png" alt="img" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="images/roomtheme3.png" alt="img" />
                </SwiperSlide>
              </Swiper>

              <div className="mb-6 ">
                <p className="text-sm font-semibold mb-1 ml-1">방 제목</p>
                <input
                  type="text"
                  onChange={(e) => setRoomName(e.target.value)}
                  className="shadow-md form-control block w-full px-4 py-2 text-ms font-normal text-gray-700 bg-white bg-clip-padding border border-gray-100 rounded focus:border-gray-300 focus:outline-none"
                  id="roomName"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">
                  비밀번호 설정
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    onClick={handleChecked}
                    className="ml-3 w-4 h-4 bg-gray-100 rounded border-gray-500 accent-slate-50 focus:accent-slate-500"
                  />
                </p>
                {checkedPW === "Y" ? (
                  <input
                    type="password"
                    className="shadow-md form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-gray-100 rounded focus:border-gray-300 focus:outline-none"
                    id="roomPW"
                    onChange={(e) => setRoomPW(e.target.value)}
                  />
                ) : (
                  undefined
                )}
              </div>

              <div className="text-center p-10">
                <button
                  type="submit"
                  className="inline-block w-full px-7 py-3 bg-webtn text-white font-medium text-sm leading-snug uppercase rounded-full hover:bg-hoverWebtn focus:bg-hoverWebtn active:bg-hoverWebtn transition duration-150 ease-out hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomCreatePage;
