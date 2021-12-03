import React from 'react'
import { Link } from "react-router-dom";

import locationIcon from '../../images/icons/location.png';
import bathIcon from '../../images/icons/bath.png';
import bedIcon from '../../images/icons/bed.png';
import surfaceIcon from '../../images/icons/surface.png'

const Home = ({homeInfo}) => {
    
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      });
      
    const price = formatter.format(homeInfo.price)

    return (
        <div className="featured-homes__section col-1-of-2">
            <div className="featured-home__photo">
                <img src={`${process.env.REACT_APP_URL}/houses/${homeInfo._id}/img`} alt="" />
            </div>
            <div className="featured-home__info">
                <div className="featured-home__title">
                    <Link to={`/house/${homeInfo._id}`}>
                        <h5>{homeInfo.title}</h5>
                    </Link>
                </div>
                <div className="featured-home__location u-margin-bottom-small">
                    <img src={locationIcon} alt="" />
                    <h6>{homeInfo.address}</h6>
                </div>
                <div className="featured-home__details">
                    <div className="row u-margin-bottom-small featured-home__details-flex-port">
                        <div className="col-1-of-2 featured-home__details-flex">
                            <img src={bedIcon} alt="" />
                            <h6>{homeInfo.bedrooms} Bedrooms</h6>
                        </div>
                        <div className="col-1-of-2 featured-home__details-flex">
                            <img src={bathIcon} alt="" />
                            <h6>{homeInfo.bedrooms} Bathrooms</h6>
                        </div>
                    </div>
                    <div className="row u-margin-bottom-small">
                        <div className="featured-home__details-flex">
                            <img className='sq-foot-icon' src={surfaceIcon} alt="" />
                            <h6 className='sq-foot-info'>{new Intl.NumberFormat().format(homeInfo.sqFoot)} sq ft</h6>
                        </div>
                        
                    </div>
                </div>
                <div className="featured-home__price">
                    <h6>{homeInfo.city}, {homeInfo.province}</h6>
                    <h4>{price}</h4>
                </div>
            </div>
        </div>
    )
}

export default Home
