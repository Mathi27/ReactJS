import {LOGO} from '../utils/Constants';
import { useState } from 'react';
const Header = () => {
     
    const [title,setTitle]=useState("Veg");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO}/>
                <h1>Food<span className='hub'>Hub</span></h1>
                <p>{title}</p>
                <button  onClick={()=>setTitle("Non Veg")}  >Switch</button>
            </div>
    
            <div className='nav-items'>
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Cart</li>
               </ul>
            </div>
        </div>
    )
}
export default Header;