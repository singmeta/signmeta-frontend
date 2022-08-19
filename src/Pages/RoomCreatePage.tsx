import * as React from "react";
import "tailwindcss/tailwind.css";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

function RoomCreatePage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  // const [checkedList, setCheckedList] = useState([]);
  // // 1️⃣ onChange함수를 사용하여 이벤트 감지, 필요한 값 받아오기
  // const onCheckedElement = (checked, item) => {
  //   if (checked) {
  //     setCheckedList([...checkedList, item]);
  //   } else if (!checked) {
  //     setCheckedList(checkedList.filter((el) => el !== item));
  //   }
  // };
  // // 2️⃣ x를 누르면 리스팅 목록에서 카테고리가 삭제되며 체크도 해제 된다
  // const onRemove = (item) => {
  //   setCheckedList(checkedList.filter((el) => el !== item));
  // };

  const [roomName, setRoomName] = useState("");
  const [peopleNum, setPeopleNum] = useState("4");
  const [roomPW, setRoomPW] = useState("");
  const [roomTheme, setRoomTheme] = useState("1");

  const [checkedPW, setCheckedPW] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (checkedPW) {
      if (roomName !== "" && peopleNum !== "" && roomPW !== "") {
        console.log(roomName, "roomName  ~~~");
        console.log(peopleNum, "peopleNum ~~~");
        console.log(roomPW, "roomPW ~~~~~");
        console.log(roomTheme, "roomTheme~~~~~");
      } else {
        alert("모든 항목을 작성해주세요!");
      }
    } else {
      if (roomName !== "" && peopleNum !== "") {
        console.log(roomName, "roomName  ~~~");
        console.log(peopleNum, "peopleNum ~~~");
        console.log(roomTheme, "roomTheme~~~~~");
      } else {
        alert("모든 항목을 작성해주세요!");
      }
    }
    //여기서 포스트로 넘기면 된다.
  };

  const handleChecked = (e: any) => {
    console.log(e.target.checked);
    setCheckedPW(e.target.checked);
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
    },
  };

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center lg:justify-start mb-10">
                <p className="text-4xl font-semibold mb-10">
                  노래방 환경을 선택해주세요
                </p>
              </div>
              <Swiper {...settings} className="flex justify-center m-10">
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="https://i.imgur.com/nbOmV01.png" alt="charimg " />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="https://i.imgur.com/EP8Qh15.png" alt="charimg" />2
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="https://i.imgur.com/EP8Qh15.png" alt="charimg" />3
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pb-10">
                  <img src="https://i.imgur.com/EP8Qh15.png" alt="charimg" />4
                </SwiperSlide>
                <SwiperSlide className="flex justify-center">5</SwiperSlide>
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
                <label className="block text-sm font-semibold mb-1 ml-1 dark:text-black">
                  인원 수
                </label>
                <select
                  id="peopleNum"
                  className="shadow-md form-control block w-full px-4 py-2 text-xl font-normal text-base text-gray-700 bg-white bg-clip-padding border border-gray-100 rounded focus:border-gray-300 focus:outline-none"
                  onChange={(e) => setPeopleNum(e.target.value)}
                >
                  <option value="default" disabled>
                    Choose a Your Standerd...
                  </option>
                  <option value="4">4명</option>
                  <option value="5">5명</option>
                  <option value="6">6명</option>
                  <option value="7">7명</option>
                  <option value="8">8명</option>
                </select>
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
                {checkedPW ? (
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
