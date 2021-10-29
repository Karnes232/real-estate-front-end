import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';

import CheckBoxes from '../CheckBoxes/CheckBoxes'
import FormInput from '../FormInput/FormInput'
import SubmitSinglePhoto from '../../utils/SubmitSinglePhoto';
import SubmitMultiPhotos from '../../utils/SubmitMultiPhotos';
import FetchSingleHouse from '../../utils/FetchSingleHouse';
import HouseLocationMap from '../houseLocationMap/HouseLocationMap';
import EditSingleListing from '../../utils/EditSingleListing';
import DeletePhotos from '../../utils/DeletePhotos';


const EditListing = () => {
    const [house, setHouse] = useState({})
    const [images, setImages] = useState([])
    const [deletePhotos, setDeletePhotos] = useState({})
    const { id } = useParams();
    useEffect(() => {
        FetchSingleHouse(id, setHouse, setImages, setProperty, setAmenities)
    }, [id])

    const history = useHistory();
    const [property, setProperty] = useState({
        _id: '',
        title: '',
        description: '',
        propertyType: null,
        bedrooms: 0,
        bathrooms: 0,
        address: '',
        city: '',
        province: '',
        country: '',
        sqFoot: 0,
        price: 0,
        latitude: '',
        longitude: ''
    })
    const [amenities, setAmenities] = useState({
        aircon: false,
        balcony: false,
        dishwasher: false,
        pool: false,
        fridge: false,
        alarm: false,
        windowCover: false,
        laundry: false
    })

    const [selectedFile, setSelectedFile] = useState(null)
    const [photoList, setPhotoList] = useState(null)

    const handleDelete = event => {
        const { name, checked } = event.target;
        setDeletePhotos({ ...deletePhotos, [name]: checked})
    }

    const handleCheck = event => {
        const { name } = event.target;
        const checked = event.target.checked
        setAmenities({ ...amenities, [name]: checked});
    }
    const handleChange = event => {
        const { name, value } = event.target;    
        setProperty({ ...property, [name]: value });
      };

    const handleFileUpload = e => {
        setSelectedFile(e.target.files[0])
    }
    const handleMultiFileUpload = e => {
        setPhotoList(e.target.files)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get('token')
        const data = { property, amenities }
        const submittedHouse = await EditSingleListing(token, data)
        await DeletePhotos(token, deletePhotos, submittedHouse)
        //const photoInfo = { selectedFile, submittedHouse }
        //const multiPhotoInfo = { photoList, submittedHouse }
        //await SubmitSinglePhoto(token, photoInfo)
        //await SubmitMultiPhotos(token, multiPhotoInfo)

        //history.push("/");
    }
    return (
        <section className='dashboard__section'>
            <div className="addlisting u-margin-bottom-extra-big">
                <div className="addlisting__form">
                 
                    <form name='listingForm' method="POST" action="/" onSubmit={handleSubmit} className="form u-margin-bottom-medium">
                        <h4 className='u-margin-bottom-medium'>Property Description And Price</h4>
                        <div className="form__group">
                            <FormInput 
                                displayName='Property Title' 
                                inputInfo='title' 
                                classNameInfo='form__input' 
                                formType="text"
                                handleChange={handleChange}
                                value={property.title}
                            />
                        </div>

                        <div className="form__group">
                            <textarea 
                                name='description'
                                id='description'
                                className="form__input" 
                                placeholder="Description about your property" 
                                required
                                onChange={handleChange}
                                value={property.description}
                            />
                            <label htmlFor="description" className="form__label">Property Description</label>
                        </div>

                        <div className="form__group form__group-select">
                            <select 
                                name="propertyType" 
                                id="propertyType" 
                                className="form__input form__input-select"
                                onChange={handleChange}
                                value={property.propertyType}
                            >
                                <option value="" disabled selected>Property Type</option>
                                <option value="Family House">Family House</option>
                                <option value="Apartment">Apartment</option>
                                <option value="Condo">Condo</option>
                            </select>
                            <select 
                                name="bedrooms" 
                                id="bedrooms" 
                                className="form__input form__input-select"
                                onChange={handleChange}
                                value={property.bedrooms}
                            >
                                <option value="" disabled selected>Bedrooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6+</option>
                            </select>
                            <select 
                                name="bathrooms" 
                                id="bathrooms" 
                                className="form__input form__input-select"
                                onChange={handleChange}
                                value={property.bathrooms}
                            >
                                <option value="" disabled selected>Bathrooms</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2">2.5</option>
                                <option value="3">3</option>
                            </select>
                        </div>

                        <div className="form__group-half">
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Price' 
                                    inputInfo='price' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='number'
                                    handleChange={handleChange}
                                    value={property.price}
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Square Feet' 
                                    inputInfo='sqFoot' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='number'
                                    handleChange={handleChange}
                                    value={property.sqFoot}
                                />
                            </div>
                        </div>

                        <h4 className='u-margin-bottom-medium'>Property Location</h4>
                        <div className="form__group-half">
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Address' 
                                    inputInfo='address' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='text'
                                    handleChange={handleChange}
                                    value={property.address}
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='City' 
                                    inputInfo='city' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='text'
                                    handleChange={handleChange}
                                    value={property.city}
                                />
                            </div>
                        </div>

                        <div className="form__group-half">
                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Province' 
                                    inputInfo='province' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='text'
                                    handleChange={handleChange}
                                    value={property.province}
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Country' 
                                    inputInfo='country' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='text'
                                    handleChange={handleChange}
                                    value={property.country}
                                />
                            </div>
                        </div>
                        <div className='map-container'>
                        <h4 className='u-margin-bottom-medium'>Select Property Location</h4>
                            <HouseLocationMap lat={property.latitude} lng={property.longitude}/>
                        </div>

                        <h4 className='u-margin-bottom-medium'>Property Features</h4>
                        {house.amenities ? <>
                        <div className="form__group-flex">
                            <CheckBoxes 
                                amenities='aircon' 
                                displayName='Air Con' 
                                handleChange={handleCheck} 
                                
                                checked={house.amenities.aircon}     
                            />
                            <CheckBoxes 
                                amenities='balcony' 
                                displayName='Balcony' 
                                handleChange={handleCheck} 
                                checked={house.amenities.balcony}  
                            />
                            <CheckBoxes 
                                amenities='dishwasher' 
                                displayName='Dishwasher' 
                                handleChange={handleCheck} 
                                checked={house.amenities.dishwasher}  
                            />
                            <CheckBoxes 
                                amenities='pool' 
                                displayName='Pool' 
                                handleChange={handleCheck} 
                                checked={house.amenities.pool}  
                            />
                        </div>
                        <div className="form__group-flex u-margin-bottom-medium">
                            <CheckBoxes 
                                amenities='fridge' 
                                displayName='Fridge' 
                                handleChange={handleCheck} 
                                checked={house.amenities.fridge}  
                            />
                            <CheckBoxes 
                                amenities='alarm' 
                                displayName='Alarm' 
                                handleChange={handleCheck} 
                                checked={house.amenities.alarm}  
                            />
                            <CheckBoxes 
                                amenities='windowCover' 
                                displayName='Window Covering' 
                                handleChange={handleCheck} 
                                checked={house.amenities.windowCover}  
                            />
                            <CheckBoxes 
                                amenities='laundry' 
                                displayName='Laundry Room' 
                                handleChange={handleCheck} 
                                checked={house.amenities.laundry}  
                            />
                        </div>
                        </>
                        : 'not'}
                        <p>Keep photos under 1 mb</p>
                        <div className="form__group edit-listing">
                        {images.map((img) => {
                                return (
                                    <div className='edit-listing__photos'>
                                        <img src={img.original} class="img-thumbnail" alt=""/>
                                        <CheckBoxes 
                                            amenities={img.original}
                                            displayName='Delete' 
                                            handleChange={handleDelete} 
                                        />
                                        
                                    </div>
                                )
                            })}
                        </div>
                        
                        <input type="file" id="singePhoto" name="singePhoto" onChange={handleFileUpload}/>
                        <input type="file" name="multiPhotos" id='multiPhotos' multiple onChange={handleMultiFileUpload} />
                        <button className="button add-listing-button">Edit Listing</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EditListing