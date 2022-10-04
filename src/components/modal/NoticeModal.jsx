import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../modal/modal.css";
import NoticeDetailModal from "components/modal/NoticeDetailModal";

const NoticeModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  const [noticeList, setNoticeList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [itemID, setItemID] = useState("");

  useEffect(() => {
    loadNoticeList();
  }, []);
  const loadNoticeList = () => {
    axios.get(`/notices`).then((res) => {
      setNoticeList(res.data.notices);
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <main className="flex flex-col text-white ">
          <p className="flex justify-center text-2xl mb-5 font-bold">
            공지사항
          </p>
          {Object.values(noticeList)?.map((item, index) => (
            <div className="flex p-2" key={index}>
              <button
                onClick={() => {
                  setModalOpen(true);
                  setItemID(item._id);
                }}
                className="truncate justify-left flex_title title"
              >
                <p className="truncate justify-left flex_title title">
                  {item.title}
                </p>
              </button>
              <p className="truncate justify-left flex_item">{item.type}</p>
            </div>
          ))}
          <button className="close mt-4" onClick={close}>
            close
          </button>
          <NoticeDetailModal
            open={modalOpen}
            close={closeModal}
            header={itemID}
          ></NoticeDetailModal>

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

export default NoticeModal;
