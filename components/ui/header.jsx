import React from 'react';
import LogoutButton from '../../app/components/LogoutButton';
import Link from 'next/link';
import { Feather } from 'lucide-react';
// import { useAuth } from "../hooks/auth" 
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

export default function Header({ loggedIn }) {
  // const [user] = useAuth();
	// const router = useRouter();

  // const handleLogout = async () => {
	// 	try {
	// 		await signOut(auth);
	// 		router.push("/auth/login");
	// 	} catch (error) {
	// 		console.error("Failed to log out:", error);
	// 	}
	// };



  return (
    <header
    className={`fixed w-full px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 bg-transparent`}
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
        Home
      </Link>

      <Link
        href="/home"
        className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
      >
        Features
      </Link>

      {/* <Button
        onClick={handleLogout}
        className="text-sm font-medium hover:text-[#FF7F50] transition-colors"
      >
        Sign Out
      </Button> */}

      

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
    </nav>
  </header>
    
  );
}
