import ProductCard from "../components/ProductCard";
import tp from "../images/Tp.jpg";
import bv from "../images/Bv.jpg";
import sy from "../images/Sy.jpg"
import rw from "../images/Rw.jpg"

const products = [
    {
        id: 1,
        name: "Twinkling Cotton Candy",
        price: "Ks 12,000",
        image: tp,
        colors: ["#f9a8d4", "#c4b5fd", "#fde68a", "#3D5EC1"],
        inStock: false
    },
    {
        id: 2,
        name: "Bunny ears",
        price: "Ks 13,500",
        image: bv,
        colors: ["#5F718A", "#507AB4", "#fcd34d", "#B3B3B5", "#F8F8F8"],
        inStock: true
    },
    {
        id: 3,
        name: "Stars on top",
        price: "Ks 18,000",
        image: sy,
        colors: ["#fcd34d", "#29B3BF", "#a7f3d0", "#A776B7"],
        inStock: true
    },
    {
        id: 4,
        name: "Random Charm collection",
        price: "Ks 18,000",
        image: rw,
        colors: ["#F8F8F8", "#82A2E0", "#a7f3d0", "#fcd34d"],
        inStock: true
    },
];

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
