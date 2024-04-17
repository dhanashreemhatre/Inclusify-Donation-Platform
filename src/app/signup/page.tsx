"use client"
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
  const [passwordmatch, setPasswordMatch] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false); // Add state for showing success message
  const [checkemail, setCheckEmail] = useState(false); // Add state for showing email existence message

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

    // Hide alerts after 4 seconds
    if (showAlert || passwordmatch || showSuccess || checkemail) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
        setPasswordMatch(false);
        setShowSuccess(false);
        setCheckEmail(false);
      }, 4000);
    }

    return () => clearTimeout(timeoutId);
  }, [showAlert, passwordmatch, showSuccess, checkemail]);

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
        setPasswordMatch(true);
        return;
      }

      setLoading(true);
      const response = await axios.post(
        "https://django-donation.vercel.app/accounts/sign-up/",
        user // Send user data as the request body
      );
      
      if (response.status === 201) {
        setShowSuccess(true);
        toast.success("User registered successfully!");
        resetForm();
        router.push("/login");
      } else if (response.status === 400) {
        toast.error("Email already exists. Please use a different email.");
      } else {
        toast.error("Signup failed. Please check the console for details.");
      }
    } catch (error) {
      setCheckEmail(true);
      console.error("Signup failed", error);
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
            <div className="bg-yellow-300 w-89 h-10 flex items-center rounded-md text-white" role="alert">
              <strong className="ml-3">Hey!</strong> <p className="ml-3">Please fill all the fields!!</p>
            </div>
          )}
          {passwordmatch && (
            <div className="bg-red-600 w-90 h-10 flex items-center rounded-md text-white" role="alert">
              <strong className="ml-3">Hey!</strong> <p className="ml-3">Your Password Doesn&apos;t Match!!</p>
            </div>
          )}
          {showSuccess && (
            <div className="bg-green-500 w-90 h-10 flex items-center rounded-md text-white" role="alert">
              <strong className="ml-3">Success!</strong> <p className="ml-3">Email successfully sent to your registered email.</p>
            </div>
          )}
          {checkemail && (
            <div className="bg-red-600 w-90 h-10 flex items-center rounded-md text-white" role="alert">
              <strong className="ml-3">Hey!</strong> <p className="ml-3">User with this Email already exist</p>
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
              type="text"
              placeholder="Username"
              name="username"
              value={user.username}
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
              type="password"
              placeholder="Confirm-Password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={handleInputChange}
            />
            <button onClick={onSignup} disabled={loading}>
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
