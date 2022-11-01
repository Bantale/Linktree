import React from 'react'
import './Body.css'
import profileImg from './images/profile-image.png'
import share from './images/share.png'
import Body from './Body'
import Footer from './Footer'

const Landing = () => {
    return (
        <div className= 'main'>
            <div>
                <div className= 'header'>
                    <img src= {profileImg} alt="" />
                    <img className='share' src= {share} alt="" />
                </div>
                <h5>Annette Black</h5>
                <Body/>
                <Footer/>
            </div>
        </div>
    )
}

export default Landing
