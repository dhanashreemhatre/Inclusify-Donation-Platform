// Import necessary modules and libraries
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import home from "./Image/Group 21.png";
import Google from "./Image/Google.png";
import { useRouter } from 'next/navigation';

import axios from "axios";
import { toast } from "react-hot-toast";
import './signup.css'

// Signup component definition
export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  // Function to reset the form
  const resetForm = () => {
    setUser({
      email: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  };

  const onSignup = async () => {
    try {
      // Check if any field is empty
      if (!user.email || !user.password || !user.confirmpassword || !user.username) {
        toast.error("Please fill in all fields");
        return;
      }

      // Check if password and confirm password match
      if (user.password !== user.confirmpassword) {
        toast.error("Password and Confirm Password do not match");
        return;
      }
      
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/sign-up/",
        user
      );
      router.push("/login");
      if (response.status === 201) {
        console.log("success");
        toast.success("User registered successfully!");

        // Reset the form
        resetForm();

        // Navigate to the login page
        router.push("/login");
      } else if (response.status === 409) {
        // Assuming HTTP status 409 indicates that the email already exists
        toast.error("Email already exists. Please use a different email.");
      } else {
        toast.error("Signup failed. Please check the console for details.");
      }
    } catch (error: any) {
      console.error("Signup failed", error);

      // Log the detailed error response
      if (error.response) {
        console.error("Error response:", error.response.data);
      }

      toast.error("Signup failed. Please check the console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="signup">
      <div className="signup_items">
        <div className="icon_signup">
          <Image src={home} alt="loading-image" />
        </div>
        <div className="heading_signup">
          <h1>Access Your Account</h1>
        </div>
        <div className="form">
          <form>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm-Password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={handleInputChange}
            />
            <button  onClick={onSignup} disabled={loading}>
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>
          <div className="google">
            <h1>-or sign in with-</h1>
            <button>
              <Image src={Google} alt="loading-image" />
              <h1>Sign up with google</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="login_to">
        <h1> Already have an account?</h1>
        <Link href="/login">
          <h2>Login</h2>
        </Link>
      </div>
    </div>
  );
}
