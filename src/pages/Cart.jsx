import useCart from "../context/CartContext";
import { Link } from "react-router";
import { Trash } from 'lucide-react';

export default function Cart() {
    const { cart, removeFromCart, totalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="bg-[#EEF5FF] text-center px-6 py-8 min-h-[90vh]">
                <h2 className="mb-8 text-3xl font-bold text-gray-700 ">
                    Cart
                </h2>
                <div className="flex flex-col items-center gap-6">
                    <p className="text-lg font-medium text-gray-600">Your cart is currently empty.</p>
                    <div className="bg-white max-w-2xl mx-auto rounded-2xl shadow-md hover:shadow-lg p-8 ">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Order Instructions
                    </h2>
                    <div className="space-y-4 text-gray-700">
                        <div className="flex">
                            <span className="shrink-0 w-8 h-8 text-lg rounded-full flex items-center justify-center font-semibold">
                                1.
                            </span>
                            <p className="pt-1">
                                Select the item(s) you want and click <strong>"Add to Cart."</strong>
                            </p>
                        </div>
                        <div className="flex">
                            <span className="shrink-0 w-8 h-8 text-lg rounded-full flex items-center justify-center font-semibold">
                                2.
                            </span>
                            <p className="pt-1">
                                Once all desired items are added, go to your <strong>Cart.</strong>
                            </p>
                        </div>
                        <div className="flex">
                            <span className="shrink-0 w-8 h-8 text-lg rounded-full flex items-center justify-center font-semibold">
                                3.
                            </span>
                            <p className="pt-1">
                                Take a <strong>screenshot of the items in your cart</strong> for order confirmation.
                            </p>
                        </div>
                        <div className="flex">
                            <span className="shrink-0 w-8 h-8 text-lg rounded-full flex items-center justify-center font-semibold">
                                4.
                            </span>
                            <p className="pt-1">
                                Click <strong>"Checkout"</strong> to proceed to the checkout page.
                            </p>
                        </div>
                    </div>
                </div>
                    <Link to="/shop" className="mt-4 rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white inline-block">
                        Go shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-[#EEF5FF]">
            <div className="text-center px-6 py-8 min-h-[80vh] max-w-2xl mx-auto">
                <h2 className="mb-8 text-3xl font-bold text-gray-700">
                    Cart
                </h2>

                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between border-b py-4"
                    >
                        <div className="flex gap-4">
                            <img
                                src={item.image}
                                className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="text-start">
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm  text-gray-600 my-1"> Quantity: <span className="font-medium">{item.quantity}</span>
                                </p>
                                <div
                                    className="w-4 h-4 rounded-full border mt-2"
                                    style={{ backgroundColor: item.color }}
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <p>Ks {(item.price * item.quantity).toLocaleString()}</p>
                            <button
                                onClick={() => removeFromCart(item.id, item.color)}
                                className="mt-3 text-sm cursor-pointer hover:text-purple-400"
                            >
                                <Trash />
                            </button>
                        </div>
                    </div>
                ))}

                <div className="text-right mt-4">
                        <div className="flex gap-2 justify-end">
                        <p className="text-lg text-gray-600">Total Amount:</p>
                        <p className="text-lg font-medium text-gray-600">
                            Ks {totalPrice.toLocaleString()} 
                        </p>
                        </div>

                    <Link
                        to="/checkout"
                        className="inline-block my-4 rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </section>
    );
}
