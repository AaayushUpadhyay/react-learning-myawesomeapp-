import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
 return (
     <>
    {/* agar sirf 'activeClassname' use karenge toh page dono links pe css apply hogi */}
    {/* 'exact' use karne se usi link par css apply hoga jispe click kiya  */}
    <div className="menu_style">
        <NavLink to='/' exact activeClassName="active_class">About us</NavLink>
    <NavLink to='/contact/' exact activeClassName="active_class" >Contact us</NavLink>
    <NavLink to='/services/' exact activeClassName="active_class" >Services</NavLink>
    <NavLink to='/user/' exact activeClassName="active_class" >User</NavLink>
    {/* <Link to='/'>About us</Link>
    <Link to='/contact/'>Contact us</Link> */}
    <br/>
    {/* <a href="/">About</a>
    <a href="/contact/">Contact</a> */}
    </div>
     </>
 );
};

export default Navbar;