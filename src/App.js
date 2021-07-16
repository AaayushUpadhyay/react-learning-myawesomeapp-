import React from "react";
// import React, { createContext, useState} from "react";
// agar hume html jaisa dikhne wala jsx use karna hai toh react module import karna padega
// import ReactDOM from "react-dom";
// import AddIcon from "@material-ui/icons/Add";
// import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
// import Button from "@material-ui/core/Button";
// import Tooltip from "@material-ui/core/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
// import Accordion from "./Accordion";
// import { useEffect } from "react";

import { Route, Switch, Redirect } from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from "./Services";
import User from "./User";
// import CompA from "./ComponentA";
// const fname="Ayush"
// const lname=" Upadhyay"
// const heading={
//   color:'#fa9191',
//   textTransform:'capitalize',
//   textAlign:'center',
//   textShadow:'0px 2px 4px #ffe9c5',
//   margin:'70px 0px',

// }

// // this is not a js function this is a component
// // component ke naam ka first letter humesha Capital
// function Heading(){
//     return <h1 style={heading}>My name is {fname} {lname}</h1>;

// }

// const img1="https://cdn.pixabay.com/photo/2017/12/31/19/45/girls-3053051__340.jpg"
// const img2="https://images.pexels.com/photos/745767/pexels-photo-745767.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
// const img3="https://images.pexels.com/photos/245931/pexels-photo-245931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

// function Images(){
//     return <>
//         <div className="img_div">
//   <img src={img1} />
//   <img src={img2} />
//   <img src={img3} />

//   </div>
//     </>;

// }
// function List(){
//     return <>
//       <li>thapa</li>
//     </>;

// }

// useState

// function App() {
//   const [count,setCount]= useState(0);

//   const Inc=()=>{
//     setCount(count +1);

//   };

//   return (
//     <>
//     <h1>{count}</h1>
//     <button onClick={Inc}>Click Me!</button>
//     </>
//   );
// }

// react hooks challenge video 34

// const App=()=>{
//   let date=new Date().toLocaleTimeString()
//   let [state,newState]=useState(date)
//   const Inc=()=>{
//     let ndate=new Date().toLocaleTimeString()
//     newState(ndate);

//   }
//     return (
//     <>
//     <h1>{state}</h1>
//     <button onClick={Inc}>Click Me!</button>
//     </>
//   );

// }

// Project - Digital Clock
// const App = () => {
//   let ctime=new Date().toLocaleTimeString();
//   let [time,ntime]=useState(ctime)
//   let updateTime=()=>{
//     let updatedTime=new Date().toLocaleTimeString();
//     ntime(updatedTime);
//   }
//   setInterval(updateTime,1000)
//   return (
//     <>
//       <h1>{time}</h1>

//     </>
//   );
// };

// video 36 (Handling events in React js)
// const App=()=>{
//   let [bg,setBg]=useState("purple")
//   let [name,setName]=useState("Click Me ! 😄")
//   const change=()=>{
//     setBg("yellow");
//     setName("Hello 💓");

//   }
//   const rChange=()=>{
//     setBg("purple")
//     setName("Click Me ! 😄");
//   }
//   return (

//     <div style={{ backgroundColor:bg }}>
//       <button onMouseEnter={change} onMouseLeave={rChange}>{name}</button>
//     </div>
//   );
// }

// video no 37,38

//  const App=()=>{
//    let [name,newName]=useState("")
//    let [lName,newLname]=useState("")
//    let [fName,newFname]=useState()
//    const inputEvent=(e)=>{
// newFname(e.target.value)
//    }

//    const inputEventTwo=(e)=>{
//      newLname(e.target.value)
//   }

//    const display=(e)=>{
//      e.preventDefault();
//      let fullName=fName+"  "+lName;
// newName(fullName)
//    }

//    return (

//     <div >

//     <h1>Hello  {name}</h1>

