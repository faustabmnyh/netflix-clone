import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Row from "../../Component/Row/Row";
import { auth } from "../../config/firebase";

function Home({ user }) {
  const history = useHistory();

  //   bair kalo gaada yang login gabisa masuk
  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      if (!auth) {
        history.push("/signin");
      }
    });
  });

  return (
    <>
      <Header user={user} isHome={true}/>
      <Banner />
      <Row />
      <Footer />
    </>
  );
}

export default Home;
