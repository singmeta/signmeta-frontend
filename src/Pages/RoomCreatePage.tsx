import * as React from "react";
import "tailwindcss/tailwind.css";

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

  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div className="flex flex-col items-center justify-center lg:justify-start mb-10">
                <p className="text-4xl font-semibold mb-10">
                  노래방 환경을 선택해주세요
                </p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">방 제목</p>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">참가인원</p>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">
                  비밀번호 설정
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="ml-3 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </p>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="nickname"
                />
              </div>

              <div className="text-center p-10">
                <button
                  type="button"
                  className="inline-block w-full px-7 py-3 bg-webtn text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg transition duration-150 ease-in-out"
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
