import React from 'react'
import './main.css'
import Screen1 from '../../ui/Screen1/page'
import Screen2 from '../../ui/Screen2/page'
import Screen3 from '../../ui/Screen3/page'
import Screen4 from '../../ui/Screen4/page'
import Screen5 from '../../ui/Screen5/page'
import Screen6 from '../../ui/Screen6/page'
import Screen7 from '../../ui/Screen7/page'
import Footer from '../../ui/Footer/page'
import Chatbot from '../../ui/Chatbot/page'
const page = () => {
  return (
    <>
    <div className="container">
     <Screen1/>
     <Screen2/>
     <Screen3/>
     <Chatbot/>
     <Screen4/>
     <Screen5/>
     <Screen6/>
     <Screen7/>
     <Footer/>
    </div>
         

    </>
  )
}

export default page
