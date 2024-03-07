import React from "react";
import "./screen6.css";
import Image from "next/image";
import Arrow from './Image/Arrow 2.png'
import Graph from './Image/Screenshot 2023-12-29 110644.png'
const page = () => {
  return (
    <>
      <div className="screen6">
        <div className="screen6-items">
          <div className="box1">
            <div className="content_screen6">
                <h1>Towards Equality: A Visual Progress</h1>
                <Image 
                    src={Arrow}
                    alt="loading image"
                    priority
                    className="arrow_screen6"
                />
                <div className="graph">
                   <Image
                     src={Graph}
                     alt="graph-image"
                     className="graph"
                   />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
