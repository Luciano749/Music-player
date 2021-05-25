import { useState } from "react";

import Musics from "./Musics";

const Modal = (props) => {
  const [audioFile, setAudioFile] = useState("");
  const [audioName, setAudioName] = useState("");
  const [audioFileName, setAudioFileName] = useState("");

  const handleAudioFile = (e) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setAudioFile(fileReader.result);
      setAudioFileName(e.target.files[0].name);
    };

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const sendMusic = () => {
    if (audioName !== "" && audioFile !== "") {
      Musics.push({ name: audioName, src: audioFile });
      props.closeModal(false);
    }
  };

  return (
    <div
      id="container"
      onClick={(e) => {
        if (e.currentTarget === e.target) props.closeModal(false);
      }}
    >
      <div id="modal-container">
        <input
          type="text"
          maxLength="9"
          placeholder="NOME"
          onChange={(e) => setAudioName(e.target.value)}
        />

        <label htmlFor="input-file">+</label>
        <input
          type="file"
          onChange={handleAudioFile}
          id="input-file"
          accept="audio/*"
        />
        <h3>{audioFileName}</h3>
        <button onClick={sendMusic} id="send-file">
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default Modal;
