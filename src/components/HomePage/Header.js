import React from 'react'
import MapBox from '../MapBox/MapBox'

const Header = () => {
 
    return (
        <div className="header u-margin-bottom-big">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Find your dream House</span>
              <span className="heading-primary--sub">we have properties all over the Dominican Republic</span>
            </h1>
          </div>
          <MapBox/>
        </div>
    )
}

export default Header
