import React from "react";
import "./Faqs.css";
import FaqsContent from "./FaqsContent";
import FaqsData from "../../fixtures/faqs.json";
import OptForm from "./OptionForm";

function Faqs() {
  return (
    <div className="faqs">
      <div className="faqs__inner">
        <h1 className="faqs__title">Frequently Asked Question</h1>
        {FaqsData.map((item) => {
          return (
            <FaqsContent id={item.id} header={item.header} body={item.body} />
          );
        })}
        <OptForm />
      </div>
    </div>
  );
}

export default Faqs;
