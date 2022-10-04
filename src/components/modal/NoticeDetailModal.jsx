import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../modal/modal.css";

const NoticeDetailModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [title, setTitle] = useState("null");
  const [contents, setContents] = useState("null");
  const [noticeType, setNoticeType] = useState("null");

  useEffect(() => {
    loadNoticeDetail();
  }, [header]);
  const loadNoticeDetail = () => {
    axios.get(`/notices/${header}`).then((res) => {
      console.log(res.data.notice);
      setTitle(res.data.notice.title);
      setContents(res.data.notice.contents);
      setNoticeType(res.data.notice.type);
    });
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <main className="flex flex-col text-white items-center">
          <p className="text-2xl mb-3 font-bold justify-items-start">{title}</p>
          <div className="flex flex-col items-end">
            <p className="mb-4 ">{noticeType}</p>
            <p className="border border-slate-500 p-5 rounded-xl">{contents}</p>
          </div>
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
            flex: 2; /* flex: 1 1 0 */
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

export default NoticeDetailModal;
