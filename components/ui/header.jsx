"use client"
import React from "react";
import Link from "next/link";
import { Feather } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useState, useEffect } from "react";

export default function Header({ loggedIn }) {
  const [user] = useAuth();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <header
      className={`fixed w-full px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300  ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}
    >
      <Link className="flex items-center justify-center" href="/">
        <Feather className="h-8 w-8 mr-2 text-[#FF7F50]" />
        <span className="font-bold text-xl text-[#FF7F50]">DermAI</span>
      </Link>
      <nav className="flex gap-6">
        <Link
          className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
          href="/"
        >
          Landing Page
        </Link>

        <Link
          href="/home"
          className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
        >
          Start Chat
        </Link>

        <Link
          href="/pricing"
          className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
        >
          Pricing
        </Link>

        {user ? (
          <button
            onClick={handleLogout}
            className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
          >
            Sign Out
          </button>
        ) : (
          <>
            <Link
              href="/auth/signin"
              className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/auth/signup"
              className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
            >
              Sign Up
            </Link>
          </>
        )}

      </nav>
    </header>
  );
}
