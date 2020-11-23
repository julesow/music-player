import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  console.log(songs);

  return (
    <div className="library">
      <h2>Library</h2>
      <div>
        {songs.map(song => (
          <LibrarySong key={song.name} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
