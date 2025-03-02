import { useContext } from "react";
import { CartContext } from "../context/Cart/CartContext";

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}; 