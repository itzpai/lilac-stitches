import { useParams } from "react-router";
import { useState } from "react";
import useCart from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/productData";


export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();
    const [showPopup, setShowPopup] = useState(false);

    const product = products.find((p) => p.id === id);
    if (!product) return <p className="p-10">Product not found</p>;

    const [selectedVariant, setSelectedVariant] = useState(
        product.variants[0]
    );
    const isLiked = isWishlisted(product.id);
    const [qty, setQty] = useState(1);

    return (
        <>
            {showPopup && (
                <div className="fixed top-24 right-5 bg-purple-500 text-white px-6 py-3 rounded-lg shadow">
                    Added to cart!
                </div>
            )}
            <div className="min-h-[90vh] bg-[#EEF5FF] p-6 flex flex-col md:flex-row justify-center items-center gap-10">
                <img
                    src={[selectedVariant.image]}
                    className="w-full sm:w-1/2 lg:w-1/4 object-cover rounded-md"
                    alt={product.name}
                />

                <div>
                    <h1 className="text-3xl font-semibold">{product.name}</h1>
                    <p className="text-purple-600 text-xl mt-2">
                        Ks {product.price.toLocaleString()}
                    </p>

                    {/* details */}
                    <div className="max-w-xl my-6">
                        <p className="text-md font-medium">{product.description} <span className="text-sm text-gray-500">
                            {product.description2}
                        </span>
                        </p>
                        <p className="text-md font-medium my-3">Material : <span>{product.Material}</span></p>
                        <p className=" text-sm font-medium ">IncludedFreebies : <span>{product.IncludedFreebies}</span></p>
                    </div>

                    {/* Color selection */}
                    <div className="flex gap-3 mt-4">
                        {product.variants.map((variant) => (
                            <button
                                key={variant.color}
                                disabled={!variant.inStock}
                                onClick={() => setSelectedVariant(variant)}
                                className={`w-8 h-8 rounded-full border-2 relative
        ${selectedVariant.color === variant.color
                                        ? "border-black"
                                        : "border-gray-300"}
        ${!variant.inStock && "opacity-40 cursor-not-allowed"}
      `}
                                style={{ backgroundColor: variant.color }}
                            >
                                {!variant.inStock && (
                                    <span className="absolute inset-0 flex items-center justify-center text-xs">
                                        ✕
                                    </span>
                                )}
                            </button>
                        ))}
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

                    <div className="mt-6 flex items-center justify-start gap-4">
                        {/* Add to Cart */}
                        <button
                            disabled={!selectedVariant.inStock}
                            onClick={() => {
                                addToCart(
                                    {
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        image: selectedVariant.image,
                                    },
                                    qty,
                                    selectedVariant.color
                                ); setShowPopup(true);
                                setTimeout(() => setShowPopup(false), 2000);
                            }}
                            className={`px-6 py-3 rounded-lg text-white font-medium cursor-pointer transition
      ${selectedVariant.inStock
                                    ? "bg-purple-500 hover:bg-purple-600"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            {selectedVariant.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>

                        {/* Wishlist */}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleWishlist(product)
                            }
                            }
                            className={`cursor-pointer rounded-xl border-2 border-dashed border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-5 py-3 text-sm font-medium transition inline-block`}
                        >
                            {isLiked ? "Remove from Wishlist" : "Add to Wishlist"}
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
