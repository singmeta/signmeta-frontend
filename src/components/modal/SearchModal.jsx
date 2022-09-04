import ChartDetail from "components/chartDetail";
import React, { useState } from "react";
import Modal from "../modal/modal.css";

const SearchModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  console.log(header);

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
            {Object.values(header)?.map((item, index) => (
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
            ))}
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
