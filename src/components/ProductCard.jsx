import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
    const { toggleWishlist, isWishlisted } = useWishlist();
    const isLiked = isWishlisted(product.id);

    return (
        <Link to={`/product/${product.id}`}>
            <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md cursor-pointer">
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl bg-gray-100">
                    <img
                        src={product.variants[0].image}
                        alt={product.name}
                        className="h-56 w-full object-cover transition group-hover:scale-105"
                    />
                    {/* Out of Stock Overlay */}
                    {product.inStock && (
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <span className="text-white font-semibold text-lg">Out of Stock</span>
                        </div>
                    )}
                    {/* Favorite Icon */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleWishlist(product)}}
                        className="absolute right-3 top-3 p-2 bg-white rounded-full cursor-pointer"
                    >
                        <Heart
                            className={`h-5 w-5 ${isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"
                                }`}
                        />
                    </button>
                </div>

                {/* Info */}
                <div className="flex justify-between items-center mt-4">
                    <div>
                        <h3 className="text-md font-medium text-gray-900">
                            {product.name}
                        </h3>

                        <p className="text-base font-semibold text-purple-600">
                            Ks {product.price.toLocaleString()}
                        </p>

                        {/* Colors */}
                        <div className="flex gap-2">
                            {product.variants.map((color, index) => (
                                <span
                                    key={index}
                                    className="h-4 w-4 rounded-full border hover:border-2 mt-2"
                                    style={{ backgroundColor: color.color }}
                                />
                            ))}
                        </div>
                    </div>
                    {product.inStock && (<div className="mt-2 text-sm text-red-500 font-semibold">
                        Out of Stock
                    </div>)}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
