import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useStateValue } from "../../context/StateProvider";
import "./Header.css";

function Header({ btnSignin, user, isHome }) {
  const [show, handleShow] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [{}, dispatch] = useStateValue();

  // ini masih pembangunan(ini sudah bisa ke kirim)
  useEffect(() => {
    dispatch({
      type: "CHANGE_VALUE",
      value: searchTerm,
    });
  }, [searchTerm]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const handleSignOut = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={`header ${user && `${show && "header__black"}`}`}>
      <div className="header__left">
        {isHome ? (
          <>
            <img
              className="header__logo"
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt=""
            />
            <a href="#test" className="header__textLink">
              Series
            </a>
            <a href="#test" className="header__textLink">
              Films
            </a>
          </>
        ) : (
          <img
            className="header__logo"
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt=""
          />
        )}
      </div>
      <div className="header__right">
        {!user ? (
          btnSignin === null ? null : (
            <Link to="/signin">
              <button className="signUp">Sign In</button>
            </Link>
          )
        ) : (
          <>
            <div className="header__search">
              <img
                alt="search"
                src="./images/search.png"
                className="header__searchIcon"
                onClick={() => setSearchActive((searchActive) => !searchActive)}
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`header__searchInput ${
                  searchActive && "header__searchInputActive"
                }`}
              />
            </div>
            <div className="header__rightMain">
              <img
                className="header__avatar"
                src={`images/users/${user?.photoURL}.png`}
                alt="avatar netlix"
              />
              <div className="header__dropdown">
                <div className="header__group">
                  <div className="header__profile">
                    <img
                      className="header__avatar"
                      src={`images/users/${user?.photoURL}.png`}
                      alt="avatar netflix"
                    />
                    <p className="header__textName">{user.displayName}</p>
                  </div>
                  <p className="header__signout" onClick={handleSignOut}>
                    Sign Out
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
