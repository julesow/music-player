import React from "react";

const LibrarySong = ({
  song: { artist, song, cover, name, id },
  setCurrentSong,
  songs,
  audioRef,
  isPlaying
}) => {
  const selectedSongHandler = () => {
    const selectedSong = songs.filter(song => song.id === id);
    console.log("selectedSong", selectedSong);
    setCurrentSong(selectedSong[0]);
    const playPromise = audioRef.current.play();
    isPlaying &&
      playPromise.then(audio => {
        audioRef.current.play();
      });
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
