import React, { useState } from "react";

const MyAccordion=({question,answer,id})=>{
    const [show,setShow]=useState(false);
    const reveal=()=>{
        setShow(!show);
    }
    return (
        <>
        <div className="main-heading">
            <p id={id} onClick={reveal}>+</p>
            <h3>{question}</h3>
        </div>
       
            
        {
            show && <p className="answers">{answer}</p>
        }
           
      
        </>
    );
}

export default MyAccordion;