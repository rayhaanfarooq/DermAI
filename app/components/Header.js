import React from 'react';
import LogoutButton from './LogoutButton';

export default function Header({ loggedIn }) {
  return (
    <header className="w-full sticky top-0 z-10 bg-transparent text-black">
      <div
        className="flex items-center justify-between p-4 h-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <h1 className="text-white font-bold text-xl tracking-wide pr-5">
          EchoGPT
        </h1>
        {loggedIn && <LogoutButton />}
      </div>
    </header>
  );
}
