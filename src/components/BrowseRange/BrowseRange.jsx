import React from "react";
import br from './BrowseRange.module.css';

import din from "../../assets/BrowseRange/living.png";
export default function BrowseRange(){
  return(
    <>
    <div className={br.mainContainer}>
      <div className={br.title}>
        <h1>Brower The Range</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis </p>
      </div>
      <div className={br.container}>
        <div className={br.dining}>
          <img src={din} className={br.image} alt="" />
          <h3>Dining</h3>
        </div>
        <div className={br.dining}>
          <img src={din} className={br.image} alt="" />
          <h3>Living</h3>
        </div>
        <div className={br.dining}>
          <img src={din} className={br.image} alt="" />
          <h3>Bed Room</h3>
        </div>
      </div>
    </div>

    </>
  )
}

