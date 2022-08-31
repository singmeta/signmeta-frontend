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
    setSeekValue(
      (audioPlayer.current.currentTime / audioPlayer.current.duration) * 100
    );
  };
  const SELECT_MUSIC = localStorage.getItem("select_music");
  const SELECT_TITLE = localStorage.getItem("select_title");

  return (
    <div className="flex justify-center justify-center items-center flex-wrap h-full g-6">
      <audio src={SELECT_MUSIC} ref={audioPlayer} onTimeUpdate={onPlaying}>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <br />
      {/* <p>{currentTime}</p> */}
      <p>{SELECT_TITLE}</p>
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
        <button onClick={play}>▶</button>
        <button onClick={pause}>⏸</button>
        <button onClick={stop}>⏹</button>
      </div>
    </div>
  );
}
