import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import FetchSingleHouse from '../../utils/FetchSingleHouse';
import ImageGallery from 'react-image-gallery';
import HouseLocationMap from '../../components/houseLocationMap/HouseLocationMap'

import locationIcon from '../../images/icons/location.png';

const SingleHouse = () => {
    const [house, setHouse] = useState({})
    const [images, setImages] = useState([])
    const { id } = useParams();
    useEffect(() => {
        FetchSingleHouse(id, setHouse, setImages)
    }, [id])

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      });
      
    const price = formatter.format(house.price)

    
    return (
        <div className='single-house'>
            <div className="single-house__main-info row">
                <h2 className='single-house__title'>{house.title}</h2>
                <h3 className='single-house__price'>{price}</h3>
            </div>
            <div className="single-house__secondary-info row u-margin-bottom-small">
                <img src={locationIcon} alt="" />
                <h6 className='single-house__address'>{house.address}</h6>
            </div>

            <div className="row">
                <div className="single-house__gallery col-1-of-2">
                    <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false}/>
                </div>

                <div className="col-1-of-2">
                    <div className="single-house__description">
                        <h5>Description</h5>
                        <span></span>
                        <p>{house.description}</p>
                    </div>
                    
                    <div className="single-house__details">
                        <h5>Property Details</h5>
                        <div className="row">
                            <div className="col-1-of-2"><p><strong>Property Type:</strong> {house.propertyType}</p></div>
                            <div className="col-1-of-4"><p><strong>Bedrooms:</strong> {house.bedrooms}</p></div>
                            <div className="col-1-of-4"><p><strong>Bathrooms:</strong> {house.bathrooms}</p></div>
                        </div>
                        <div className="row u-margin-bottom-small">
                            <div className="col-1-of-2"><p><strong>Price:</strong> {price}</p></div>
                            <div className="col-1-of-4"><p><strong>Sq Foot:</strong> {new Intl.NumberFormat().format(house.sqFoot)}</p></div>
                            <div className="col-1-of-4"><p><strong>City:</strong> {house.city}</p></div>
                        </div>
                        <div className="single-house__details-map">
                            <HouseLocationMap lat={house.latitude} lng={house.longitude}/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            

            
            
            
        </div>
    )
}

export default SingleHouse
