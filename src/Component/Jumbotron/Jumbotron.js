import React from "react";
import "./Jumbotron.css";

function Jumbotron({ title, subTitle, image, alt, direction, key }) {
  return (
    <div
      className="jumbo"
      key={key}
      
    >
      <div className="jumbo__inner"
      style={{
        flexDirection: `${ direction }`,
      }}>
        <div className="jumbo__text">
          <h1 className="jumbo__title">{title}</h1>
          <p className="jumbo__subTitle">{subTitle}</p>
        </div>
        <img className="jumbo__image" src={image} alt={alt} />
      </div>
    </div>
  );
}

export default Jumbotron;
