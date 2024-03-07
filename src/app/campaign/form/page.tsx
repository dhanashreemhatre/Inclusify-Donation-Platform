"use client"
import React from 'react'
import Navbar from '../../../../Components/ui/Navbar/page'
import child from '../image/stephen-andrews-u0zTce7KNlY-unsplash.jpg'
import Image from 'next/image'
import './form.css'
import Footer from '../../../../Components/ui/Footer/page'
function page() {
  return (
    <>
       <Navbar/>
       <div className="form_content">
        <Image
           src={child}
           alt='loading-image'
           className='child1'
        />
        <div className="heading_form">BECOME VOLUNTEER</div>
        <div className="form">
            <h1>Fill the form</h1>

           
        </div>
        <form action="/">
                <label htmlFor="firstname">First Name</label>
                <input type="text" />
                <label htmlFor="lastname">Last Name</label>
                <input type="text" />
                <label htmlFor="email">Email</label>
                <input type="email" />
                <label htmlFor="phone">Phone Number</label>
                <input type="phone" />
                <button>Submit</button>
            </form>

            <Footer/>
       </div>
    </>
  )
}

export default page
