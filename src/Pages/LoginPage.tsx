import * as React from "react";
import "tailwindcss/tailwind.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { save_id } from "../actions/UserIDAction";
import Button from "components/Button";

interface LoginInfo {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userInfo: LoginInfo = {
      email: data.get("userEmail"),
      password: data.get("userPassword"),
    };

    if (userInfo.email !== "" && userInfo.password !== "") {
      axios
        .post(`/users/login`, userInfo)
        .then((response) => {
          if (response.data.success === true) {
            dispatch(save_id(response.data.userId));
            navigate(`/mainpage`);
          }
        })
        .catch((error) => {
          console.log("An error occurred : ", error.response);
          alert("정보가 잘못되었습니다.");
        });
    } else {
      alert("항목을 모두 작성해주세요!");
    }
  };

  return (
    <section className="h-screen">
      <div
        style={{ fontFamily: "IrishGrover" }}
        className="px-6 h-full text-gray-800"
      >
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col items-center justify-center lg:justify-start mb-10">
                <p className="text-4xl font-semibold mb-10">SINGMETA</p>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="userEmail"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="userPassword"
                  placeholder="Password"
                />
              </div>
              <div className="text-center p-10">
                <button
                  type="submit"
                  className="inline-block w-full px-7 py-3 bg-webtn text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg transition duration-150 ease-in-out"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block w-full mt-4 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  google login
                </button>
                {/* <ButterBtn props={"rlahWL"} /> */}
                <p className="text-sm font-semibold mt-7 pt-1 mb-0">
                  <a href="/signup" className="text-neutral-400">
                    아직 회원이 아니신가요?
                  </a>
                </p>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  <a href="#!" className="text-neutral-400">
                    아이디/비밀번호를 잊으셨나요?
                  </a>
                </p>
              </div>
            </form>
            <Button
              clickHandler={function(): void {
                alert("THING");
              }}
              label={"asd"}
              size={"sm"}
              backgroundColor={"white"}
              color={"black"}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
