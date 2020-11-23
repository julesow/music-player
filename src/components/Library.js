import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div>
        {songs.map(song => (
          <LibrarySong
            key={song.id}
            id={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            songs={songs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
