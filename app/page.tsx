'use client'

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 w-full bg-violet-600 shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <AcmeLogo />
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="text-white hover:text-violet-400 transition-colors">
              Home
            </Link>
            <Link href="/features" className="text-white hover:text-violet-400 transition-colors">
              Features
            </Link>
            <Link href="/about" className="text-white hover:text-violet-400 transition-colors">
              About
            </Link>
            <Link
              href="/login"
              className="bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-400 transition-colors"
            >
              Go To Dashboard
            </Link>
          </div>
          {/* Mobile Menu Icon */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white py-4 px-6 space-y-4">
            <Link href="/" className="block hover:text-violet-400">
              Home
            </Link>
            <Link href="/features" className="block hover:text-violet-400">
              Features
            </Link>
            <Link href="/about" className="block hover:text-violet-400">
              About
            </Link>
            <Link href="/contact" className="block hover:text-violet-400">
              Contact
            </Link>
            <Link
              href="/dashboard"
              className="block bg-violet-500 text-white py-2 px-6 rounded-lg hover:bg-violet-400 transition-colors"
            >
              Go To Dashboard
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 px-6 bg-gradient-to-r from-violet-500 to-indigo-600 text-white ">
        <div className="flex flex-col justify-center gap-6 md:w-1/2">
          <h1 className={`text-4xl md:text-5xl font-extrabold ${lusitana.className}`}>
            Welcome to Primeview.
          </h1>
          <p className={`text-lg md:text-xl text-gray-200 `}>
            This is a custom project designed to provide an enhanced, personalized experience, hosted and supported by Vercel.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-violet-400 px-6 py-3 text-base font-medium text-white hover:bg-violet-300 transition-colors"
          >
            Go To Dashboard <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Dashboard Screenshot"
          />
          <Image
            src="/hero-mobile.png"
            width={500}
            height={620}
            className="block md:hidden"
            alt="Mobile Version Screenshot"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Features and Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Customizable</h3>
              <p className="mt-4 text-gray-600">
                Fully customizable dashboard with real-time data fetching and dynamic views.
              </p>
            </div>
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">API Integrations</h3>
              <p className="mt-4 text-gray-600">
                Seamlessly integrate external APIs for real-time information updates.
              </p>
            </div>
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-violet-500">Enhanced UX</h3>
              <p className="mt-4 text-gray-600">
                Optimized for user experience with smooth navigation and modern UI design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 text-violet-600">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <p className="text-lg text-gray-600">
                Primeview has completely transformed how we manage our data. The customizable dashboard and real-time updates are game-changers!
              </p>
              <p className="mt-4 font-semibold text-violet-500">John Doe</p>
              <p className="text-sm text-gray-400">CEO, Acme Inc.</p>
            </div>
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <p className="text-lg text-gray-600">
                An intuitive and beautiful platform. Highly recommend for anyone looking to boost productivity with powerful integrations!
              </p>
              <p className="mt-4 font-semibold text-violet-500">Jane Smith</p>
              <p className="text-sm text-gray-400">Product Manager, TechCorp</p>
            </div>
            <div className="bg-white-800 shadow-lg rounded-lg p-6">
              <p className="text-lg text-gray-600">
                The user experience is seamless, and the platform is incredibly easy to use. It has greatly improved the efficiency of our team.
              </p>
              <p className="mt-4 font-semibold text-violet-500">Sam Johnson</p>
              <p className="text-sm text-gray-400">Operations Lead, StartUp Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-violet-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Start using Primeview today and unlock the full potential of your data management with our powerful tools and intuitive UI.
        </p>
        <Link
          href="/login"
          className="bg-white text-violet-600 rounded-lg px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Sign In Now
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
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
