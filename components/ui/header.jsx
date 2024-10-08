"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Feather, Menu, X } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function Header({ loggedIn }) {
  const [user] = useAuth();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const NavLinks = () => (
    <>
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
    </>
  );

  return (
    <header
      className={`fixed w-full px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <Link className="flex items-center justify-center" href="/">
        <Feather className="h-8 w-8 mr-2 text-[#FF7F50]" />
        <span className="font-bold text-xl text-[#FF7F50]">DermAI</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <NavLinks />
      </nav>
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 hover:text-[#FF7F50] transition-colors"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-2 px-4 md:hidden">
          <nav className="flex flex-col gap-2">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
}