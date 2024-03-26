import React from "react";
import "./screen5.css";
import Image from "next/image";
import Poor from "./Image/woman-offering-food-neighbor.jpg";
import Arrow from "./Image/Arrow 1.png";
import tick from "./Image/Ok.png";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="screen5">
        <div className="screen5-items">
          <div className="poor-image">
            <Image src={Poor} alt="poor-image" className="poor" priority />
          </div>
          <div className="main_content_page">
            <h1>Empower Dreams,<br/> Embrace Uniqueness</h1>
            <h2>
              Discover unique products from diverse creators worldwide. Support
              extraordinary creations that tell remarkable stories. Join us in
              empowering dreams!{" "}
            </h2>
          </div>
          
        </div>
        <div className="screen5_button">
         <div className="screen5_button1">
        <button className="campaign"><Link href="/campaign">Know More</Link></button>
        
         </div>
         
         
      </div> 
      <div className="screen5_label">
           <Image
             src={tick}
             alt='loading-image'
             className='screen5_tick'
           />
           <h1>We will open Inclusify camps soon in various cities.</h1>
       </div>
      </div>
    </>
  );
};

export default page;
