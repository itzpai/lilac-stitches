import useCart from "../context/CartContext";
import { Link } from "react-router";
import qr from "../images/dummy-qr.png"

export default function Checkout() {
    const { totalPrice, clearCart } = useCart();

    return (
        <div className="h-[90vh] bg-[#EEF5FF] text-center px-6 py-8">
            <h2 className="mb-8 text-3xl font-bold text-gray-700">
                Checkout
            </h2>
            <div className="w-fit mx-auto rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
                <div className="w-80 h-80 bg-gray-200 mx-auto rounded-lg flex items-center justify-center">
                    <img src={qr} alt="QR Code" className="w-64 h-64 object-contain" />
                </div>
                <p className="my-3 text-md font-medium text-gray-600">
                    Scan the QR to pay
                    <br />
                    <strong className="text-purple-500">Ks {totalPrice.toLocaleString()}</strong>
                </p>
                <Link to="https://telegram.org">
                    <button
                        onClick={clearCart}
                        className="rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                        Order Confirm
                    </button>
                </Link>
            </div>
        </div>
    );
}
