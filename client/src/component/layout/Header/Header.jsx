import React from 'react';
import "./Header.scss";
import { Link } from 'react-router-dom';
import {BsSearch} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai"
const Header = () =>{
  return (
        <nav style={{zIndex:"+10"}}>
        <div className="navbar">
          <div className="container nav-container">
              <input className="checkbox" type="checkbox" name="" id="" />
              <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
              </div>  
            <div className="menu-items">
              <li><Link to="/search">{<BsSearch/>}  Search Products</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">{<AiOutlineUser/>} Login / Account</Link></li>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header