import { Heart } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product, index }) {
    const cardRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const { toggleWishlist, isWishlisted } = useWishlist();
    const isLiked = isWishlisted(product.id);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target); // animate once only
                }
            },
            {
                threshold: 0.2, // 20% visible
            }
        );

        if (cardRef.current) observer.observe(cardRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <Link to={`/product/${product.id}`}>
            <div
                ref={cardRef}
                style={{ transitionDelay: `${index * 80}ms` }}
                className={`
    group rounded-2xl bg-white p-4 cursor-pointer
    transition-all duration-500 ease-out
    ${visible
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-6 scale-95"}
    shadow-md hover:shadow-lg
  `}
            >
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
                            toggleWishlist(product)
                        }}
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
