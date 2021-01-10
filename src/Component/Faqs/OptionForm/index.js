import React from "react";
import "./OptForm.css";

function OptForm() {
  return (
    <div className="optform">
      <p className="optform__text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input
        placeholder="Email Address"
        className="optform__input"
        type="text"
      />
      <button className="optform__botton">
        GET STARTED <img src="/images/chevron-right.png" alt=""/>
      </button>
    </div>
  );
}

export default OptForm;
