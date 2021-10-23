import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../images/icons/logo-white-1.svg'
import Cookies from 'js-cookie'

const LoggedInNavbar = ({ setUser }) => {

    const handleLogout = () => {
        Cookies.remove('token')   
        setUser({})
    }
    return (
        <nav className='navbar'>
            <div className="navbar__logo">
                <Link to='/'>
                    <img src={logo} alt="" className='navbar__logo-1'/>
                </Link>
            </div>
            <div className="navbar__user">
            <div className="dropdown">
                <button className="button dropbtn navbar__button">Menu</button>
                <div className="dropdown-content">
                    <Link to="/" className=''>Home</Link>
                    <Link to="/dashboard" className=''>Dashboard</Link>
                    <Link to="/" onClick={handleLogout} className=''>Logout</Link>
                </div>
            </div>
            </div>
        </nav>
    )
}

export default LoggedInNavbar
