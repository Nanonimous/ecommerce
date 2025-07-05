import React from "react"

import ms from './MainSection.module.css'
import mainImage from '../../assets/mainContainer/main.jpg'
export default function MainSection(){
  return (
    <>
      <div className={ms.mainContainer}>
          <img src={mainImage} alt="" className={ms.mainImage}/>
          <div className={ms.overImage}>
            <div className={ms.content}>
              <div className={ms.textContent}>
                <h3>New Arrival</h3>
                <h1>Discover Our <br></br> New Collection</h1>  
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sit! netur si netur si</p>
              </div>
              <button className={ms.buyButton}>BUY NOW</button>
            </div>              
          </div>
      </div>
    </>
  )
}
