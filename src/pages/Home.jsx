import { useState, useEffect } from "react";
import { Link } from "react-router"
import ProductCard from "../components/ProductCard";
import { products } from "../data/productData";

function Home() {
    // banner image shuffle
    const bannerImages = [
        "/home.webp",
        "/Bb-removebg.webp",
        "/Tp-removebg.webp",
    ];
    const [bannerIdx, setBannerIdx] = useState(0);
    const [fade, setFade] = useState(true);

    function shuffleBanner() {
        setFade(false);
        setTimeout(() => {
            let nextIdx;
            do {
                nextIdx = Math.floor(Math.random() * bannerImages.length);
            } while (nextIdx === bannerIdx);
            setBannerIdx(nextIdx);
            setFade(true);
        }, 200);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            shuffleBanner();
        }, 3000);
        return () => clearInterval(interval);
    }, [bannerIdx]);

    return (
        <>
            {/* banner */}
            <div className="min-h-screen h-[60vh] md:h-[90vh] flex items-center justify-center bg-sky-100 pl-5 lg:pl-0">
                <div>
                    <p className="tracking-[3px] font-medium"> New Arrival</p>
                    <h1 className="text-[#C68EFD] text-3xl font-bold lg:text-5xl">
                        Discover Our <br />
                        New Collection
                    </h1>
                    <p className="max-w-md text-sm mt-3 mb-6 leading-6">
                        Little Stitches, Big Love. <br />
                        We create every piece with our whole heart and deliver with love.
                    </p>
                    <Link to="/shop" className="rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                        Buy Now
                    </Link>
                </div>
                <div className="relative w-120 h-100 ml-7">
                    <img
                        src={bannerImages[bannerIdx]}
                        alt="promo-photo"
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"
                            }`}
                    />
                </div>
            </div>

            {/* products */}
            <div className="px-8 py-20">
                <h2 className="mb-8 text-3xl font-bold text-purple-500 text-center">
                    Our Products
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>

            {/* custom order */}
            <div className="h-[70vh] flex flex-col items-center justify-center bg-sky-100">
                <h2 className="text-3xl font-bold text-purple-500"
                >Custom Order</h2>
                <p className="text-[#816DFA] my-8 tracking-[2px] font-medium text-sm lg:text-[20px] leading-7.5 lg:tracking-[5px] lg:my-14 text-center">
                    Want a special design in mind? We love creating <br /> custom pieces tailored
                    for you.
                </p>
                <a href="https://m.me/61579644806455" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                    Custom Order
                </a>
            </div>
        </>
    )
}

export default Home