import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity, selectedColor) => {
        setCart((prev) => {
            const existing = prev.find(
                (item) =>
                    item.id === product.id && item.color === selectedColor
            );

            if (existing) {
                return prev.map((item) =>
                    item.id === product.id && item.color === selectedColor
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [
                ...prev,
                { ...product, quantity, color: selectedColor },
            ];
        });
    };

    const removeFromCart = (id, color) => {
        setCart((prev) =>
            prev.filter(
                (item) => !(item.id === id && item.color === color)
            )
        );
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem("cart");
    };

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
