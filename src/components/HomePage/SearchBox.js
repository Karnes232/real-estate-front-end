import React, { useState } from 'react'
import SearchListings from '../../utils/SearchListings';

const SearchBox = ({setHomes}) => {
  const [property, setProperty] = useState({})

  const handleChange = event => {
    const { name, value } = event.target;    
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const listings = await SearchListings(property)
    setHomes(listings)
}

    return (
        <div className="header__search-box">
            <form action="" className='search-form' onSubmit={handleSubmit}>
              <select name="type" id="type" className='search-form__input search-form__input-type' onChange={handleChange}>
                <option value="">Property Type</option>
                <option value="Family House">Family House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
              </select>
              <select name="location" id="location" className='search-form__input search-form__input-location' onChange={handleChange}>
                <option value="">Location</option>
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
              <select name="bedrooms" id="bedrooms" className='search-form__input search-form__input-bedrooms' onChange={handleChange}>
                <option value="">Bedrooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </select>
              <button className='search-form__button button'>Search Now</button>
            </form>
          </div>
    )
}

export default SearchBox
