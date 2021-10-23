import React, { useContext } from 'react'
import { useHistory } from "react-router-dom";
import AddListing from '../../components/AddListing/AddListing';
import SideBar from '../../components/SideBar/SideBar';
import CurrentUserContext from '../../context/current-user.context';

const Dashboard = () => {
    const user = useContext(CurrentUserContext)
    const history = useHistory();
    if(!user._id) {
        history.push("/signin");
    }
    
    return (
        <main className='dashboard'>
            <SideBar/>            
            <AddListing/>
            
        </main>
    )
}

export default Dashboard
