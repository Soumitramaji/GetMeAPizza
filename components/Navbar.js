'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut, signIn } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Guest login function
  const handleGuestLogin = async () => {
    // Use NextAuth credentials provider for guest login
    await signIn('guest', { callbackUrl: '/' });
  };

  return (
    <nav className="bg-gray-800 text-white flex flex-wrap justify-between items-center px-4 py-3 md:px-8">
      <Link href="/" className="logo font-bold text-lg md:text-xl">
        GetMePizza!
      </Link>

      <div className="relative mt-2 md:mt-0">
        {session ? (
          <>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
              className="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center"
            >
              Welcome {session.user.name}
              <svg
                className="w-3 h-3 ms-2"
                viewBox="0 0 10 6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              className={`z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 ${
                showDropdown ? '' : 'hidden'
              }`}
            >
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${session.user.name}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Your Page
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <Link href="/login">
              <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2">
                Login
              </button>
            </Link>
            <button
              onClick={handleGuestLogin}
              className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-4 py-2"
            >
              Guest Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
