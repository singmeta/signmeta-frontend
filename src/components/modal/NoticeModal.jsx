import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../modal/modal.css";

const NoticeModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    loadNoticeList();
  }, []);
  const loadNoticeList = () => {
    axios.get(`/notices`).then((res) => {
      setNoticeList(res.data.notices);
    });
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <main className="flex flex-col text-white ">
          <p className="flex justify-center text-2xl mb-5 font-bold">공지사항</p>
          {Object.values(noticeList)?.map((item, index) => (
            <div className="flex p-2" key={index}>
              <p className="truncate justify-left flex_title title">{item.title}</p>
              <p className="truncate justify-left flex_item">{item.type}</p>
            </div>
          ))}
          <button className="close mt-4" onClick={close}>
            close
          </button>
          <style>
            {`
          .title {
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .flex_title {
            flex: 5; /* flex: 1 1 0 */
            overflow: auto;
          }
          .flex_item {
            flex: 1; /* flex: 1 1 0 */
            overflow: auto;
          }
        `}
          </style>
        </main>
      ) : null}
    </div>
  );
};

export default NoticeModal;
