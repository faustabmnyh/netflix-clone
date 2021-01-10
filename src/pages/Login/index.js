import React from "react";
import Faqs from "../../Component/Faqs/Faqs";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import BannerJumbotron from "../../Component/Jumbotron/BannerJumbotron";
import Jumbotron from "../../Component/Jumbotron/Jumbotron";
import JumboJumbo from "../../fixtures/jumbo.json";

function Login() {
  return (
    <div>
      <Header />
      <BannerJumbotron />
      {JumboJumbo.map((item) => {
        return (
          <Jumbotron
            id={item.id}
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            direction={item.direction}
            alt={item.alt}
          />
        );
      })}
      <Faqs />
      <Footer />
    </div>
  );
}

export default Login;
