import ChartDetail from "components/chartDetail";
import "tailwindcss/tailwind.css";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchModal from "components/modal/SearchModal";
import BackBtn from "components/BackBtn";

function ChartPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  const [chartList, setChartList] = useState<any[]>([]);
  const [searchMusicList, setSearchMusicList] = useState<any[]>([]);
  const [popularClicked, setPopularClicked] = useState(true);
  const [word, setWord] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  console.log(popularClicked);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSearch = () => {
    axios.get(`/user-musics/chart/search?q=${word}`).then((res) => {
      setSearchMusicList(res.data.userMusic);
      setModalOpen(true);
    });
  };

  useEffect(() => {
    const what = localStorage.getItem("chartSort");
    if (what === "true") {
      PopularMusicList();
    } else {
      LatestMusicList();
    }
  }, []);

  const PopularMusicList = () => {
    setPopularClicked(true);
    axios
      .get(`/user-musics/chart/popular`)
      .then((response) => {
        setChartList(response.data.userMusic);

        // window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  const LatestMusicList = () => {
    setPopularClicked(false);
    axios
      .get(`/user-musics/chart/latest`)
      .then((response) => {
        console.log(response.data.userMusic, "chart data ");
        setChartList(response.data.userMusic);
        // window.location.reload();
      })
      .catch((error) => {
        console.log("An error occurred : ", error.response);
      });
  };

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const settings = {
    spaceBetween: 10,
    navigation: {},
    pagination: { clickable: true },
    scrollbar: { draggable: true, el: null },
    slidesPerView: 5,
    slidesPerGroup: 5,
  };

  return (
    <section className="h-screen ">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
      >
        <div className="xl:w-7/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 border-2 rounded-2xl w-96 h-96">
          <div className="flex justify-between">
            <span className="text-xl text-slate-400 m-5 ml-10 font-bold">
              ????????? ??????
            </span>

            <div className="ml-7 mt-4">
              <button
                onClick={() => {
                  PopularMusicList();
                  localStorage.setItem("chartSort", "true");
                  window.location.reload();
                }}
                className={`${popularClicked ? "text-xl font-bold" : ""}`}
              >
                ?????????
              </button>{" "}
              /{" "}
              <button
                onClick={() => {
                  LatestMusicList();
                  localStorage.setItem("chartSort", "false");
                  window.location.reload();
                }}
                className={`${popularClicked ? "" : "text-xl font-bold"}`}
              >
                ?????????
              </button>
              {/* onclick?????? ????????? ?????? */}
            </div>
            <div className="flex">
              <button onClick={handleSearch}>
                <img
                  src="images/searchimg.png"
                  alt="img"
                  className="mb-3 w-4 h-4"
                />
              </button>
              <input
                onChange={(e) => setWord(e.target.value)}
                className="m-3 border w-30 h-7 rounded"
                type="text"
              ></input>
              <div className="mt-3 mr-3">
                <BackBtn />
              </div>
            </div>
          </div>

          <Swiper {...settings} className="flex justify-center m-10">
            {Object.values(chartList)?.map((item: any, index: any) => (
              <SwiperSlide className="flex justify-center pb-10" key={index}>
                <ChartDetail
                  title={item.title}
                  likes={item.likes}
                  music_id={item._id}
                  music_url={item.record_url}
                  user_nickname={item.user_nickname}
                  ranking={index}
                  user_id={item.user_id}
                  key={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ???????????? ???????????? map?????? ?????? (data : 1. ????????? 2. ????????? 3. ?????? ?????? ) */}
        </div>
        <SearchModal
          open={modalOpen}
          close={closeModal}
          header={searchMusicList}
        ></SearchModal>
      </div>
    </section>
  );
}

export default ChartPage;
