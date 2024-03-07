// Import necessary dependencies
"use client";
import { React, useEffect } from "react";
import "./payment.css";
import { useRouter } from "next/navigation"; // Corrected import statement
import phonepay from './image/icons8-phone-pe-48.png';
import rajorpay from './image/razorpay (1).png';
import paypal from './image/icons8-paypal-48.png';
import googlepay from './image/icons8-google-pay-48.png';
import ok from './image/Ok.png';
import Image from "next/image";

const Page = () => {
    const router = useRouter();
    const { amount } = router.query || { amount: null };

    useEffect(() => {
        // You can use the 'amount' here for any processing or display
        console.log("Selected Amount:", amount);
    }, [amount]);

    return (
        <>
            <div className="payment">
                <div className="payment_items">
                    <div className="company_logo">
                        <h1>INCLUSIFY</h1>
                        <h2>Select a Payment Method</h2>
                    </div>
                    <div className="payment_method">
                        <div className="payment_company">
                            <Image
                                src={phonepay}
                                alt="loading-image"
                                priority
                                className="payment-logo"
                            />
                            <h1>Phone Pay</h1>
                        </div>
                        <div className="payment_company">
                            <Image
                                src={rajorpay}
                                alt="loading-image"
                                priority
                                className="payment-logo"
                            />
                            <h1>Rajor Pay</h1>
                        </div>
                        <div className="payment_company">
                            <Image
                                src={paypal}
                                alt="loading-image"
                                priority
                                className="payment-logo"
                            />
                            <h1>Paypal</h1>
                        </div>
                        <div className="payment_company">
                            <Image
                                src={googlepay}
                                alt="loading-image"
                                priority
                                className="payment-logo"
                            />
                            <h1>Google Pay</h1>
                        </div>
                        <div className="additonal">
                            <Image
                                src={ok}
                                alt="loading-image"
                                priority
                                className="payment-logo"
                            />
                            <h1>Cover processing fees of $12.92</h1>
                        </div>
                        {/* The following button is missing text/content */}
                        <button  onClick={() => window.location.href = "https://pages.razorpay.com/pl_NNOspXsYz42GTM/view"}className="payment_donation">Click to Pay</button>
                        <p>Your card will be charged when you click Pay</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
