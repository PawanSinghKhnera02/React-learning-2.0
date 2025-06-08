import React, { useState } from "react";
import { Questions } from "./Data/FaqQuestions";

export default function Faqs() {

    let [currentId, setCurrentId] = useState(Questions[0].id)

    let items = Questions.map((itemsData, i)=>{
        
    let itemsDetails = {
        itemsData,
        currentId,
        setCurrentId

    }
        return(
            <FaqItems itemsDetails = {itemsDetails} key={i}/>
        )
    })

  return (
    <div>
      <h1>Frequently Asked Questions (FAQs using props drilling)</h1>
      <div className="faqOuter">
        {items}
      </div>
    </div>
  );
}

function FaqItems({itemsDetails}){

    let { itemsData,currentId,setCurrentId } = itemsDetails;

  return (
    <div className="faqItems">
      <h2 onClick={()=>setCurrentId(itemsData.id)} >{itemsData.question} </h2>
      <p className={currentId === itemsDetails.itemsData.id ? 'activeAns' : ''} >{itemsDetails.itemsData.answer}</p>
    </div>
  );
}
