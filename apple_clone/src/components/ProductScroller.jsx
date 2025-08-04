function ProductScroller() {
    const products = [
        {
            title: "iPad Air",
            subtitle: "Apple Intelligence△",
            price: "From £549 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-offer-featured-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5UWt3NHc3dStlS1AxQU12Y29qK3NjQS90UDBNbENaNjJicXpFbEZiTXRnRC9mNDM5eHVLS1dJSTkyYTRRL1B3TWNmSGN3NTUxbDRHZDZXK1V3b1o4a1FZY1B0KyttbzZBZGZBaEM1U3QxSE9ka0xmckVNVTBkS20yTzkwa0dhU09n",
        },
        {
            title: "MacBook Air",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-ipad-air-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5ZGtsWklMN0J5c3lnMzNWZzNjR2Z1WURFc0w0dTB6QU1DYS9zSUNnODRNZFVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNFpPZVlpVmEvVnByTnptRzdJUlRvODc",
        },
        {
            title: "MacBook Pro",
            subtitle: "Apple Intelligence△",
            price: "From £1,499 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-macbook-air-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YjdTVjI4QVhleVhwMk9XMnZxOVFSanU2YlEyTlJhWmpsUldyS0ZLU1ZVUmNNcUZ5WEhzRG5zWTFDbnVCRk96ZmlrT3VSbnZSMWpmMWVuSlI3UlowWFBpMUZhMWhTOFZrSWNpYkZyUHloajI",
        },
        {
            title: "iPad Pro",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-ipad-pro-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5VlhPbnlaaUZXbTduUGNGYTZ5MmIwc0RFc0w0dTB6QU1DYS9zSUNnODRNZFVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNGFHemR3RXUzckpQcjNncTZUWGt4czg",
        },
        {
            title: "imac",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-imac-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5ZHhsMjB3REtzOTh2dEE2Q3NVNjgwRllvT2k3aXYxRlNia0IwK3dBSUxyd3FmS3YvQ0doSFZENndQR0J4TTRqbjBKckZ5QllPSHVCMEZFQlJwb3lmNHFDMkw0MWVkekx4OUNIaDN0cG51b0s"

        },
        {
            title: "iPad Air",
            subtitle: "Apple Intelligence△",
            price: "From £549 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-offer-featured-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5UWt3NHc3dStlS1AxQU12Y29qK3NjQS90UDBNbENaNjJicXpFbEZiTXRnRC9mNDM5eHVLS1dJSTkyYTRRL1B3TWNmSGN3NTUxbDRHZDZXK1V3b1o4a1FZY1B0KyttbzZBZGZBaEM1U3QxSE9ka0xmckVNVTBkS20yTzkwa0dhU09n",
        },
        {
            title: "MacBook Air",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-ipad-air-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5ZGtsWklMN0J5c3lnMzNWZzNjR2Z1WURFc0w0dTB6QU1DYS9zSUNnODRNZFVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNFpPZVlpVmEvVnByTnptRzdJUlRvODc",
        },
        {
            title: "MacBook Pro",
            subtitle: "Apple Intelligence△",
            price: "From £1,499 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-macbook-air-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5YjdTVjI4QVhleVhwMk9XMnZxOVFSanU2YlEyTlJhWmpsUldyS0ZLU1ZVUmNNcUZ5WEhzRG5zWTFDbnVCRk96ZmlrT3VSbnZSMWpmMWVuSlI3UlowWFBpMUZhMWhTOFZrSWNpYkZyUHloajI",
        },
        {
            title: "iPad Pro",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-ipad-pro-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5VlhPbnlaaUZXbTduUGNGYTZ5MmIwc0RFc0w0dTB6QU1DYS9zSUNnODRNZFVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNGFHemR3RXUzckpQcjNncTZUWGt4czg",
        },
        {
            title: "imac",
            subtitle: "Apple Intelligence△",
            price: "From £899 with education savings",
            image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-imac-202505_GEO_GB?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=bTAvUVhobndWL01MVC9aenBVVGo5ZHhsMjB3REtzOTh2dEE2Q3NVNjgwRllvT2k3aXYxRlNia0IwK3dBSUxyd3FmS3YvQ0doSFZENndQR0J4TTRqbjBKckZ5QllPSHVCMEZFQlJwb3lmNHFDMkw0MWVkekx4OUNIaDN0cG51b0s"

        }
    ];
    const scrollLeft = () => {
        document.getElementById("card-scroll").scrollBy({ left: -400, behavior: "smooth" });
    };

    const scrollRight = () => {
        document.getElementById("card-scroll").scrollBy({ left: 400, behavior: "smooth" });
    };

    return (
        <div className="relative bg-gray-50 p-8">
            <h2 className="text-3xl font-medium text-black pb-4 mb-4 ml-4">
                <span className="font-bold text-black">Limited-time offer.</span>{' '}
                <span className="text-gray-500 font-medium">Limitless possibilities.</span>
            </h2>

            <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
            >
                ←
            </button>

            <div
                id="card-scroll"
                className="overflow-x-auto whitespace-nowrap pb-4 scroll-smooth no-scrollbar"
            >
                <div className="flex gap-6 min-w-fit px-6">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="w-64 h-96 flex-shrink-0  my-5 rounded-2xl shadow-md bg-cover bg-center relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-md"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="absolute z-30 shadow-xl p-5 flex flex-col bg-black bg-opacity-85  backdrop-blur-xl text-white">
                                <p className="text-xs font-semibold text-orange-300">OFFER ELIGIBLE</p>
                                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                                <p className="text-sm text-purple-300">{item.subtitle}</p>
                                <p className="text-sm text-gray-200 mt-1">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow"
            >
                →
            </button>
        </div>
    );

}


export default ProductScroller;
