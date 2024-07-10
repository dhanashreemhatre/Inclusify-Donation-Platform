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
import Chatbot from '../../ui/Chatbot/page';

const Page = () => {
  // const [popupClosed, setPopupClosed] = useState(false);

  // useEffect(() => {
  //   const closed = localStorage.getItem('popupClosed');
  //   setPopupClosed(closed === 'true');
  // }, []);

  // const handleClosePopup = () => {
  //   setPopupClosed(true);
  //   localStorage.setItem('popupClosed', 'true');
  //   document.body.classList.remove('popup-open'); // Remove popup-open class from body
  // };

  // const [popup, setPopup] = useState(false);

  // useEffect(() => {
  //   if (!popupClosed && !localStorage.getItem('popupShown')) {
  //     setPopup(true);
  //     localStorage.setItem('popupShown', 'true');
  //     document.body.classList.add('popup-open'); // Add popup-open class to body
  //   }
  // }, [popupClosed]);

  // useEffect(() => {
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  // const handleBeforeUnload = () => {
  //   localStorage.clear(); // Clear localStorage when the browser is refreshed
  // };
         

  useEffect(()=>{
    alert("Hey we are working on desktop view ,View the site in mobile for better experience ")
  })
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
        
    </>
  );
};

export default Page;
