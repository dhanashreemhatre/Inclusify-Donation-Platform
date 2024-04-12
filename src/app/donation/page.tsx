"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import './donation.css'

const Page = () => {
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post("http://localhost:5000/createOrder", formData);
      const { data } = response;

      if (data.success) {
        const options = {
          key: data.key_id,
          amount: data.amount,
          currency: "INR",
          name: data.product_name,
          description: data.description,
          image: "https://dummyimage.com/600x400/000/fff",
          order_id: data.order_id,
          handler: function (response) {
            alert("Payment Succeeded");
          },
          prefill: {
            contact: data.contact,
            name: data.name,
            email: data.email,
          },
          notes: {
            description: data.description,
          },
          theme: {
            color: "#2300a3",
          },
        };

        const razorpayObject = new window.Razorpay(options);
        razorpayObject.open();
      } else {
        alert(data.msg);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="donation">
        <div className="donation_items">
          <div className="company_logo">
            <h1>INCLUSIFY</h1>
            <h2>Empower Justice Through Donations</h2>
          </div>
          <div className="form_donation1">
            <form onSubmit={handlePayment}>
              <label htmlFor="amount" className="mr-24">
                Enter a Donation Amount
              </label>
              <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} placeholder="Enter amount" />
              <label htmlFor="name" className="mr-40">
                Name of Donor
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" />
              <label htmlFor="email" className="mr-48">
                Your Email
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" />
              <button type="submit" className="bg-green-600">Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
