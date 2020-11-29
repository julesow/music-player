import React from "react";

const LibrarySong = ({
  song: { artist, song, cover, name, id, active },
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs
}) => {
  const selectedSongHandler = async () => {
    const selectedSong = songs.filter(song => song.id === id);
    console.log("selectedSong", selectedSong);
    await setCurrentSong(selectedSong[0]);

    // adding active state to

    const newSongs = songs.map(song =>
      song.id === id ? { ...song, active: true } : { ...song, active: false }
    );
    setSongs(newSongs);

    isPlaying && audioRef.current.play();
  };

  return (
    <div
      className={`library-song ${active ? "selected" : ""} `}
      onClick={selectedSongHandler}
    >
      <img alt={name} src={cover}></img>
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{song}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
