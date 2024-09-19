"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { doCreateUserWithEmailAndPassword } from "@/hooks/auth";
import Header from "../../../components/ui/header";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        setMessage("Sign up successful!");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  const redirectToLogin = () => {
    router.push("/auth/signin");
  };

  const onGoogleSignIn = () => {
    doSignInWithGoogle()
      .then(() => {
        router.push("/home");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  return (

    <div>
      <Header />
    <div className="flex flex-col justify-center items-center min-h-screen w-full bg-gradient-to-br from-[#ADD8E6] via-[#98FF98] to-[#E6E6FA] text-[#36454F] px-4">
      <div className="w-full max-w-md p-8 backdrop-blur-lg bg-white/30 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2F4F4F]">Sign Up</h1>
        {errorMessage && (
          <div className="bg-[#FF7F50]/50 border border-[#FF7F50] text-[#36454F] px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        {message && (
          <div className="bg-[#98FF98]/50 border border-[#98FF98] text-[#36454F] px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{message}</span>
          </div>
        )}
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-white/50 border border-[#B0C4DE] rounded-md shadow-sm placeholder-[#36454F]/50 focus:outline-none focus:ring-2 focus:ring-[#ADD8E6] focus:border-[#ADD8E6]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white/50 border border-[#B0C4DE] rounded-md shadow-sm placeholder-[#36454F]/50 focus:outline-none focus:ring-2 focus:ring-[#ADD8E6] focus:border-[#ADD8E6]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="w-full py-3 px-4 bg-[#ADD8E6] hover:bg-[#98FF98] focus:ring-[#E6E6FA] focus:ring-offset-[#F5F5DC] text-[#2F4F4F] font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200"
          >
            Sign Up
          </button>

          <button
          onClick={onGoogleSignIn}
          className="w-full mt-4 py-3 px-4 bg-[#FF7F50]/60 hover:bg-[#FF7F50]/80 focus:ring-[#FF7F50] focus:ring-offset-[#F5F5DC] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
            />
          </svg>
          Sign Up with Google
        </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <button
            onClick={redirectToLogin}
            className="font-medium text-[#FF7F50] hover:text-[#FFC0CB] focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            Click here to log in.
          </button>
        </p>
      </div>
    </div>
    </div>
  );
}