function Intro() {
    return (
        <div className="bg-[#f5f5f7] text-gray-800 py-12 px-4 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center">

            <div className="mb-8 md:mb-0  w-full lg:w-1/2">
                <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                    <span className="text-teal-600">Education Store.</span>{" "}
                    <span className="text-gray-700">The most powerful tools for learning.</span>
                </h1>
            </div>

            {/* Right Links Section */}
            <div className="space-y-6 text-sm text-right md:text-left ml-0 md:ml-12">


                <div className="flex items-start space-x-3">
                    <img
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202305?wid=48&hei=48&fmt=png-alpha&.v=1684940678220"
                        alt="Specialist"
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="font-medium">Need shopping help?</p>
                        <a href="#" className="text-blue-600 hover:underline">
                            Ask a Specialist ↗
                        </a>
                    </div>
                </div>


                <div className="flex items-start space-x-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mt-1 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                    </svg>
                    <div>
                        <p className="font-medium">Visit an Apple Store</p>
                        <a href="#" className="text-blue-600 hover:underline">
                            Find one near you ↗
                        </a>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Intro;
