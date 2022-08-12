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
        Voz
      </button>
      <audio ref={audioRef} src={audio}></audio>
    </>
  );
};

export default AudioButton;
