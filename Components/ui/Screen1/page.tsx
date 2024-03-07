import React from 'react';
import Link from 'next/link';
import Women from './image/Screenshot 2023-12-28 230437.png';
import Image from 'next/image';
import Arrow from './image/Arrow 1.png';
import tick from './image/Ok.png';
import './screen1.css';

const Page = () => {
  return (
    <div className="screen1">
      <div className="screen1-items">
        <Image src={Women} alt="women-image" className="stats" priority />
        <div className="content">
          <h1>PROVIDE HOPE UNITE KINDNESS</h1>
          <h2>Unite goodness through the movement of zakat, charity, and benevolence. Together, let us share for those in need.</h2>
        </div>
      </div>
      <div className="button_page">
        <button>Get Started</button>
        <h2><Link href="/login"><u>Donation Process</u></Link></h2>
        
      </div>
      <div className="label">
       
        <h1>Registered and directly supervised by the Supervisory Body</h1>
      </div>
    </div>
  );
};
export default Page;
