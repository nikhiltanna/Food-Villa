// Header component is functional component
import {Title } from '../../App'
import {Link } from 'react-router-dom'
import { useContext } from 'react';
import UserContext from './../utils/UserContext'
import { useSelector } from "react-redux";
const Header = function (){
  const {user}=useContext(UserContext);
  const cartitems=useSelector(storre=>storre.cart.items);
    return (
      <div className="header">
        <Title/>
       <div className="nav-items">
        
        <ul>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li><Link to="/">Home</Link></li>
          <li>
          <Link to="/about">About Us</Link></li>
          <li>
          <Link to="/instamart">Instamart</Link></li>
          <li>
          <Link to="/cart">Cart-{cartitems.length}</Link></li>
          <li>
          <Link to="/contact">Contact</Link></li>
        </ul>
       </div>
      </div>
    )
  }

  export default Header;