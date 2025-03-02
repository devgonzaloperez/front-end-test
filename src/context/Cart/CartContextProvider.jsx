import React, { useState } from 'react';
import { CartContext } from './CartContext';

export const CartContextProvider = ({ children }) => {

    const [cartQuantity, setCartQuantity] = useState(0);

    return (
        <CartContext.Provider value={{cartQuantity, setCartQuantity}}>
            {children}
        </CartContext.Provider>
    )

};

