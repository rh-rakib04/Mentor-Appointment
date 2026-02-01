import React from 'react';
import { Link } from 'react-router';
import Logo from './Logo';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#7e7e7e] text-gray-300  pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Description */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm leading-relaxed text-gray-400">
              Connecting ambitious learners with world-class mentors. 
              Accelerate your career with 1:1 guidance from industry experts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:text-primary transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-merienda font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/mentors" className="hover:text-secondary transition-colors">Find a Mentor</Link></li>
              <li><Link to="/register" className="hover:text-secondary transition-colors">Become a Mentor</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-white font-merienda font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <span>hello@mentorconnect.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <span>+1 (555) 000-MENTOR</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-secondary" />
                <span>123 Tech Square, SF, CA</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div>
            <h4 className="text-white font-merienda font-bold mb-6">Stay Updated</h4>
            <p className="text-xs text-gray-400 mb-4">Get the latest career tips and mentor highlights.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input input-sm bg-gray-800 border-none focus:ring-1 focus:ring-primary text-white" 
              />
              <button className="btn btn-sm btn-primary border-none text-white font-bold">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ">
          <p>© 2026 MentorConnect. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={14} />
            <span>English (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;