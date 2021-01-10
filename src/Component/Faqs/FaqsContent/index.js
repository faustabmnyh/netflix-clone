import React, { useState } from "react";
import "./FaqsContent.css";

function FaqsContent({ id, body, header }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <div className="faqsContent" key={id}>
      <div
        className="faqsContent__header"
        onClick={() => setToggleShow((toggleShow) => !toggleShow)}
      >
        {header}
        {toggleShow ? (
          <img src="/images/close-slim.png" alt="close" />
        ) : (
          <img src="/images/add.png" alt="add" />
        )}
      </div>
      {toggleShow ? <div className="faqsContent__body">{body}</div> : null}
    </div>
  );
}

export default FaqsContent;
