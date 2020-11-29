import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  setSongs,
  songs
}) => {
  // to move to utils folder
  const formatTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const activeLibraryHandler = nextPrev => {
    const newSongs = songs.map(song =>
      song.id === nextPrev.id
        ? { ...song, active: true }
        : { ...song, active: false }
    );
    setSongs(newSongs);
  };
  // events handlers

  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const dragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async direction => {
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);

    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentSongIndex + 1) % songs.length]);
    }
    if (direction === "skip-left") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);

        isPlaying && audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentSongIndex - 1) % songs.length]);
    }

    isPlaying && audioRef.current.play();
  };

  const trackAnimation = {
    transform: `translateX(${songInfo.animationPercent}%)`
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`
          }}
          className="track"
        >
          <input
            onChange={dragHandler}
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div style={trackAnimation} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-left")}
          className="skip-left"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
          onClick={playSongHandler}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
