import React from "react";
import "./screen_sub.css";
import Image from "next/image";
import flower from "./Image/Screenshot_2023-12-29_002847-removebg-preview 1.png";
import Time from "./Image/Time Machine.png";
import Lock from "./Image/Lock.png";
import Send from "./Image/Email Send.png";
const page = () => {
  return (
    <>
      <div className="Screen4_part">
        <div className="screen4_part_items">
          <div className="Screen_part_items_subheading">
            <div className="tag">
              <p>Get ready fro now - start by your </p>
            </div>
            <div className="heading_screen4">
              <p>Why Choose Us?</p>
            </div>
          </div>
          <div className="circles">
            <div className="circle1">
              <Image src={flower} alt="failed-loading-image" />
              <Image src={Time} alt="failed-loading-image" className="time" />
            </div>
            <div className="circle1">
              <Image src={flower} alt="failed-loading-image" />
              <Image src={Lock} alt="failed-loading-image" className="time" />
            </div>
            <div className="circle1">
              <Image src={flower} alt="failed-loading-image" />
              <Image src={Send} alt="failed-loading-image" className="time" />
            </div>
          </div>
          <div className="content_screen4">
            <div className="content1">
              <h1>Anytime</h1>
              <p>You can access it 24 hours a day, from anywhere and anytime</p>
            </div>
            <div className="content2">
              <h1>Safe</h1>
              <p>
                You data is out responsibility and is guranteed to be secure.
              </p>
            </div>
            <div className="content3">
              <h1>Fast</h1>
              <p>
              Payment is completed instantly without the need for a long wait.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
