import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-left" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
