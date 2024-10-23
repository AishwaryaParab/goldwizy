import React from 'react';
import { Coins, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coins className="h-8 w-8 text-amber-500" />
              <span className="font-bold text-xl text-amber-500">GoldWizy</span>
            </div>
            <p className="text-sm">
              Your trusted companion for gold investment analysis and insights.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter className="h-5 w-5" />} />
              <SocialIcon icon={<Facebook className="h-5 w-5" />} />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              <SocialIcon icon={<Mail className="h-5 w-5" />} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              <FooterLink href="#calculator">Gold Calculator</FooterLink>
              <FooterLink href="#trends">Price Trends</FooterLink>
              <FooterLink href="#insights">AI Insights</FooterLink>
              <FooterLink href="#news">Market News</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#learn">Learning Center</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink href="#privacy">Privacy Policy</FooterLink>
              <FooterLink href="#terms">Terms of Service</FooterLink>
              <FooterLink href="#disclaimer">Disclaimer</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} GoldWizy. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Disclaimer: This website provides general information and analysis.
            It is not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="text-gray-400 hover:text-amber-500 transition duration-200"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-400 hover:text-amber-500 transition duration-200"
    >
      {children}
    </a>
  </li>
);

export default Footer;