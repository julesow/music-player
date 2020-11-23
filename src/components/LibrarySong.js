import React from "react";

const LibrarySong = ({
  song: { artist, song, cover, name, id },
  setCurrentSong,
  songs
}) => {
  const selectedSongHandler = () => {
    const selectedSong = songs.filter(song => song.id === id);
    console.log("selectedSong", selectedSong);
    setCurrentSong(selectedSong[0]);
  };

  return (
    <div className="library-song" onClick={selectedSongHandler}>
      <img alt={name} src={cover}></img>
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{song}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
