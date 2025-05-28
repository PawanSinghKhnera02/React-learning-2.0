import { useState } from "react";

import "./App.css";
import { Questions } from "./Data/FaqQuestions.Jsx";

function App() {
  let [ShowAns, setShowAns] = useState(Questions[0].id);

  return (
    <>
      <div>
        <h1> Frequently Asked Questions (FAQs)</h1>
        <div className="faqOuter">
          {Questions.map((faqItems, i) => {
            return (
              <div className="faqItems">
                <h2 onClick={()=>setShowAns(faqItems.id)} >{faqItems.question}</h2>
                <p className= {ShowAns == faqItems.id ? 'activeAns': ''} >
                  {faqItems.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
