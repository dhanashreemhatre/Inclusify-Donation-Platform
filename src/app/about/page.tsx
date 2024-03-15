"use client";
import React from "react";
import "./about.css";
import Navbar from "./../../../Components/ui/Navbar/page";
import Footer from "./../../../Components/ui/Footer/page";
import child from "./image/kid.png";
import Image from "next/image";

function page() {
  return (
    <div>
      <Navbar />
      <div className="main-component">
        <div className="banner">
          <Image src={child} alt="banner-img" className="banner-img" />
          <h1>About Us</h1>
        </div>
        <div className="information">
          <h1>Our goal is to help the deprived ones</h1>
          <p>
            Welcome to Inclusify, a platform dedicated to making a difference in
            the lives of the less fortunate. Our mission is simple yet powerful
            – to extend a helping hand to the poor and deprived, providing them
            with hope, resources, and opportunities for a brighter future.
          </p>
          <h1>Our Story</h1>
          <p>Inclusify was founded with a vision of creating positive change in the world. The driving force behind our initiative is the belief that every individual, regardless of their circumstances, deserves a chance to lead a dignified and fulfilling life. Poverty should never be a barrier to dreams, and we are committed to breaking down those barriers.</p>
            <h1>What We Do</h1>
            <p>At Inclusify, we channel the collective compassion of our community to address the pressing needs of those who need it most. Through strategic partnerships, transparent operations, and a dedicated team of volunteers, we strive to provide essential resources such as food, clean water, education, and healthcare to impoverished communities.</p>
        <h1>Transparency and Accountability</h1>
        <p>We understand the importance of trust in charitable giving. Inclusify is committed to transparency and accountability in all our endeavors. We provide regular updates on our projects, financial reports, and the impact of your contributions, ensuring that you can see the real-world difference your support makes.</p>
        <h1>Get Involved</h1>
        <p>We believe that change is a collective effort, and everyone has a role to play. Whether you choose to donate, volunteer, or spread awareness, your involvement is crucial in building a better world. Explore our website to learn more about our ongoing projects and how you can make a difference today.
Thank you for being a part of Inclusify. Together, we can turn compassion into action and make a lasting impact on the lives of those in need.</p>
        <button>Become a Volunteer</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
