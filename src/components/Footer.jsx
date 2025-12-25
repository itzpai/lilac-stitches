import Logo from "./Logo"
import { FaFacebookF, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
    return (
        <>
            <footer>
                <div className="h-135 pl-8 md:pl-0 md:pt-8 flex flex-col md:flex-row justify-evenly lg:h-76 border-b border-gray-300">
                    <div className="">
                        <Logo />
                        <p className=" text-gray-500 tracking-wide text-sm leading-8 mt-2">
                            400 University Drive Suite 200 Coral Gables,
                            <br />
                            FL 33134 USA
                        </p>
                    </div>
                    <div className=" flex text-gray-400">
                        <ul className="lg:leading-12">
                            <li className="text-[#C68EFD]">Links</li>
                            <li className="hover:text-purple-400"><Link to="/">Home</Link></li>
                            <li className="hover:text-purple-400"><Link to="/shop">Shop</Link></li>
                            <li className="hover:text-purple-400"><Link to="/wishlist">Wishlist</Link></li>
                            <li className="hover:text-purple-400"><Link to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                    <div className=" flex text-gray-400">
                        <ul className="lg:leading-12">
                            <li className="text-[#C68EFD]">Help</li>
                            <li className="hover:text-purple-400"><Link to="/aboutus">About Us</Link></li>
                            <li className="hover:text-purple-400"><Link to="/contactus">Contact Us</Link></li>
                            <li className="hover:text-purple-400"><Link to="/faqs">FAQs</Link></li>
                        </ul>
                    </div>
                    <div className="text-[#C68EFD]">
                        <p>Follow Us</p>
                        <ul className="flex gap-3 mt-5">
                            <li>
                                <Link to="https://www.facebook.com"><FaFacebookF size={22} /></Link>
                            </li>
                            <li>
                                <Link to="https://www.tiktok.com"><FaTiktok size={22} /></Link>
                            </li>
                            <li>
                                <Link to="https://telegram.org"><FaTelegramPlane size={22} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="text-[#C68EFD] max-w-7xl mx-auto h-10 flex justify-center items-center text-sm">
                    &copy; 2025 LilacStitches. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}

export default Footer;
