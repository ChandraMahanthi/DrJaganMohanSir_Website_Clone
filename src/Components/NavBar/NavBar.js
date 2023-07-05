import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar=()=>
{
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>AboutUs</Link></li>
                    <li><Link to='/ourservices'>Our Services</Link></li>
                    <li><Link to='/contactus'>ContactUs</Link></li>
                    <li class='rmenu'><NavLink  to='/userlogin'>Login</NavLink></li>
                    <li class='rmenu'><NavLink  to='/userregistration'>User Registration</NavLink></li>
                </ul>
            </nav>
           
        </>
    );
};
export default NavBar;