//     <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} value={fName} ></input><br/>
//     <input type="text" placeholder="Enter Your Last Name" onChange={inputEventTwo} value={lName} ></input>
//       <button onClick={display}>Click Me ! 👍</button>
//       {/* <button type="submit">Click Me ! 👍</button>  */}

//     </div>

/* <form onSubmit={display}>
<div >
    
    <h1>Hello  {name}</h1>
    
    <input type="text" placeholder="Enter Your First Name" onChange={inputEvent} value={fName} ></input><br/>
    <input type="text" placeholder="Enter Your Last Name" onChange={inputEventTwo} value={lName} ></input>
      
      { <button type="submit">Click Me ! 👍</button>  }
      
    </div>
</form> */

//    );
//  }

// video no 39 , Handling multiple input fields
//   const App=()=>{

// let [fullName,setFullName]=useState({

//   'fname':"",
// 'lname':"",

// });

// let [finalName,setFinalName]=useState("");

// const inputEvent=(e)=>{
// let value=e.target.value;
// let name=e.target.name;
// console.log(value,name);

// setFullName((pVal)=>{

//   // if(name==="fName"){
//   //   return {
//   //     fname:value,
//   //     lname:pVal.lname,
//   //   };
//   // }
//   // else if(name==="lName"){
//   //   return {
//   //     fname:pVal.fname,
//   //     lname:value,
//   //   };

//   // }

//   return {
//     ...pVal,
//     [name]:value,
//   };

// });

// }

// const click=(e)=>{
//   console.log(fullName);

//   setFinalName(fullName.fname+ "  "+fullName.lname)
// }

//     return (
//           <div >

//     <h1>Hello {finalName}</h1>

//     <input type="text" placeholder="Enter Your First Name" onChange={inputEvent}  name="fname" value={fullName.fname} ></input><br/>
//     <input type="text" placeholder="Enter Your Last Name"  onChange={inputEvent} name="lname" value={fullName.lName} ></input>
//       <button onClick={click}>Click Me ! 👍</button>
//       {/* <button type="submit">Click Me ! 👍</button>  */}

//     </div>
//     );
//   }

// video no 44

// const App=()=>{
//   let [value,setValue]=useState(0);
// const inc=()=>{
//   setValue(value+1);
// }
// const dec=()=>{
//   let v=value-1;
//   if(v>=0){setValue(v);}
//   else{setValue(0);
//     alert("0 limit reached");}
// }
//   return (
//     <>
//     <div className="main_div">
//       <div className="center_div">
//         <h1>{value}</h1>
//         <div className="btn_div">
//         <Tooltip title="Increase">
//         <Button onClick={inc} color="primary"><AddIcon /></Button>
//         </Tooltip>
//         <Tooltip title="Decrease">
//         <Button onClick={dec} color="primary"><RemoveOutlinedIcon /></Button>
//         </Tooltip>

//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// video 50
// const App=()=>{
//   return (
//     <>
//     <h1>Welcome to my website</h1>
//     <button className="btn btn-success">Click Here</button>
//     </>
//   );
// }

// video 52
// const App=()=>{

//   return (
//     <>
//    <Accordion/>
//     </>
//   );
// }

// video no 55
// React hooks provide a concept called Context
// React context api allows you to access data at different levels of component tree without passing the data at all the levels

// passing only one value i.e FirstName
// const FirstName=createContext();
// const App=()=>{
//   return (
//     <>
//     <FirstName.Provider value={"Ayush"} >
//     <CompA/>
//     </FirstName.Provider>
//     </>
//   );
// }

// passing only two values
// const FirstName = createContext();
// const LastName = createContext();
// const App = () => {
//   return (
//     <>
//       <FirstName.Provider value={"Ayush"}>
//         <LastName.Provider value={"Upadhyay"}>
//           <CompA />
//         </LastName.Provider>
//       </FirstName.Provider>
//     </>
//   );
// };

