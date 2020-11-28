import React from "react";

const Song = ({ currentSong: { artist, song, cover, name } }) => {
  return (
    <div className="song-container">
      <img alt={name} src={cover}></img>
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
};

export default Song;
