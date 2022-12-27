import { createContext, useState, useEffect } from "react";

export const BagContext = createContext({
    isBagOpen: false,
    setBagOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    countItems: 0
})

export const BagProvider = ({ children }) => {

    const [isBagOpen, setBagOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    useEffect(() => {

        const total = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCountItems(total);

    }, [cartItems])


    const addItemToCart = (productToAdd) => {

        const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
        var newTab = null;
        if (existingCartItem) {
            newTab = cartItems.map(cartItem => cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
        } else {
            newTab = [...cartItems, { ...productToAdd, quantity: 1 }]
        }
        setCartItems(newTab);
    }
    const value = { isBagOpen, setBagOpen, addItemToCart, cartItems,countItems };

    return <BagContext.Provider value={value}>{children}</BagContext.Provider>
}