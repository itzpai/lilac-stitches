import Logo from "./Logo"
import { FaFacebookF, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react"
import { Link } from "react-router";

function Footer() {
    return (
        <>
            <footer>
                <div className="h-[90vh] md:h-[40vh] pl-8 md:pl-0 md:pt-8 flex flex-col md:flex-row justify-evenly border-b border-gray-300">
                    <div >
                        <Logo />
                        <p className="font-medium text-purple-400 my-4">“Handmade with love, stitched with care🩵”</p>
                        <p className="flex items-center gap-2 text-gray-600 text-sm mt-3">
                            <MapPin /> Mandalay, Myanmar
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5 text-gray-400">
                        <p className="text-purple-400 mb-1">Links</p>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/">Home</Link>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/shop">Shop</Link>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/wishlist">Wishlist</Link>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/cart">Cart</Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-5 text-gray-400">
                        <p className="text-purple-400 mb-1">Help</p>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/aboutus">About Us</Link>
                        <Link className="hover:text-purple-400 cursor-pointer" to="/faqs">FAQs</Link>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-5 text-gray-400">
                        <p className="text-purple-400 mb-1">Contact Us</p>
                        <p className="inline-block text-sm cursor-pointer hover:text-purple-400">
                            <a
                                href="https://www.facebook.com/share/17VRcu15AY/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaFacebookF size={22} /> <span>Lilac Stitches</span>
                            </a>
                        </p>
                        <p className="inline-block text-sm cursor-pointer hover:text-purple-400">
                            <a
                                href="https://www.tiktok.com/@lilac_stitches?_r=1&_t=ZS-92fuOMtcAML"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                            >
                                <FaTiktok size={22} /><span>@lilac_stitches</span>
                            </a>
                        </p>
                        <p className="flex items-center gap-2 text-sm cursor-pointer hover:text-purple-400">
                            <Phone />+95 9 790 870 444
                        </p>
                    </div>
                </div>
                <p className="text-purple-400 max-w-7xl mx-auto h-10 flex justify-center items-center text-sm">
                    &copy; 2025 LilacStitches. All Rights Reserved.
                </p>
            </footer>
        </>
    );
}

export default Footer;
