import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import MusicList from "./components/MusicList";
import SearchBar from "./components/SearchBar";

function App() {
  const [itemSearch, setItemSearch] = useState("");
  return (
    <div className="App">
      <Header></Header>
      <SearchBar
        setItemSearch={(e) => setItemSearch(e.target.value)}
      ></SearchBar>
      <MusicList itemSearch={itemSearch}></MusicList>
    </div>
  );
}

export default App;
