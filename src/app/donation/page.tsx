"use client";
import React, { useState } from "react";
import "./donation.css";
import Image from "next/image";
import tick from "./image/Ok.png";
import heart from './image/Heart Cross.png'
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
const Page = () => {


  return (
    <>
      <div className="donation">
        <div className="donation_items">
         
          <div className="company_logo">
            <h1>INCLUSIFY</h1>
            <h2>Empower Justice Through Donations</h2>
            <div className="company_plans">
              <div className="company_plans_items">
                <div className="plans_items1">
                  <div className="plans_items_content">
                    <h3>ONE TIME</h3>
                    <Image src={tick} alt="loading-image" priority />
                  </div>
                  <div className="divider_plans"></div>
                </div>
                <div className="plans_items2">
                  <div className="plans_items_content">
                    <h3>Monthly</h3>
                    <Image src={heart} alt="loading-image" priority />
                  </div>
                </div>
                <div className="plans_items2">
                  <div className="plans_items_content">
                    <h3>Yearly</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
         <div className="form_donation1">
             <form action="/">
              <label htmlFor="campaign">Select the campaign for which you want to donate  </label>
              <select name="languages" id="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select>
      <label htmlFor="price">Enter a Donation Amount</label>
      <input type="number" placeholder="Enter amount"/>
      <label htmlFor="price">Name of Donar</label>
      <input type="number" placeholder="Your Name"/>
      <label htmlFor="price">Your Email</label>
      <input type="number" placeholder="Enter Email"/>
      <button ><Link href="/payment">Pay Now</Link></button>
             </form>
            
         </div>
        </div>
      </div>
    </>
  );

};


export default Page;