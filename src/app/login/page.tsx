"use client"
import React, { useState, useEffect } from "react";
import commonStyles from "./login.module.css";
import home from "./Image/Group 21.png";
import Link from "next/link";
import Image from "next/image";
import Google from "./Image/Google.png";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showInvalidCredentialsAlert, setShowInvalidCredentialsAlert] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (showAlert || showInvalidCredentialsAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
        setShowInvalidCredentialsAlert(false);
      }, 2000); // Set timeout for 2 seconds
    }

    return () => clearTimeout(timeoutId); // Cleanup the timeout when component unmounts or showAlert changes
  }, [showAlert,showInvalidCredentialsAlert]);

  const handleLogin = async (e:any) => {
    e.preventDefault();

    // Check if email or password is empty
    if (!email || !password) {
      setShowAlert(true);
      return;
    }

    const apiUrl = "https://django-donation.vercel.app/accounts/login/";

    try {
      
      setLoading(true);
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

          router.push("/donation");
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      } else {
        setShowInvalidCredentialsAlert(true);
        setPassword("")
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={commonStyles.loginContainer}>
        <div className={commonStyles.loginItems}>
          <div className={commonStyles.iconLogin}>
            <Image src={home} alt="loading-image" />
          </div>
          <div className={commonStyles.headingLogin}>
            <h1>Access Your Account</h1>
          </div>
          <div className={commonStyles.form}>
            {showAlert && (
              <div className="bg-yellow-300 w-80 h-10 flex items-center rounded-md text-white" role="alert">
                <strong className="ml-3">Hey!</strong> <p className="ml-3">Please fill all the fields!!</p>
              </div>
            )}
            {showInvalidCredentialsAlert&& (
              <div className="bg-red-500 w-90 h-10 flex items-center rounded-md text-white" role="alert">
                <strong className="ml-3">Hey!</strong> <p className="ml-3">Please use correct Credentials!!</p>
              </div>
            )}
           
            <form onSubmit={handleLogin}>
              <input
                className={commonStyles.loginInput}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={commonStyles.loginInput}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </form>
            <div className={commonStyles.google}>
              <h1 className={commonStyles.googleHeading}>-or sign in with-</h1>
              <button className={commonStyles.googleButton}>
                <Image src={Google} alt="loading-image" />
                <h1>Sign in with Google</h1>
              </button>
            </div>
          </div>
        </div>
        <div className={commonStyles.signup}>
          <h1>Don&apos;t have an account?</h1>
          <Link href="/signup">
            <h2>Sign up</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
