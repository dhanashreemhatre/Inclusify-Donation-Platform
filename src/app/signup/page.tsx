// Import necessary modules and libraries
"use client";
import { useState, useEffect } from "react";
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
  const [showAlert, setShowAlert] = useState(false);
  const [passwordmatch,setpasswordmatch]=useState(false)

  // Function to reset the form
  const resetForm = () => {
    setUser({
      email: "",
      password: "",
      confirmpassword: "",
      username: "",
    });
  };
  useEffect(() => {
    let timeoutId;

    if (showAlert || passwordmatch) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
        setpasswordmatch(false);
      }, 2000); // Set timeout for 2 seconds
    }

    return () => clearTimeout(timeoutId); // Cleanup the timeout when component unmounts or showAlert changes
  }, [showAlert,passwordmatch]);

  const onSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Check if any field is empty
      if (!user.email || !user.password || !user.confirmpassword || !user.username) {
        setShowAlert(true);
        return;
      }

      // Check if password and confirm password match
      if (user.password !== user.confirmpassword) {
        setpasswordmatch(true)
        return;
      }
      
      setLoading(true);
      const response = await axios.post(
        "https://django-donation.vercel.app/accounts/sign-up/",
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
          <h1>Register Your Account</h1>
        </div>
        <div className="form">
        {showAlert && (
              <div className="bg-yellow-300 w-80 h-10 flex items-center rounded-md text-white" role="alert">
                <strong className="ml-3">Hey!</strong> <p className="ml-3">Please fill all the fields!!</p>
              </div>
            )}
        {passwordmatch && (
              <div className="bg-red-600 w-80 h-10 flex items-center rounded-md text-white" role="alert">
                <strong className="ml-3">Hey!</strong> <p className="ml-3">Your Password Doesn't Match!!</p>
              </div>
            )}
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
