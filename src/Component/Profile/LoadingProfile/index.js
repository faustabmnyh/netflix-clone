import React from "react";
import "./LoadingProfile.css";

function Loading({ photo }) {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <img
          src={`images/users/${photo}.png`}
          alt="users netflix"
          className="loading__imageProfile"
        />
      </div>
    </div>
  );
}

export default Loading;
