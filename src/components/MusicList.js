import { useState, useEffect } from "react";

import Modal from "./Modal";
import Musics from "./Musics";

const MusicList = () => {
  // open modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = (e) => {
    setIsModalVisible(e);
  };

  return (
    <>
      <ul>
        {Musics.length > 0 ? (
          Musics.map((music, idx) => (
            <li key={idx}>
              <h3>{music.name}</h3>
              <audio src={music.src} controls></audio>
            </li>
          ))
        ) : (
          <h1>Nenhuma música encontrada,adicione clicando no +</h1>
        )}
      </ul>

      <button id="openSendFile" onClick={() => setIsModalVisible(true)}>
        +
      </button>

      {isModalVisible ? (
        <Modal
          setStateMusics={(e) => Musics}
          stateMusics={Musics}
          closeModal={closeModal}
        ></Modal>
      ) : null}
    </>
  );
};

export default MusicList;
