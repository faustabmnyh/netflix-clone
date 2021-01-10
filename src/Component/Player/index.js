import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Player.css";

function Player() {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <div className="player">
  {showPlayer
        ? ReactDOM.createPortal(
            <div
              className="player__overlay"
              onClick={() => setShowPlayer(false)}
            >
              <div className="player__video">
                <video id="player__netflix" controls>
                  <source src="./video/bam.mp4" type="video/mp4" />
                </video>
              </div>
            </div>,
            document.body
          )
        : null}
        <button
          className="player__button"
          onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
        >
          Play
        </button>
    </div>
  );
}

export default Player;
