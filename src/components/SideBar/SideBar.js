import React, { useContext } from 'react'
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
                    <li>Some Link</li>
                    <li>Some Link</li>
                    <li>Some Link</li>
                    <li>Some Link</li>
                    <li>Some Link</li>
                    <li>Some Link</li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar
