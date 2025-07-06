import React from "react"
import f from "./Footer.module.css";

export default function Footer()
{
     return (
      <>
          <div className={f.mainContainer}>
               <div className={f.links}>
                    <div className={`${f.eachLink} ${f.linkGroup1}`}>
                         <h1>Funiro.</h1>
                         <p>400 University Drive Suite 200 Coral<br/> Gables,<br/>
FL 33134 USA</p>
                    </div>
                    <div className={`${f.eachLink} ${f.linkGroup2}`}>
                         <p>Links</p>
                         <h2>Home</h2>
                         <h2>Shpo</h2>
                         <h2>About</h2>
                         <h2>Contact</h2>
                    </div>
                    <div className={`${f.eachLink} ${f.linkGroup3}`}>
                         <p>Help</p>
                         <h2>Payment Option</h2>
                         <h2>Returns</h2>
                         <h2>Privacy Policies</h2>
                    </div>
                    <div className={`${f.eachLink} ${f.linkGroup4}`}>
                         <p>Newsletter</p>
                         <form action="" className={f.form}>
                              <input type="text" placeholder="Enter Your Email Address" className={f.inputBox}/>
                              <button className={f.button}>SUBSCRIBE</button>
                         </form>
                    </div>
               </div>
               <div className={f.copyRight}>
                    <p>2023 furino. All rights reverved</p>
               </div>
               
          </div>  
      </>
     )
}