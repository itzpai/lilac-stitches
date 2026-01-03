import useCart from "../context/CartContext";
import { useState } from "react";
import {Link} from "react-router"
import { MessageCircle, Send } from "lucide-react";

export default function Checkout() {
    const { totalPrice } = useCart();
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    return (
        <div className="min-h-[90vh] bg-[#EEF5FF] px-6 py-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-3">
                    Checkout
                </h1>

                {/* Payment Section */}
                    {/* Total Amount */}
                    <div className="max-w-sm mx-auto flex justify-center gap-2 rounded-xl p-3">
                        <p className="text-lg text-gray-600 mb-2">Total Amount:</p>
                        <p className="text-lg font-medium text-purple-600">
                            Ks {totalPrice.toLocaleString()}
                        </p>
                    </div>

                    {/* KBZPay QR Code */}
                    <div className="flex flex-col items-center">
                        <div className="bg-white border-4 border-purple-200 rounded-xl p-4 shadow-md">
                            <img 
                                src="/qr.webp" 
                                alt="KBZPay QR Code" 
                                className="w-60 h-60 object-cover"
                            />
                        </div>
                        <p className="text-md font-medium text-gray-500 mt-4">
                            KBZPay QR Code
                        </p>
                        <p className="text-md font-medium text-purple-600 mt-4 md:text-center">
                            Once we receive your order, <br className="sm:hidden" /> we will process your confirmation as soon as possible.
                        </p>
                        {/* Contact Links */}
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        <Link
                            to="https://m.me/61579644806455"
                            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            <MessageCircle className="w-5 h-5" />
Messenger
                        </Link>
                        <Link
                            to="https://www.tiktok.com/@lilac_stitches?_r=1&_t=ZS-92fuOMtcAML"
                            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            <Send className="w-5 h-5" />
                            TikTok
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
    );
}
