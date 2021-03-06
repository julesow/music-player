import { useRef, useState } from "react";
import "./styles/app.scss";

import data from "./data";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  //states
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercent: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  // ref
  const audioRef = useRef(null);

  const timeUpdateHandler = e => {
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    const roundedCurrent = Math.round(currentTime);
    const roundedDuration = Math.round(duration);
    const animationPercent = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({ ...songInfo, duration, currentTime, animationPercent });
  };

  const onEndedSongHandler = async () => {
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);

    await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    isPlaying && audioRef.current.play();
  };
  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library
        className="library"
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />

      <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={onEndedSongHandler}
      ></audio>
    </div>
  );
}

export default App;
