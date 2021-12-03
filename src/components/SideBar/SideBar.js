import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import CurrentUserContext from '../../context/current-user.context'

const SideBar = () => {
    const user = useContext(CurrentUserContext)
    return (
        <nav className='dashboard__side-menu'>
            <div className="sidebar__user">
               {user.firstName} {user.lastName}
            </div>
            <div className="sidebar__sections">
                <ul>
                    <Link className='sidebar__links' to={`/dashboard/profile`}>
                        <p>My Profile</p>
                    </Link>
                    <Link className='sidebar__links' to={`/dashboard`}>
                        <p>Add Listing</p>
                    </Link>
                    <Link className='sidebar__links' to={`/dashboard/listings`}>
                        <p>My Listings</p>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar
