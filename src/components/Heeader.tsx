// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-7 sm:px-6 lg:px-8 font-serif">
        <div className="flex justify-between items-center py-6">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-3">
            <img 
              src="/aishwarya_logo.png" 
              alt="Aishwarya Bakery Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-4xl sm:text-3xl font-serif font-bold text-amber-900 tracking-tight">
              Aishwarya Bakery
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/#about', label: 'About' },
              { to: '/products', label: 'Products' },
              { to: '/#gallery', label: 'Gallery' },
              { to: '/locations', label: 'Locations' },
              { to: '/#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.to}
                className="text-amber-800 hover:text-rose-600 font-medium relative group py-1"
                onClick={item.to.startsWith('/') ? undefined : (e) => e.preventDefault()}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-orange-100 animate-fadeIn">
            {[
              { to: '/', label: 'Home' },
              { to: '/#about', label: 'About' },
              { to: '/products', label: 'Products' },
              { to: '/#gallery', label: 'Gallery' },
              { to: '/locations', label: 'Locations' },
              { to: '/#contact', label: 'Contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.to}
                className="block py-3 text-amber-800 hover:text-rose-600 font-medium"
                onClick={(e) => {
                  if (!item.to.startsWith('/#')) {
                    closeMenu();
                  }
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}