import React from 'react'

const Header = () => {
    return (
        <div className="header u-margin-bottom-big">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Find your dream House</span>
            <span className="heading-primary--sub">we have properties all over the Dominican Republic</span>
          </h1>

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
        </div>
      </div>
    )
}

export default Header
