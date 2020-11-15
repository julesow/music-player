import { useState } from "react";
import "./styles/app.scss";

import data from "./data";

import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setcurrentSong] = useState(songs[0]);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
