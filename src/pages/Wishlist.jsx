import { Link } from "react-router";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="p-10 bg-[#f5f8ff] min-h-[90vh] text-center text-gray-500">

<h2 className="mb-8 text-3xl font-bold text-gray-700 ">
                    Wishlist
                </h2>
                <p className="text-lg font-medium text-gray-600">Your wishlist is currently empty.</p>
        <Link to="/shop" className="mt-4 rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white inline-block">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 bg-[#f5f8ff] min-h-[90vh] text-gray-500">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-700 ">
                    Wishlist
                </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
