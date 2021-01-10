import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Profile from "../../Component/Profile";
import Loading from "../../Component/Profile/LoadingProfile";
import { auth } from "../../config/firebase";
import Home from "../Home";

function SelectProfile({ user }) {
  const history = useHistory();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const currentUser = auth.currentUser || {};

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      if (!auth) {
        history.push("/signin");
      }
    });
  });

  useEffect(
    (authUser) => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    },
    [profile.displayName]
  );
  return profile.displayName ? (
    loading ? (
      <Loading photo={user?.photoURL} />
    ) : (
      <Home user={user} />
    )
  ) : (
    <div>
      <Header btnSignin={null} />
      <Profile user={user} setProfile={setProfile} />
    </div>
  );
}

export default SelectProfile;
