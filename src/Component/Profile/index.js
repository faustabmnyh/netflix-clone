import React from "react";
import "./Profile.css";

function Profile({ user, setProfile }) {
  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Who's watching ?</h1>
        <div
          className="profile__user"
          onClick={() =>
            setProfile({
              displayName: user?.displayName,
              photoURL: user?.photoURL,
            })
          }
        >
          <ul>
            <li>
              {user ? (
                <img
                  src={`/images/users/${user?.photoURL}.png`}
                  alt=""
                  className="profile__userImage"
                />
              ) : (
                <img
                  src={`/images/loading.gif`}
                  alt=""
                  className="profile__userImage"
                />
              )}
            </li>

            <li>
              <p className="profile__userName">{user?.displayName}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
