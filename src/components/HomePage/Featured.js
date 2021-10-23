import React, { useEffect, useState } from 'react'
import FetchNewestHomes from '../../utils/FetchNewestHomes';
import Home from './Home';

const Featured = () => {
    const [newestHomes, setNewestHomes] = useState([])
    useEffect(() => {
        FetchNewestHomes(setNewestHomes)
    }, [])
    console.log(newestHomes)
    return (
        <div className='featured-homes u-margin-bottom-extra-big'>
            <div className="featured-homes__title u-margin-bottom-medium">
                <h4>Featured Properties</h4>
            </div>

            <div className="featured-homes__list">
                <div className="row u-margin-bottom-medium featured-homes__list-wrap">

                    {newestHomes ? newestHomes.map((home, index) => 
                        (        
                            <Home homeInfo={home}/>
                        )) : (
                            <div></div>
                        )}                
                </div>
                <button className='featured-homes__button button'>Search Now</button>
            </div>
        </div>
    )
}

export default Featured
