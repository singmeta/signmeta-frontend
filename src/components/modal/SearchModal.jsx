import ChartDetail from "components/chartDetail";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Scrollbar, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

const SearchModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  SwiperCore.use([Navigation, Pagination, Scrollbar]);

  const settings = {
    spaceBetween: 10,
    navigation: {},
    pagination: { clickable: true },
    scrollbar: { draggable: true, el: null },
    slidesPerView: 3,
    slidesPerGroup: 3,
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            검색결과
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main className="flex justify-center">
            <Swiper {...settings} className="flex justify-center m-10">
              {Object.values(header)?.map((item, index) => (
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
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default SearchModal;
