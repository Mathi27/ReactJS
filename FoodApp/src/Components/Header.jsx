import {LOGO} from '../utils/Constants';
import { useState } from 'react';
import { Link, Router } from 'react-router-dom';
const Header = () => {
     
    const [title,setTitle]=useState("Veg");
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to={'/'}><img className='logo' src={LOGO}/></Link>
                <h1>Food<span className='hub'>Hub</span></h1>
                <p>{title}</p>
                <button  onClick={()=>setTitle("Non Veg")}  >Switch</button>
            </div>
    
            <div className='nav-items'>
               <ul>
                  <li><Link to="/home" className='nav-links'>Home</Link></li>
                  <li><Link to="/about" className='nav-links' >About Us</Link></li>
                  <li><Link to="/contact" className='nav-links' >Contact Us</Link></li>
                  <li><Link to="/Instamart" className='nav-links'>Instamart</Link></li>
                  <li><Link to="/cart" className='nav-links' >Cart</Link></li>
               </ul>
            </div>
        </div>
    )
}
export default Header;