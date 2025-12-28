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
                    <Link to="/shop" className="rounded-xl border-2 border-dashed border-purple-500 px-8 py-3 text-sm font-medium text-purple-500 transition hover:bg-purple-500 hover:text-white">
                        Go shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-[#EEF5FF]">
            <div className="text-center px-6 py-8 min-h-[90vh] max-w-4xl mx-auto">
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
                                className="mt-3 text-sm cursor-pointer hover:text-gray-600"
                            >
                                <Trash />
                            </button>
                        </div>
                    </div>
                ))}

                <div className="text-right mt-6">
                    <p className="text-xl font-semibold">
                        Total: Ks {totalPrice.toLocaleString()}
                    </p>

                    <Link
                        to="/checkout"
                        className="inline-block mt-4 bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg"
                    >
                        Checkout
                    </Link>
                </div>
            </div>
        </section>
    );
}
