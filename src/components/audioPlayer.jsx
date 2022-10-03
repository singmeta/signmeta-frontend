import React, { useRef, useState } from "react";
export default function AudioPlayer({ record_url = "" }) {
  const audioPlayer = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const play = () => {
    audioPlayer.current.play();
  };
  const pause = () => {
    audioPlayer.current.pause();
  };
  const stop = () => {
    audioPlayer.current.pause();
    audioPlayer.current.currentTime = 0;
  };
  // const setSpeed = (speed) => {
  //   audioPlayer.current.playbackRate = speed;
  // };
  const onPlaying = () => {
    setCurrentTime(audioPlayer.current.currentTime);
    setSeekValue((audioPlayer.current.currentTime / audioPlayer.current.duration) * 100);
  };
  const SELECT_MUSIC = localStorage.getItem("select_music");
  const SELECT_TITLE = localStorage.getItem("select_title");
  const SELECT_USER_NICK = localStorage.getItem("select_user_nick");

  return (
    <div className="flex justify-center justify-center items-center flex-wrap h-full audio-player-container">
      <audio src={SELECT_MUSIC} ref={audioPlayer} onTimeUpdate={onPlaying}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      {/* <p>{currentTime}</p> */}
      <p className="music-title">{SELECT_TITLE}</p>
      <p className="music-user">{SELECT_USER_NICK}</p>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={seekValue}
        onChange={(e) => {
          const seekto = audioPlayer.current.duration * (+e.target.value / 100);
          audioPlayer.current.currentTime = seekto;
          setSeekValue(e.target.value);
        }}
      />
      <div>
        <button onClick={play} className="music-btn" style={{ marginLeft: "1rem" }}>
          <img src="/images/music-start-btn.svg" alt="" />
        </button>
        <button onClick={pause} className="music-btn">
          <img src="/images/music-stop-btn.svg" alt="" />
        </button>
        <button onClick={stop} className="music-btn">
          <img src="/images/music-reset-btn.svg" alt="" />
        </button>
      </div>
      <style jsx>
        {`
          .audio-player-container {
            width: 100%;
            height: 3rem;
            background: rgba(85, 85, 85, 0.8);
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            margin-top: 0.6rem;
            display: flex;
            align-items: center;
          }
          .music-title {
            font-family: "Mulish";
            font-style: normal;
            font-weight: 800;
            font-size: 20px;
            line-height: 100%;
            /* identical to box height, or 18px */

            letter-spacing: 1.5px;
            text-transform: uppercase;

            color: #ffffff;
            margin-right: 1rem;
          }
          .music-user {
            font-family: "Mulish";
            font-style: normal;
            font-weight: 800;
            font-size: 16px;
            line-height: 100%;
            /* identical to box height, or 18px */

            letter-spacing: 1.5px;
            text-transform: uppercase;

            color: #ffffff;
            margin-right: 1rem;
          }
          .music-btn {
            width: 2rem;
            height: 2rem;
          }
        `}
      </style>
    </div>
  );
}
