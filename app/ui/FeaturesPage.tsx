'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';

export default function Features() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full bg-violet-600 shadow-md z-50">
        <div className="px-6 py-4 flex justify-between items-center">
          <AcmeLogo />
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="text-white hover:text-violet-400 transition-colors">Home</Link>
            <Link href="/features" className="text-white hover:text-violet-400 transition-colors">Features</Link>
            <Link href="/about" className="text-white hover:text-violet-400 transition-colors">About</Link>
            <Link href="/dashboard" className="bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-400 transition-colors">Go To Dashboard</Link>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4">
            <Link href="/" className="block hover:text-violet-400">Home</Link>
            <Link href="/features" className="block hover:text-violet-400">Features</Link>
            <Link href="/about" className="block hover:text-violet-400">About</Link>
            <Link href="/contact" className="block hover:text-violet-400">Contact</Link>
            <Link href="/dashboard" className="block bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-400 transition-colors">Go To Dashboard</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center py-16 px-6 bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-center w-full">
        <h1 className={`text-4xl md:text-5xl font-extrabold ${lusitana.className}`}>Our Features</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Discover the innovative features that make Primeview the ultimate solution for data management.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-16 px-6 w-full">
        <div className="text-center ">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Real-Time Analytics</h3>
              <p className="mt-4 text-gray-600">
                Gain insights instantly with our powerful, real-time analytics tools.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">User-Friendly Interface</h3>
              <p className="mt-4 text-gray-600">
                Intuitive and easy-to-use design makes data management accessible for everyone.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Secure Data Storage</h3>
              <p className="mt-4 text-gray-600">
                Your data’s security is our top priority, with encrypted storage and access control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="bg-indigo-50 py-16 px-6 w-full">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600">Advanced Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Customizable Dashboards</h3>
              <p className="mt-4 text-gray-600">
                Personalize your experience with fully customizable dashboards for quick access to key data.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Automated Reporting</h3>
              <p className="mt-4 text-gray-600">
                Schedule and automate reports, ensuring you never miss critical updates.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Collaboration Tools</h3>
              <p className="mt-4 text-gray-600">
                Collaborate seamlessly with your team, no matter where they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 w-full">
        <div className="text-center">
          <p className="text-sm mb-4">© 2024 Primeview. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
            <Link href="/features" className="text-gray-300 hover:text-white">Features</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
