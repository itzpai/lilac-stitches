import { Link, NavLink, useNavigate } from "react-router";
import { Menu, X, Heart, ShoppingBag, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo"
import { products } from "../data/productData"

function Header() {
    const [open, setOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const searchRef = useRef(null)

    // Search focus
    useEffect(() => {
        if (searchOpen && searchRef.current) {
            searchRef.current.focus()
        }
    }, [searchOpen])

    function handleSearch(e) {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/shop?q=${query}`);
        setSearchOpen(false);
        setQuery("");
    }

    const filteredProducts = products
        .filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
        )

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div
                className={`fixed top-0 left-0 z-50 w-full bg-white shadow-md transition-transform duration-300 ease-out
  ${searchOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="mx-auto max-w-2xl px-5 py-6">
                    {/* Search Input */}
                    <form
                        onSubmit={e => handleSearch(e)}
                        className="relative"
                    >
                        <input
                            ref={searchRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search products..."
                            className="w-full rounded-xl outline-gray-100 px-5 py-3 text-sm focus:outline-blue-400"
                        />

                        {/* Suggestions */}
                        {query && (
                            <div className="absolute top-full left-0 right-0 mt-2 max-h-fit flex justify-center gap-3 rounded-xl bg-white shadow-lg">
                                {
                                    filteredProducts.slice(0, 5)
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => {
                                                    navigate(`/product/${item.id}`);
                                                    setSearchOpen(false);
                                                    setQuery("");
                                                }}
                                                className="cursor-pointer px-4 py-3 text-sm rounded-xl hover:bg-purple-50 hover:text-purple-500"
                                            >
                                                <img className="w-30 h-30 object-cover" src={item.variants[0].image} alt={item.name} />
                                                <div>
                                                    <p>{item.name}</p>
                                                    <p>Ks {item.price.toLocaleString()}</p>
                                                </div>
                                            </div>
                                        ))
                                }
                                {filteredProducts.length === 0 && (
                                    <p className="px-4 py-3 text-sm text-gray-500">
                                        No products found
                                    </p>
                                )}
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {searchOpen && (
                <div
                    onClick={() => { setSearchOpen(false); setQuery(""); }}
                    className="fixed inset-0 z-40 bg-black/30"
                />
            )}

            <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
                <div className="flex items-center">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden mr-3"
                    >
                        <Menu />
                    </button>

                    {/* Logo */}
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className="hidden items-center gap-8 md:flex">
                    <li>
                        <Link
                            to="/"
                            className="text-sm font-medium relative after:absolute after:bg-purple-400 after:h-0.5 after:w-0 after:left-0 after:top-6 after:duration-300 hover:text-purple-400 hover:after:w-full"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            className="text-sm font-medium relative after:absolute after:bg-purple-400 after:h-0.5 after:w-0 after:left-0 after:top-6 after:duration-300 hover:text-purple-400 hover:after:w-full"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/shop"
                            className="text-sm font-medium relative after:absolute after:bg-purple-400 after:h-0.5 after:w-0 after:left-0 after:top-6 after:duration-300 hover:text-purple-400 hover:after:w-full"
                        >
                            Shop
                        </Link>
                    </li>

                    {/* Info */}
                    <li
                        className="relative"
                        onMouseOver={() => setInfoOpen(true)}
                    >
                        <button className="flex items-center gap-1 text-sm font-medium relative after:absolute after:bg-purple-400 after:h-0.5 after:w-0 after:left-0 after:top-6 after:duration-300 hover:text-purple-400 hover:after:w-full">
                            Info
                        </button>

                        {infoOpen && (
                            <div
                                className="absolute left-0 top-full mt-3 w-44 rounded-xl bg-white p-2 shadow-lg"
                                onMouseLeave={() => { setInfoOpen(false) }}>
                                <Link
                                    to="/about"
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                                >
                                    About Us
                                </Link>

                                <Link
                                    to="/faqs"
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                                >
                                    FAQs
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>


                {/* Desktop Icons */}
                <div className=" items-center gap-5 flex">
                    <Search onClick={() => setSearchOpen(!searchOpen)} className="h-5 w-5 cursor-pointer text-gray-600 hover:text-purple-400" />
                    <Heart className="h-5 w-5 text-gray-600 hover:text-purple-400" />
                    <Link to="/cart">
                        <ShoppingBag className="h-5 w-5 cursor-pointer text-gray-600 hover:text-purple-400" />
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div onClick={() => { setOpen(false) }} className={`fixed h-screen inset-0 bg-white transform transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    <ul className="text-lg p-8 text-left">
                        <X onClick={() => { setOpen(false) }} className="cursor-pointer text-gray-600 hover:text-purple-400 border-2" />
                        {["Home", "Products", "Shop", "About Us", "FAQs", "Wishlist", "Cart"].map((item) => (
                            <li key={item} className="pt-5 text-base font-medium">
                                <Link
                                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                    className="relative after:absolute after:bg-purple-400 after:h-0.5 after:w-0 after:left-0 after:top-6 after:duration-300 hover:text-purple-400 hover:after:w-full"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;
