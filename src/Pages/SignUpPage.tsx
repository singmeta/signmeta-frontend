import * as React from "react";
import "tailwindcss/tailwind.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  nickname: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
}

interface UserEmail {
  email: String | null;
}

function SignUpPage() {
  const navigate = useNavigate();

  const checkEmail = () => {
    const user_email: UserEmail = {
      email: userEmail,
    };
    axios
      .post(`/users/email/validation`, user_email)
      .then((res) => {
        alert("사용가능한 이메일입니다.");
      })
      .catch((error) => {
        console.log("An error : ", error);
        alert("사용 중인 이메일입니다.");
        setUserEmail("");
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data1 = new FormData(e.currentTarget);

    const user: User = {
      email: data1.get("email"),
      password: data1.get("password"),
      nickname: data1.get("nickname"),
      phone: data1.get("phone"),
    };

    if (
      user.email !== "" &&
      user.password !== "" &&
      user.nickname !== "" &&
      user.phone !== ""
    ) {
      axios
        .post<User>(`/users/register`, user)
        .then((response) => {
          alert("회원가입이 완료되었습니다!");
          navigate(`/`);
        })
        .catch((error) => {
          console.log("An error occurred : ", error.response);
        });
    } else {
      alert("모든 항목을 작성해주세요");
    }
  };

  const [userEmail, setUserEmail] = useState("");

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
                <p className="text-4xl font-semibold mb-10">JOIN US!!!</p>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">Email</p>
                <input
                  type="text"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
                <button
                  className="mt-2 ml-2 bg-webtn text-white rounded-full text-xs px-3 py-1"
                  onClick={checkEmail}
                  type="button"
                >
                  중복확인
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">Password</p>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <div className="mb-6">
                <p className="text-sm font-semibold mb-1 ml-1">Nickname</p>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="nickname"
                />
              </div>

              <div className="mb-10">
                <p className="text-sm font-semibold mb-1 ml-1">Phone</p>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="phone"
                />
              </div>

              <div className="text-center p-10">
                <button
                  type="submit"
                  className="inline-block w-full px-7 py-3 bg-webtn text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md focus:bg-hoverWebtn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hoverWebtn active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpPage;
