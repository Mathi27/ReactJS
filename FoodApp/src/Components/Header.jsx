import {LOGO} from '../utils/Constants';
import { useState } from 'react';
import { Link, Router } from 'react-router-dom';
const Header = () => {
     
    const [title,setTitle]=useState("Veg");
    return (
        <div className='flex place-content-between bg-pink-50'>
            <div className='flex mx-4 my-2'>
                <Link to={'/'}><img className="h-14 w-14" src={LOGO}/></Link>
                <h1 className='px-4 py-4 text-2xl font-semibold text-pink-900'>Food<span className='hub'>Hub</span></h1>
                {/* <p>{title}</p> */}
                {/* <button  onClick={()=>setTitle("Non Veg")}  >Switch</button> */}
            </div>
    
            <div className='nav-items'>
               <ul className='flex flex-row space-x-6 m-6 text-lg'>
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