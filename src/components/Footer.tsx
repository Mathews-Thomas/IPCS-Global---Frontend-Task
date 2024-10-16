import React from 'react';
import twitter from "../../public/twitter.png"
import facebook from "../../public/facebook.png"
import insta from "../../public/insta.png"
import github from "../../public/github.png"
import badge from "../../public/Badge.png"
import badge1 from "../../public/Badge (1).png"
import badge2 from "../../public/Badge (2).png"
import badge3 from "../../public/Badge (3).png"
import badge4 from "../../public/Badge (4).png"


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-10">
    
      <div className="bg-black text-white py-10 px-6 rounded-lg container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-3xl font-bold mb-6 md:mb-0">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-auto px-4 py-2 rounded-full text-black outline-none"
          />
          <button className="ml-4 px-6 py-2 bg-white text-black font-bold rounded-full">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

    
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
         
          <div>
            <h2 className="font-bold text-lg mb-4">SHOP.CO</h2>
            <p className="text-gray-600">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
                {/* Facebook SVG */}
                <img src={facebook}/>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
                {/* Instagram SVG */}
                <img src={insta}/>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
                {/* Twitter SVG */}
                <img src={twitter}/>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
                {/* Github SVG */}
                <img src={github}/>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Features</a></li>
              <li><a href="#" className="hover:text-black">Works</a></li>
              <li><a href="#" className="hover:text-black">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">HELP</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Customer Support</a></li>
              <li><a href="#" className="hover:text-black">Delivery Details</a></li>
              <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">FAQ</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Account</a></li>
              <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-black">Orders</a></li>
              <li><a href="#" className="hover:text-black">Payments</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-black">Free eBooks</a></li>
              <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
              <li><a href="#" className="hover:text-black">How to - Blog</a></li>
              <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10 border-t pt-6 text-sm text-gray-600">
          <p>Shopco © 2000-2023. All Rights Reserved</p>
          <div className="flex space-x-4">
            {/* Visa SVG */}
            <img src={badge}/>

            {/* Master SVG */}
            <img src={badge1}/>
            {/* Paypal SVG */}
            <img src={badge2}/>

            {/* Apple Pay SVG */}
            <img src={badge3}/>
            {/* Google Pay SVG */}
            <img src={badge4}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
