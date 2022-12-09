import { useContext } from "react";
import logo from '../../assets/logo.svg'

import './nav.css';
import { AuthContext } from "../../contexts/AuthContext";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import ListIcon from '@mui/icons-material/List';
import ExploreIcon from '@mui/icons-material/Explore';

const Nav = ()=>{
    const {signOut} = useContext(AuthContext)
const {token} = useContext(AuthContext);
    const links = [
        {
            target:'/home',
            text:'Home',
           icon: <HomeIcon/>
            
        },
        {
            target:'/messages',
            text:'Messages',
            icon: <EmailIcon/>
            
    
        },
        {
            target:'/bookmarks',
            text:'Bookmarks',
            icon: <BookmarksIcon/>
        },
        {
            target:'/explore',
            text:'Explore',
            icon: <ExploreIcon/>
        },
        {
            target:'/lists',
            text:'Lists',
            icon: <ListIcon/>
        },
        {
            target:'/profile',
            text:'Profile',
            icon: <PersonIcon/>
        },
        {
            target:'/signout',
            text:'SignOut',
            icon: <LockIcon/>
        }  
    ]

    return (
    <div className="nav-part">
    <div className="logo ">
      <img className='logo-img' src={logo} alt="react-logo"/> 
    </div>
    <div className="nav-items">
        <ul>
            {links.map((link, index)=>{
                /* if(!token) return */
                return(
                    <li className="nav-item" key={index}>
                        <NavLink to={link.target} className='nav-link'>
                            
                               <div className="icon">{link.icon}</div> 
                              <div className="text">{link.text}</div>
                            

                        </NavLink>
                    </li>
                    
                )
               })}       
        </ul>
    </div>

</div>
    )
}
export default Nav