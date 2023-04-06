import {LOGO} from '../utils/Constants';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO}/>
                <h1>Food<span className='hub'>Hub</span></h1>
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