// import {React,useContext} from "react";
// import { FirstName, LastName } from "./App";

// when passing one value i.e FirstName
// const CompC=()=>{
//     return (
//         <>
//         <FirstName.Consumer>
//         {
//             (fname)=>{
//                 return <h1>My Name is {fname} </h1>
//             }
//         }

//         </FirstName.Consumer>
//         </>
//     );
// }

// when passing two values i.e FirstName and LastName
// const CompC = () => {
//   return (
//     <>
//       <FirstName.Consumer>
//         {(fname) => {
//           return (
//             <LastName.Consumer>
//               {(lname) => {
//                 return (
//                   <h1>
//                     My Name is {fname} {lname}
//                   </h1>
//                 );
//               }}
//             </LastName.Consumer>
//           );
//         }}
//       </FirstName.Consumer>
//     </>
//   );
// };

// using useContext Hook
// const CompC=()=>{
//     const fname=useContext(FirstName);
//     const lname=useContext(LastName);
//         return (
//             <>
//             <h1>My Name is {fname} {lname}</h1>
//             </>
//         );
//     }

// export default CompC;
