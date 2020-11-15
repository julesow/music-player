import React from "react";

const Song = ({ currentSong: { artist, song, cover } }) => {
  return (
    <div className="song-container">
      <img src={cover}></img>
      <h2>{artist}</h2>
      <h3>{song}</h3>
    </div>
  );
};

export default Song;
