import React from "react";

function ButterBtn({ props }: any) {
  return (
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 inline-block w-full mt-4 px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded-full shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out">
      {props}
    </button>
  );
}

export default ButterBtn;
