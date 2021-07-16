import React, { useState } from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion"

const Accordion=()=>{
    let [data,setData]=useState(questions);
    return(
<>
<section className="main-div">
<h1>React Interview Questions</h1>
{
    data.map((elem)=>{
        let id=elem.id;
        return <MyAccordion key={id} {...elem}/> 

    })

}
</section>
</>
    );
}

export default Accordion;