'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';

export default function AboutPage() {
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
        <div className='max-w-6xl mx-auto'>

        </div>
        <div className='max-w-6xl mx-auto'>
        <h1 className={`text-4xl md:text-5xl font-extrabold ${lusitana.className}`}>About Primeview</h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4">
          Learn more about our mission, our journey, and the values that drive us.
        </p>
        </div>
        
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6 w-full">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At Primeview, our mission is to empower individuals and businesses with innovative data management tools. We strive to simplify data interactions and create a positive impact for users worldwide.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-indigo-50 py-16 px-6 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Integrity</h3>
              <p className="mt-4 text-gray-600">
                We uphold the highest standards of integrity in all of our actions, ensuring transparency and trust.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Innovation</h3>
              <p className="mt-4 text-gray-600">
                Constantly evolving, we embrace creativity and innovation in developing better solutions.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Customer Focus</h3>
              <p className="mt-4 text-gray-600">
                Our customers are at the heart of everything we do, and we work tirelessly to meet their needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-16 px-6 w-full">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600 max-w-6xl mx-auto">Our Journey</h2>
          <p className="text-lg text-gray-600 ">
            Primeview was founded in 2023 with the vision to redefine data management. Since then, we have continuously evolved, adapting to the dynamic landscape of technology while keeping our core values intact.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 w-full ">
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
