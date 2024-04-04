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
          <div className="box2">
            <div className="text-white w-9  flex-col text-center justify-center ">
                <h1 className="text-2xl flex justify-center ml-7">Towards Equality: A Visual Progress</h1>
                <Image 
                    src={Arrow}
                    alt="loading image"
                    priority
                    className="arrow_screen6"
                />
                <div className=" relative">
                   <Image
                     src={Graph}
                     alt="graph-image"
                     className="w-2 left-28 flex justify-center"
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
