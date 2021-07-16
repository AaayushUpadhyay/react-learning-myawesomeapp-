import React from 'react'
import { useParams,useLocation} from 'react-router-dom';
const User=()=>{
    let {fname,lname}=useParams();
    let location=useLocation();
    // let history=useHistory();
    // console.log(history);
    
  return (
      <>
      <h1>Hello dear {fname} {lname}. You are amazing</h1>
      <p>{location.pathname}</p>
      </>
  );
};

export default User;