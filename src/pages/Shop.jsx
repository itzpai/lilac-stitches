import ProductCard from "../components/ProductCard";
import { products } from "../data/productCardData";

function Shop() {
    return (
        <section className="bg-[#EEF5FF] px-6 py-8 min-h-screen">
            <h2 className="mb-8 text-3xl font-bold text-gray-700 text-center">
                Shop
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;