// video no 57
// ek baar render method call ho jaye uske baad agar kuch kaam karna hai toh useEffect karenge
// jab jab render methid call hoga useEffect call hoga
// const App=()=>{
//   let [state,setState]=useState(0);
//   let [states,setStates]=useState(0);
//   // useEffect(()=>{
//   //   alert('you clicked');
//   // },[]) --> useEffect ni chalega
//   useEffect(()=>{
//    document.title=`you clicked ${state}`
//   },[states])
//   const click=()=>{
//     setState(state+1);
//   }
//   const click2=()=>{
//     setStates(states+1);
//   }
//   return (
//     <>
//       <button className="btn btn-lg btn-warning mx-5" onClick={click}>Click {state}</button>
//       <button className="btn btn-lg btn-warning" onClick={click2}>Click {states}</button>
//     </>
//   );
// }

// video no 61
// const App=()=>{
//   return (
//     <>
//     {/* agar switch ni likhenge to saare dikha dega */}
//     <Switch>
//     {/* 'exact' matlab jo path exact likha hai wahi dikhao 
//     agar 'exact' nhi denge toh koi bhi url ho humesha '/' path wala page hi dikhayega */}
//       <Route exact path='/' component={About}/>
//       <Route exact path='/contact/' component={Contact}/>
//       {/* koi bhi aur url ho toh error page */}
//       <Route  component={Error}/>
//     </Switch>

//     {/* <About/>
//     <Contact/> */}
//     </>
//   );
// }



// video no 62
// const App=()=>{
//   return (
//     <>
//     {/* agar switch ni likhenge to saare dikha dega */}
//     <Navbar />
//     <Switch>
//     {/* 'exact' matlab jo path exact likha hai wahi dikhao 
//     agar 'exact' nhi denge toh koi bhi url ho humesha '/' path wala page hi dikhayega */}
//       <Route exact path='/' component={About}/>
//       <Route exact path='/contact/' component={Contact}/>
//       <Route exact path='/services/' component={Services}/>
//       {/* koi bhi aur url ho toh error page */}
//       <Route  component={Error}/>
//     </Switch>

//     {/* <About/>
//     <Contact/> */}
//     </>
//   );
// }

// code for video 64
// passing props in Route component
// const App=()=>{
//   return (
//     <>
//     {/* agar switch ni likhenge to saare dikha dega */}
//     <Navbar />
//     <Switch>
//     {/* 'exact' matlab jo path exact likha hai wahi dikhao 
//     agar 'exact' nhi denge toh koi bhi url ho humesha '/' path wala page hi dikhayega */}
//       <Route exact path='/' component={()=><About name="Ayush"/>}/>
//       {/* instead of 'component' we can also use 'render' */}
//       <Route exact path='/contact/' component={Contact}/>
//       <Route exact path='/services/' component={Services}/>
//       {/* koi bhi aur url ho toh error page */}
//       <Route  component={Error}/>
//     </Switch>

//     {/* <About/>
//     <Contact/> */}
//     </>
//   );
// }


// code for video no 66
// useParams hook
const App=()=>{
  return (
    <>
    {/* agar switch ni likhenge to saare dikha dega */}
    <Navbar />
    <Switch>
    {/* 'exact' matlab jo path exact likha hai wahi dikhao 
    agar 'exact' nhi denge toh koi bhi url ho humesha '/' path wala page hi dikhayega */}
      <Route exact path='/' component={()=><About name="Ayush"/>}/>
      {/* instead of 'component' we can also use 'render' */}
      <Route exact path='/contact/' component={Contact}/>
      <Route exact path='/services/' component={Services}/>
      <Route exact path='/user/' component={User}/>
      <Route exact path='/user/:fname/:lname' component={User}/>
      {/* koi bhi aur url ho toh error page */}
      {/* <Route  component={Error}/> */}
      {/* agar hum chahte hai ki user goes to a particular url on entering different url */}
      <Redirect to='/'/>
    </Switch>

    {/* <About/>
    <Contact/> */}
    </>
  );
}



// // default ko aise export karenge
export default App;
// export { FirstName,LastName };
// // baki sabkuch(variables,functions) aise object ke form mei export hoga
// export {List,};
