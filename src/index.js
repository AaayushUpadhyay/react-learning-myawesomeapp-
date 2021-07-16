import React from 'react';
// agar hume html jaisa dikhne wala jsx use karna hai toh react module import karna padega
import ReactDOM from 'react-dom';
// importing css file
import './index.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
// import {List} from './App';
// ReactDOM.render(
//   kya place karna hai,
//   kaha place karna hai
// );

// in react its not HTML its JSX(Javascript XML)

// ReactDOM.render(
//   <h1>Hello World !</h1>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// rendering multiple JSX elements.
// ReactDOM renders only single element
// so group all your elements inside <React.Fragment></React.Fragment> or simply <></>
// ReactDOM.render(
//   <>
//   <h1>Hello World !</h1>
//   <p>My name is Ayush.</p>
//   </>,
//   document.getElementById('root')
// );

// JSX challenge 1
// ReactDOM.render(
//   <>
//     <h1>Ayush Upadhyay's Movies Pick</h1>
//     <h5>Top 5 netflix movies</h5>
//     <p>Movie Name</p>
//     <p>Movie Name</p>
//     <p>Movie Name</p>
//     <p>Movie Name</p>
//     <p>Movie Name</p>
//   </>,
//   document.getElementById('root')
// );


// HOW TO USE JAVASCRIPT EXPRESSIONS INSIDE JSX
// we use {}
// const fname="Ayush"
// const lname=" Upadhyay"
// ReactDOM.render(
//   <>
//   <h1>My name is {fname} {lname}</h1>
//   </>,
//   document.getElementById('root')
// );


// HOW TO USE external,inline CSS

// 'class' is already  reserved word in react , so we use className

// const heading={
//   color:'#fa9191',
//   textTransform:'capitalize',
//   textAlign:'center',
//   textShadow:'0px 2px 4px #ffe9c5',
//   margin:'70px 0px',

// }

// ReactDOM.render(
//   <>
//   {/* <h1 className="heading">My name is {fname} {lname}</h1> */}
//   <App/>
//   <ol>
//    <List/>
//    </ol>
//   </>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//   <h1 className="heading">My name is Ayush 😄 ❤️</h1>
  
//   </>,
//   document.getElementById('root')
// );

// HOOKS 
ReactDOM.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>,
    document.getElementById('root')
  );