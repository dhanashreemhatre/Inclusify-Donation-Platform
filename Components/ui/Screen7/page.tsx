import React from "react";
import "./screen7.css";
import Image from "next/image";
import Poor from "./Image/woman-offering-food-neighbor.jpg";
import Arrow from "./Image/Arrow 1.png";
import tick from "./Image/Ok.png";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="screen7">
        <div className="screen7-items">
          <div className="poor-image">
            <Image src={Poor} alt="poor-image" className="poor " priority />
          </div>
          <div className="main_content">
            <h1>Empower Dreams, <br/>Embrace Uniqueness</h1>
            <h2>
              Discover unique products from diverse creators worldwide. Support
              extraordinary creations that tell remarkable stories. Join us in
              empowering dreams!{" "}
            </h2>
          </div>
          
        </div>
       
        {/* <button className="campaign"><Link href="localhost:3001">Visit Inclusify-Produuct</Link></button> */}
        
        
      <div className="screen7_label">
           <Image
             src={tick}
             alt='loading-image'
             className='screen7_tick'
           />
           <h1>We will open Inclusify camps soon in various cities.</h1>
       </div>
      </div>
    </>
  );
};

export default page;
