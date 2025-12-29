import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { products } from "../data/productData";

function Shop() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    )
    return (
        <section className="bg-[#EEF5FF] px-6 py-8 min-h-screen">
            <h2 className="mb-8 text-3xl font-bold text-gray-700 text-center">
                Shop
            </h2>

            {query && (
                <p className="mb-4 text-sm text-gray-500">
                    Showing results for “{query}”
                </p>
            )}
            {filteredProducts.length === 0 ? (<p>No products found.</p>) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Shop;
