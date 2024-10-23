import React, { useState } from 'react';
import { Menu, X, Coins } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coins className="h-8 w-8 text-amber-500" />
            <span className="font-bold text-xl text-amber-500">GoldWizy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#calculator">Calculator</NavLink>
            <NavLink href="#trends">Trends</NavLink>
            <NavLink href="#insights">AI Insights</NavLink>
            <NavLink href="#news">News</NavLink>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <MobileNavLink href="#calculator">Calculator</MobileNavLink>
              <MobileNavLink href="#trends">Trends</MobileNavLink>
              <MobileNavLink href="#insights">AI Insights</MobileNavLink>
              <MobileNavLink href="#news">News</MobileNavLink>
              <button className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-amber-500 transition duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-amber-500 transition duration-200 block px-4"
  >
    {children}
  </a>
);

export default Navbar;