import React from "react";

const IphoneHeaderFooter = () => {
  return (
    <div className="bg-gray-100 text-black font-sans">
      {/* Header Section */}
      <div className="p-10">
        <h1 className="text-5xl font-bold mb-6">iPhone</h1>
        <div className="grid grid-cols-3 gap-12">
          {/* Explore iPhone */}
          <div>
            <h2 className="text-gray-600 mb-2">Explore iPhone</h2>
            <ul className="space-y-2 font-semibold">
              <li>Explore All iPhone</li>
              <li>iPhone 16 Pro</li>
              <li>iPhone 16</li>
              <li>iPhone 16e</li>
              <li>iPhone 15</li>
              <li className="font-normal text-sm mt-4">Compare iPhone</li>
              <li className="font-normal text-sm">Switch from Android</li>
            </ul>
          </div>

          {/* Shop iPhone */}
          <div>
            <h2 className="text-gray-600 mb-2">Shop iPhone</h2>
            <ul className="space-y-2 font-semibold">
              <li>Shop iPhone</li>
              <li>iPhone Accessories</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
            </ul>
          </div>

          {/* More from iPhone */}
          <div>
            <h2 className="text-gray-600 mb-2">More from iPhone</h2>
            <ul className="space-y-2 font-semibold">
              <li>iPhone Support</li>
              <li>AppleCare+ for iPhone</li>
              <li>iOS 26 Preview</li>
              <li>Apple Intelligence</li>
              <li>Designed for Families</li>
              <li>Apps by Apple</li>
              <li>iPhone Privacy</li>
              <li>iCloud+</li>
              <li>Wallet, Pay</li>
              <li>Siri</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white text-sm border-t border-gray-300 pt-10 pb-4 px-10">
        <div className="hidden md:grid grid-cols-5 gap-8 text-gray-800 mb-6 ">
          <div>
            <h3 className="font-bold mb-2">Shop and Learn</h3>
            <ul className="space-y-1">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Vision</li>
              <li>AirPods</li>
              <li>TV & Home</li>
              <li>AirTag</li>
              <li>Accessories</li>
              <li>Gift Cards</li>
              <li className="font-bold mt-2">Apple Wallet</li>
              <li>Wallet</li>
              <li>Apple Pay</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Account</h3>
            <ul className="space-y-1">
              <li>Manage Your Apple Account</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">Entertainment</h3>
            <ul className="space-y-1">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Podcasts</li>
              <li>Apple Books</li>
              <li>App Store</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Apple Store</h3>
            <ul className="space-y-1">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Group Reservations</li>
              <li>Apple Summer Camp</li>
              <li>Apple Store App</li>
              <li>Certified Refurbished</li>
              <li>Apple Trade In</li>
              <li>Financing</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">For Business</h3>
            <ul className="space-y-1">
              <li>Apple and Business</li>
              <li>Shop for Business</li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">For Education</h3>
            <ul className="space-y-1">
              <li>Apple and Education</li>
              <li>Shop for University</li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">For Healthcare</h3>
            <ul className="space-y-1">
              <li>Apple in Healthcare</li>
              <li>Mac in Healthcare</li>
              <li>Health on Apple Watch</li>
              <li>Health Records on iPhone and iPad</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Apple Values</h3>
            <ul className="space-y-1">
              <li>Accessibility</li>
              <li>Education</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain Innovation</li>
            </ul>
            <h3 className="font-bold mt-4 mb-2">About Apple</h3>
            <ul className="space-y-1">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Warranty</li>
              <li>Investors</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>European Job Creation</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
          Copyright © 2025 Apple Inc. All rights reserved. |
          <span className="mx-2">Privacy Policy</span>|
          <span className="mx-2">Terms of Use</span>|
          <span className="mx-2">Legal</span>
          <div className="mt-2 text-gray-700">Made with ❤️ by Pradeep</div>
        </div>
      </div>
    </div>
  );
};

export default IphoneHeaderFooter;
