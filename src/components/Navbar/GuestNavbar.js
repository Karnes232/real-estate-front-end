import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/icons/logo-white-1.svg'

const GuestNavbar = () => {
    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <Link to='/'>
                    <img src={logo} alt="" className='navbar__logo-1'/>
                </Link>
            </div>
            <div className="navbar__user">
                <Link to="/register" className='navbar__button button'>Sign Up</Link>
            </div>
        </nav>
    )
}

export default GuestNavbar
