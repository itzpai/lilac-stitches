import { Link, NavLink } from "react-router";
import { Menu, X, Heart, ShoppingBag, Search } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo"

function Header() {
    const [open, setOpen] = useState(false);
    const [infoOpen, setInfoOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
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
                                    to="/contactus"
                                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                                >
                                    Contact Us
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
                    <Search className="h-5 w-5 cursor-pointer text-gray-600 hover:text-purple-400" />
                    <Heart className="h-5 w-5 text-gray-600 hover:text-purple-400" />
                    <Link to="/cart">
                        <ShoppingBag className="h-5 w-5 cursor-pointer text-gray-600 hover:text-purple-400" />
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div onClick={() => { setOpen(false) }} className={`fixed h-[80vh] inset-0 bg-white transform transition-all duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    <ul className="text-lg p-8 text-left">
                        <X onClick={() => { setOpen(false) }} className="cursor-pointer text-gray-600 hover:text-purple-400 border-2" />
                        {["Home", "Products", "Shop", "About Us", "Contact Us", "FAQs", "Wishlist", "Cart"].map((item) => (
                            <li className="pt-5 text-base font-medium">
                                <Link
                                    key={item}
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
