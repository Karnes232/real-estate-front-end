import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import EditListing from '../../components/EditListing/EditListing';

import SideBar from '../../components/SideBar/SideBar';
import CurrentUserContext from '../../context/current-user.context';

const DashboardEditListing = () => {
    const user = useContext(CurrentUserContext)
    const history = useHistory();
    if(!user._id) {
        history.push("/signin");
    }
    
    return (
        <main className='dashboard'>
            <SideBar/>
            <EditListing/> 
        </main>
    )
}

export default DashboardEditListing