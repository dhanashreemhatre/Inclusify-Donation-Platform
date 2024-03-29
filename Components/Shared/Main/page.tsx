import React, { useState, useEffect } from 'react';
import './main.css';
import Screen1 from '../../ui/Screen1/page';
import Screen2 from '../../ui/Screen2/page';
import Screen3 from '../../ui/Screen3/page';
import Screen4 from '../../ui/Screen4/page';
import Screen5 from '../../ui/Screen5/page';
import Screen6 from '../../ui/Screen6/page';
import Screen7 from '../../ui/Screen7/page';
import Footer from '../../ui/Footer/page';
import Popup from '../../Alert/Newsletter/page';
import Chatbot from '../../ui/Chatbot/page';
import { FaTimes } from 'react-icons/fa';

const Page = () => {
  const [popup, setPopup] = useState(true);

  useEffect(() => {
    // Toggle 'popup-open' class on body when the popup is displayed or hidden
    document.body.classList.toggle('popup-open', popup);
  }, [popup]);

  return (
    <>
      <div className="container">
        <Screen1 />
        <Screen2 />
        <Screen3 />
        <Chatbot />
        <Screen4 />
        <Screen5 />
        <Screen6 />
        <Screen7 />
        <Footer />
      </div>
      {popup && (
  <div className="popup-overlay">
      <FaTimes className="close_icon" onClick={() => setPopup(false)} />
      <Popup />
  </div>
)}


    </>
  );
};

export default Page;
