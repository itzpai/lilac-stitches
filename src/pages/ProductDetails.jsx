import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import useCart from "../context/CartContext";
import { products } from "../data/productData";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === id);

    const [qty, setQty] = useState(1);
    const [selectedColor, setSelectedColor] = useState(
        product?.colors[0]
    );

    if (!product) return <p className="p-10">Product not found</p>;

    return (
        <div className="bg-[#EEF5FF] p-6 flex flex-col md:flex-row justify-center items-center gap-10">
            <img
                src={product.image}
                className="w-full sm:w-1/2 lg:w-1/4 object-cover rounded-md"
                alt={product.name}
            />

            <div>
                <h1 className="text-3xl font-semibold">{product.name}</h1>
                <p className="text-purple-600 text-xl mt-2">
                    Ks {product.price.toLocaleString()}
                </p>

                {/* details */}
                <div className="max-w-md my-6 text-md">
                    <p>{product.description}</p>
                </div>

                {/* Color selection */}
                <div>
                    <p className="mb-2 font-medium">Available Colors</p>
                    <div className="flex gap-3">
                        {product.colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === color
                                    ? "border-black"
                                    : "border-gray-300"
                                    }`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-4 ml-6 my-4">
                    <button
                        onClick={() => setQty((q) => Math.max(1, q - 1))}
                        className="py-1 text-lg font-medium text-purple-500 hover:text-purple-300 cursor-pointer"
                    >
                        −
                    </button>
                    <span className="min-w-5 text-center text-lg font-medium">{qty}</span>
                    <button
                        onClick={() => setQty((q) => q + 1)}
                        className="py-1 text-lg font-medium text-purple-500 hover:text-purple-300 cursor-pointer"
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={() => {
                        addToCart(product, qty, selectedColor);
                        navigate("/cart");
                    }}
                    className="rounded-xl border border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
