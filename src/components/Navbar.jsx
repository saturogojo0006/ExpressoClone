import React from 'react'
import logo from '../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className='navbar' >

    <img src={logo } alt="Ntfound" className='logoimg' /> 
<ul className='item-con'>

<li className='link-item'><NavLink  to='/' className='nav-link'>Home </NavLink></li>
<li className='link-item'><NavLink  to='/events'className='nav-link' >Events</NavLink></li>
<li className='link-item'><NavLink  to='/arts' className='nav-link'> Arts </NavLink></li>
<li className='link-item'><NavLink  to='/literary'className='nav-link' > Literary </NavLink></li>
<li className='link-item'><NavLink  to='/team' className='nav-link'> Team</NavLink></li>
<li className='link-item'><NavLink  to='/alumni'className='nav-link' >Alumni </NavLink></li>
<li className='link-item'><NavLink  to='/contact' className='nav-link'>Contact </NavLink>
</li>



</ul>


        </nav>
    </div>
  )
}

export default Navbar