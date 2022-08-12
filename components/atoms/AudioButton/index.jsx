import { useRef } from "react";

const AudioButton = ({ audio }) => {
  const audioRef = useRef();

  const playVoiceHandler = () => {
    if (audioRef) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <button onClick={playVoiceHandler} className="audioButton">
        <span className="audioButton__icon"></span>
      </button>
      <audio ref={audioRef} src={audio}></audio>
    </>
  );
};

export default AudioButton;
