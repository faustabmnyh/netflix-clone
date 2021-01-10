import React from "react";
import OptForm from "../Faqs/OptionForm";
import "./BannerJumbotron.css";

function BannerJumbotron() {
  return (
    <div className="jumbotron">
      <div className="jumbotron__banner">
        <div className="jumbotron__bannerTitle">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>

          <OptForm />
        </div>
      </div>
    </div>
  );
}

export default BannerJumbotron;
