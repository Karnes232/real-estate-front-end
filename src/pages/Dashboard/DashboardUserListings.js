import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import SideBar from '../../components/SideBar/SideBar';
import UserListings from '../../components/UserListings/UserListings';
import CurrentUserContext from '../../context/current-user.context';

const DashboardUserListings = () => {
    const user = useContext(CurrentUserContext)
    const history = useHistory();
    if(!user._id) {
        history.push("/signin");
    }
    
    return (
        <main className='dashboard'>
            <SideBar/>
            <UserListings/> 
        </main>
    )
}

export default DashboardUserListings