import { Link } from "react-router"
import home from "../images/home.png"
import ProductCard from "../components/ProductCard";
import { products } from "../data/productData";

function Home() {
    return (
        <>
            {/* banner */}
            <div className="min-h-screen h-[60vh] md:h-[90vh] flex items-center justify-center bg-sky-100 pl-5 lg:pl-0">
                <div>
                    <p className=" tracking-[3px] font-medium"> New Arrival</p>
                    <h1 className="text-[#C68EFD] text-3xl font-bold lg:text-5xl">
                        Discover Our <br />
                        New Collection
                    </h1>
                    <p className="max-w-md text-xs md:text-sm my-6 leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lit
                        tellus, luctus nec ullamcorper mattis.
                    </p>
                    <Link to="/shop" className="rounded-xl border border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                        Buy Now
                    </Link>
                </div>
                <div className="w-[400] h-[350]">
                    <img
                        src={home}
                        alt="promo-photo"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* products */}
            <div className="px-8 py-20">
                <h2 className="mb-8 text-3xl font-bold text-purple-500 text-center">
                    Our Products
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
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
                <Link to="https://telegram.org" className="rounded-xl border border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                    Custom Order
                </Link>
            </div>
        </>
    )
}

export default Home