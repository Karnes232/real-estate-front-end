import React, { useContext } from 'react'
import CurrentUserContext from '../../context/current-user.context';
import GuestNavbar from './GuestNavbar';
import LoggedInNavbar from './LoggedInNavbar'

const Navbar = ({ setUser }) => {
    const user = useContext(CurrentUserContext)
    if(user._id) {
        return (
            <LoggedInNavbar setUser={setUser} />
        )
    } else {
        return (
            <GuestNavbar />
        )
    }


    
}

export default Navbar
