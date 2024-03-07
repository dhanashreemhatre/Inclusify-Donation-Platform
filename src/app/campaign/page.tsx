"use client"
import React from 'react'
import './campaign.css'
import Navbar from '../../../Components/ui/Navbar/page'
import Image from 'next/image'
import child from './image/stephen-andrews-u0zTce7KNlY-unsplash.jpg'
import volunteer from './image/alexander-simonsen-44al1GlFVxo-unsplash.jpg'
import Footer from '../../../Components/ui/Footer/page'
import Link from 'next/link'
function page() {
  return (
    <div>
          <Navbar/>
          <div className="main_campaign">
            <div className="main_campaign_heading">
            <h1>Introduction to our <br/>campaign</h1>
            </div>
            <div className="campaign_box">
                 <div className="campaign_box_education">
                      <Image
                         src={child}
                         alt='loading image'
                         className='child-image'
                         priority
                      />

                      <div className="tag">
                          <h1>Education</h1>
                      </div>

                      <div className="box_main">
                          <div className="box_main_content">
                              <h1>Campaign To Provide Books To <br /> Children </h1>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus tenetur rerum quos nisi vero impedit ullam nulla, deleniti quibusdam sunt id dicta totam.</p>
                          </div>

                          <div className="funds">
                            <div className="fund_raised">
                                <h1>Raised</h1>
                                <h2>Rs.500</h2>
                            </div>
                            <div className="fund_raised">
                                <h3>Goal</h3>
                                <h2>Rs.500</h2>
                            </div>
                          </div>
                          <div className="donate_button">
                            <button>Donate</button>
                          </div>
                      </div>
                 </div> 

                 <div className="campaign_box_education">
                      <Image
                         src={child}
                         alt='loading image'
                         className='child-image'
                         priority
                      />

                      <div className="tag">
                          <h1>Education</h1>
                      </div>

                      <div className="box_main">
                          <div className="box_main_content">
                              <h1>Campaign To Provide Books To <br /> Children </h1>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet doloribus tenetur rerum quos nisi vero impedit ullam nulla, deleniti quibusdam sunt id dicta totam.</p>
                          </div>

                          <div className="funds">
                            <div className="fund_raised">
                                <h1>Raised</h1>
                                <h2>Rs.500</h2>
                            </div>
                            <div className="fund_raised">
                                <h3>Goal</h3>
                                <h2>Rs.500</h2>
                            </div>
                          </div>
                          <div className="donate_button">
                            <button>Donate</button>
                          </div>
                      </div>
                 </div> 
            </div>
            <div className="campaign_volunteer">
                 <div className="campaign_volunteer_content">
                    <div className="volunteer_heading">
                        <h1>BECOME A VOLUNTEER</h1>
                        <p>Join our community to volunteer and help <br /> those in need </p>
                    </div>
                    <div className="donate_button">
                            <button><Link href="/campaign/form">Become A Volunteer</Link></button>
                          </div>

                          <Image
                            src={volunteer}
                            alt='loading-image'
                            className='volunteer_image'
                          />
                 </div>
            </div>
            <Footer/>
          </div>
    </div>
  )
}

export default page
