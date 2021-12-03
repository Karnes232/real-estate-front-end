import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Profile from '../../components/Profile/Profile';

import SideBar from '../../components/SideBar/SideBar';
import CurrentUserContext from '../../context/current-user.context';

const DashboardProfile = () => {
    const user = useContext(CurrentUserContext)
    const history = useHistory();
    if(!user._id) {
        history.push("/signin");
    }
    
    return (
        <main className='dashboard'>
            <SideBar/>
            <Profile user={user}/> 
        </main>
    )
}

export default DashboardProfile