import React from 'react'
import Zuri from './images/Zuri.png'
import I4G from './images/I4G.png'
import './Body.css'
import vector from './images/Vector.png'

const Footer = () => {
    return (
        <div className= 'footer'>
            <footer className= 'footerHolder'>
                <div className='img4holder'>
                    <img className='img4' src= {Zuri} alt="" />
                    <img className='vector' src= {vector} alt="" />
                </div>
                <p>HNG Internship 9 Frontend Task</p>
                <img className='img5' src= {I4G} alt="" />
            </footer>
        </div>
    )
}

export default Footer
