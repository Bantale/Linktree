import React from 'react'
import './Body.css'
import slack from './images/Slack_Mark_Web.png'
import github from './images/GitHub-Mark-120px-plus.png'


const Body = () => {
    return (
        <div className='bodyMain'>
            <div className='buttonHolder'>

                    <a href="">Twitter Link</a>

                    <a href="">Zuri Team</a>

                    <a href="">Zuri Books </a>

                    <a href="">Python Books</a>

                    <a href="">Background Check for Coders</a>

                    <a href="">Design Books</a>

            </div>

            <div className= 'imgHolder'>
                <img className='img2' src= {slack} alt="" />
                <img className='img3' src= {github} alt="" />
            </div>
        </div>
    )
}

export default Body
