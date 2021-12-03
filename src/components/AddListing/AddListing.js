import React, { useState } from 'react'
import AddListingMap from '../addListingMap/AddListingMap'
import CheckBoxes from '../CheckBoxes/CheckBoxes'
import FormInput from '../FormInput/FormInput'
import { useHistory } from 'react-router';
import Cookies from 'js-cookie';
import SubmitListing from '../../utils/SubmitListing';
import SubmitSinglePhoto from '../../utils/SubmitSinglePhoto';
import SubmitMultiPhotos from '../../utils/SubmitMultiPhotos';



const AddListing = () => {
    const history = useHistory();
    const [property, setProperty] = useState({
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

    const handleCheck = event => {
        const { name } = event.target;
        const checked = event.target.checked
        setAmenities({ ...amenities, [name]: checked});
    }
    const handleChange = event => {
        const { name, value } = event.target;    
        setProperty({ ...property, [name]: value });
      };
    const handleLatLngChange = (lat, lng) => {
        setProperty({ ...property, latitude: lat, longitude: lng });
    }

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

        const submittedHouse = await SubmitListing(token, data)
        const photoInfo = { selectedFile, submittedHouse }
        const multiPhotoInfo = { photoList, submittedHouse }
        await SubmitSinglePhoto(token, photoInfo)
        await SubmitMultiPhotos(token, multiPhotoInfo)

        history.push("/");
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
                            />
                            <label htmlFor="description" className="form__label">Property Description</label>
                        </div>

                        <div className="form__group form__group-select">
                            <select 
                                name="propertyType" 
                                id="propertyType" 
                                className="form__input form__input-select"
                                onChange={handleChange}
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
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Square Feet' 
                                    inputInfo='sqFoot' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='number'
                                    handleChange={handleChange}
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
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <select 
                                    name="city" 
                                    id="city" 
                                    className="form__input form__input-select-2"
                                    onChange={handleChange}
                                >
                                    <option value="" disabled selected>City</option>
                                    <option value="Santo Domingo">Santo Domingo</option>
                                    <option value="Punta Cana">Punta Cana</option>
                                    <option value="Higuey">Higuey</option>
                                    <option value="La Romana">La Romana</option>
                                    <option value="Santiago">Santiago</option>
                                    <option value="Puerta Plata">Puerta Plata</option>
                                    <option value="Barahona">Barahona</option>
                                    <option value="Samana">Samana</option>
                                    <option value="Sosua">Sosua</option>
                                    <option value="Cabarete">Cabarete</option>
                                    <option value="Las Terrenas">Las Terrenas</option>
                                    <option value="Bayahibe">Bayahibe</option>
                                    <option value="Jarabacoa">Jarabacoa</option>
                                </select>
                                
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
                                />
                            </div>

                            <div className="form__group form__group-half-2">
                                <FormInput 
                                    displayName='Country' 
                                    inputInfo='country' 
                                    classNameInfo='form__input form__input-half' 
                                    formType='text'
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='map-container'>
                        <h4 className='u-margin-bottom-medium'>Select Property Location</h4>
                            <AddListingMap handleLatLngChange={handleLatLngChange}/>
                        </div>

                        <h4 className='u-margin-bottom-medium'>Property Features</h4>
                        <div className="form__group-flex">
                            <CheckBoxes amenities='aircon' id='aircon' displayName='Air Con' handleChange={handleCheck} />
                            <CheckBoxes amenities='balcony' id='balcony' displayName='Balcony' handleChange={handleCheck} />
                            <CheckBoxes amenities='dishwasher' id='dishwasher' displayName='Dishwasher' handleChange={handleCheck} />
                            <CheckBoxes amenities='pool' id='pool' displayName='Pool' handleChange={handleCheck} />
                        </div>
                        <div className="form__group-flex u-margin-bottom-medium">
                            <CheckBoxes amenities='fridge' id='fridge' displayName='Fridge' handleChange={handleCheck} />
                            <CheckBoxes amenities='alarm' id='alarm' displayName='Alarm' handleChange={handleCheck} />
                            <CheckBoxes amenities='windowCover' id='windowCover' displayName='Window Covering' handleChange={handleCheck} />
                            <CheckBoxes amenities='laundry' id='laundry' displayName='Laundry Room' handleChange={handleCheck} />
                        </div>
                        <p className='u-margin-bottom-small'>Keep photos under 1 mb</p>
                        <input type="file" id="singePhoto" name="singePhoto" className='u-margin-bottom-small' onChange={handleFileUpload}/>
                        <input type="file" name="multiPhotos" id='multiPhotos' className='u-margin-bottom-small' multiple onChange={handleMultiFileUpload} />
                        <button className="button add-listing-button">Add Listing</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddListing
