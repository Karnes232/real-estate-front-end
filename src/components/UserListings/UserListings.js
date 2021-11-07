import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import CurrentUserListingsContext from '../../context/current-user-listings-context';
import DeleteListing from '../../utils/DeleteListing';


const UserListings = () => {
    const houses = useContext(CurrentUserListingsContext)
    console.log(houses)

    return (
        <section className='dashboard__section'>
            <div className="dashboard__my-properties">
                <div className="dashboard__my-properties-title">
                    <div className=''>
                        <h4>My Properties</h4>
                    </div>
                    <div className='dashboard__my-properties-single-centered'>
                        <h4>Date Added</h4>
                    </div>
                    <div className='dashboard__my-properties-single-centered'>
                        <h4>Actions</h4>
                    </div>
                    
                </div>
                {houses.length > 0 ? 
                    houses.map(house => (
                    <div key={house._id} className='dashboard__my-properties-single'>
                        <div className='dashboard__my-properties-single-info'>
                            <img src={`http://localhost:4000/houses/${house._id}/img`} alt="" />
                            <div className="dashboard__my-properties-single-details">
                                <h6>{house.title}</h6>
                                <p>{house.address}</p>
                            </div>
                            
                        </div>
                        <div className='dashboard__my-properties-single-centered'>
                            <h6>{house.createdAt.slice(0, 10).split("-").reverse().join("-")}</h6>
                        </div>
                        <div className='dashboard__my-properties-single-centered dashboard__my-properties-edit-delete'>
                            <Link to={`/dashboard/listings/${house._id}`} className=''>
                                <h6>Edit</h6>
                            </Link>
                            <button id={house._id} onClick={DeleteListing}>
                                
                            </button>
                        </div>
                        
                        
                    </div>
                ))
                 : <div></div>}
                
            </div>
            
        </section>
    )
}

export default UserListings
