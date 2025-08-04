import { useState, useEffect } from "react";

function Head() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPromo, setShowPromo] = useState(false);

    const menuItems = [
        "Store", "Mac", "iPad", "iPhone", "Watch", "Vision",
        "AirPods", "TV & Home", "Entertainment", "Accessories", "Support",
    ];

    useEffect(() => {
        // Show promo after slight delay for smooth animation
        const timer = setTimeout(() => setShowPromo(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Top Bar (Sticky) */}
            <div className="bg-[#f0f0f2] p-3 flex flex-row items-center gap-2 sticky top-0 z-50 shadow-2xl">
                <div className="flex flex-row items-center gap-2 ml-12 text-sm">
                    <p className="hover:underline cursor-pointer">Education Store home</p>
                    <p>|</p>
                    <p className="hover:underline cursor-pointer">Exit</p>
                </div>
            </div>

            {/* Main Navbar (Sticky) */}
            <nav className="bg-white border-b border-gray-200 font-light sticky top-[38px] z-50 shadow-xl">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img
                                className="w-5 h-5"
                                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                                alt="Apple"
                            />
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-6 text-sm text-black">
                            {menuItems.map((item) => (
                                <a key={item} href="#" className="hover:text-blue-600 transition-colors duration-200">
                                    {item}
                                </a>
                            ))}

                            {/* Icons */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M5 8h14l1 11H4L5 8zm7-4a3 3 0 013 3v1H9V7a3 3 0 013-3z" />
                            </svg>
                        </div>

                        {/* Hamburger Icon */}
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                        d={menuOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col items-start px-6 py-3 space-y-3 text-sm text-black bg-white border-t border-gray-200">
                        {menuItems.map((item) => (
                            <a key={item} href="#" className="hover:text-blue-600 transition">
                                {item}
                            </a>
                        ))}

                        <div className="flex gap-4 pt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M5 8h14l1 11H4L5 8zm7-4a3 3 0 013 3v1H9V7a3 3 0 013-3z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>

            
            <div className={`hidden lg:block w-full bg-white text-sm text-center px-4 py-3 border-b border-gray-100 transform transition-transform duration-500 ease-out ${showPromo ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                <span>
                    Buy Mac or iPad with education savings, get <strong>AirPods</strong> or an eligible accessory of your choice.
                    <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
                    <span className="text-blue-600 ml-1">+</span>
                </span>
            </div>
        </>
    );
}

export default Head;
