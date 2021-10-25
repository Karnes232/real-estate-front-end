import React, { useContext } from 'react'
import CurrentUserContext from '../../context/current-user.context';
import SetUserContext from '../../context/set-user-context';
import GuestNavbar from './GuestNavbar';
import LoggedInNavbar from './LoggedInNavbar'

const Navbar = () => {
    const user = useContext(CurrentUserContext)
    const setUser = useContext(SetUserContext)
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
