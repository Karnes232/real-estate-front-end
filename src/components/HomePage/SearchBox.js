import React from 'react'

const SearchBox = () => {
    return (
        <div className="header__search-box">
            <form action="" className='search-form'>
              <input 
                type="text" 
                className='search-form__input search-form__input-keyword'
                placeholder='Keywords'
              />
              <select name="type" id="type" className='search-form__input search-form__input-type'>
                <option value="">Property Type</option>
                <option value="">Family House</option>
                <option value="">Apartment</option>
                <option value="">Condo</option>
              </select>
              <select name="location" id="location" className='search-form__input search-form__input-location'>
                <option value="">Location</option>
                <option value="">Santo Domingo</option>
                <option value="">Punta Cana</option>
                <option value="">La Romana</option>
                <option value="">Santiago</option>
                <option value="">Puerta Plata</option>
              </select>
              <button className='search-form__button button'>Search Now</button>
            </form>
          </div>
    )
}

export default SearchBox
