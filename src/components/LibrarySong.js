import React from "react";

const LibrarySong = ({ song: { artist, song, cover, name } }) => {
  return (
    <div className="library-song">
      <img alt={name} src={cover}></img>
      <div className="song-description">
        <h3>{artist}</h3>
        <h4>{song}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
