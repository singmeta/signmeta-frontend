import * as React from "react";
import "tailwindcss/tailwind.css";
import Profile1 from "../images/profile1";

function MainPage() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <section className="h-screen ">
      <div className="flex justify-center ">
        <div className="grid grid-cols-6 gap-3 mt-40 h-full bg-no-repeat bg-singmetaBack flex justify-center rounded p-6 m-10">
          <div className="col-start-1 col-span-2 ... flex items-center ml-3">
            <Profile1 />
            <div className="ml-2">
              <strong>호옹이</strong>
              <p>
                <span className="text-white text-sm">프로필 수정하기</span>
              </p>
            </div>
          </div>
          <div className="col-end-7 col-span-1 ...">exit</div>
          <div className="col-start-1 col-span-1 ...">playlist</div>
          <div className="col-end-5 row-span-2 col-span-2 ...">character</div>
          <div className="col-end-7 col-span-1 ...">chart</div>
          <div className="col-start-1 col-span-1 ...">mypage</div>
          <div className="col-start-1 col-span-1 ...">empty</div>
          <div className="col-end-7 col-span-1 ...">
            <strong>호옹이</strong>
            <strong>호옹이</strong>
            <strong>호옹이</strong>
            <strong>호옹이</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainPage;
