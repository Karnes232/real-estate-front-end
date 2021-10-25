import React from 'react'
import Header from '../components/HomePage/Header';
import Featured from '../components/HomePage/Featured'

const Home = (props) => {
    console.log(props)
    return (
        <div>
            <Header/>
            <Featured />
        </div>
    )
}

export default Home
