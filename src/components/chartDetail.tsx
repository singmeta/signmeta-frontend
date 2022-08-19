import * as React from "react";
import "tailwindcss/tailwind.css";

function ChartDetail() {
  // const handleSubmit = () => {
  //   console.log('button active')
  // }

  return (
    <div className="flex flex-col h-fit w-fit my-auto items-center m-auto">
      1st
      <button>
        <a href="/webview">
          <img src="https://i.imgur.com/EP8Qh15.png" alt="charimg" />
        </a>
      </button>
      <span>방구석노엘</span>
      <span>99/10</span>
    </div>
  );
}

export default ChartDetail;
