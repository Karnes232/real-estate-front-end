import React, { useEffect, useState } from 'react'
import FetchNewestHomes from '../../utils/FetchNewestHomes';
import Home from './Home';
import SearchBox from './SearchBox';

const Featured = () => {
    const [newestHomes, setNewestHomes] = useState([])
    useEffect(() => {
        FetchNewestHomes(setNewestHomes)
    }, [])
    const handleClick = () => FetchNewestHomes(setNewestHomes)
    return (
        <div className='featured-homes u-margin-bottom-extra-big'>
            <SearchBox setHomes={setNewestHomes}/>
            <div className="featured-homes__title u-margin-bottom-medium">
                <h4>Featured Properties</h4>
            </div>

            <div className="featured-homes__list">
                <div className="row u-margin-bottom-medium featured-homes__list-wrap">

                    {newestHomes ? newestHomes.map((home, index) => 
                        (        
                            <Home key={index} homeInfo={home}/>
                        )) : (
                            <div></div>
                        )}                
                </div>
                <button className='featured-homes__button button' onClick={handleClick}>Newest Homes</button>
            </div>
        </div>
    )
}

export default Featured
