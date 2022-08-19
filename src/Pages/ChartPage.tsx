import ChartDetail from "components/chartDetail";
import * as React from "react";
import "tailwindcss/tailwind.css";

import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

function ChartPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const settings = {
    spaceBetween: 10,
    navigation: {},
    pagination: { clickable: true },
    scrollbar: { draggable: true, el: null },
    slidesPerView: 5,
  };

  return (
    <section className="h-screen ">
      <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 w-96 h-96">
          <div className="flex justify-between">
            <span className="text-xl text-slate-400 m-5 ml-10 font-bold">
              실시간 차트
            </span>

            <div className="mr-8">
              <button>인기순</button> / <button>최신순</button>
              {/* onclick으로 이벤트 등록 */}
            </div>
            <button type="button" className="text-xl m-2">
              🔄
            </button>
          </div>

          <Swiper {...settings} className="flex justify-center m-10">
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center pb-10">
              <ChartDetail />
            </SwiperSlide>
          </Swiper>

          {/* 컴포넌트 등록해서 map으로 돌려 (data : 1. 이미지 2. 닉네임 3. 참여 인원 ) */}
        </div>
      </div>
    </section>
  );
}

export default ChartPage;
