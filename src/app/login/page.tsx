"use client";
import React, { useState } from "react";
import "./login.css";
import home from "./Image/Group 21.png";
import Link from "next/link";
import Image from "next/image";
import Google from "./Image/Google.png";
import Cookies from "js-cookie"
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter(); // Initialize useRouter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const apiUrl = "http://127.0.0.1:8000/accounts/login/";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        try {
          const data = await response.json();
          const token = data.token;
          
         
          Cookies.set("jwtToken", token);

          // Redirect using Next.js router instead of window.location.href
          router.push('/donation');
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        console.error("Invalid credentials or server error");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="login">
        <div className="login_items">
          <div className="icon_login">
            <Image src={home} alt="loading-image" />
          </div>
          <div className="heading_login">
            <h1>Access Your Account</h1>
          </div>
          <div className="form">
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button disabled={loading}>{loading ? "Signing in..." : "Sign in"}</button>
            </form>
            <div className="google">
              <h1>-or sign in with-</h1>
              <button>
                <Image src={Google} alt="loading-image" />
                <h1>Sign in with Google</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="signup">
          <h1>Don't have an account?</h1>
          <Link href="/signup">
            <h2>Sign up</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;