import React from 'react'
import { motion } from 'framer-motion'
import './HeadBar.css';

const HeadBar = ({ index , heading , icon, theme,headiconstyle }) => {
    console.log(index , heading , icon, theme);
    return (
        <div>
            <div className="head-bar" style={{background: `linear-gradient(to right, #3D86C6,  ${theme})`}}>
                <div className='hb-2'>
                    <img src="/small-square-btn.png" alt="" />
                    <motion.h1 className='poppins-light'
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? 20 : -20
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0, // Slide in to its original position
                            transition: {
                                duration: 0.50 // Animation duration
                            }
                        }}
                    >
                        { heading }</motion.h1>
                </div>
                {
                    icon&&<div className='head-icon' style={{background:headiconstyle&&headiconstyle}}>
                    <img src={icon} alt="" />
                </div>
                }
                
            </div>
        </div>
    )
}

export default HeadBar