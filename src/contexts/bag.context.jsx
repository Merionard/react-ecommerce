import { createContext, useState, useEffect } from "react";

export const BagContext = createContext({
    isBagOpen: false,
    setBagOpen: () => { },
    cartItems: [],
    addItemToCard: () => { },
    countItems: 0,
    increment: () => { },
    decrement: () => { },
    removeItemToCard: () => { },
    totalPrice: 0

})

export const BagProvider = ({ children }) => {

    const [isBagOpen, setBagOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (cartItems.length > 0) {
            const total = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
            const totalPrice = cartItems.map((cartItem) => cartItem.price * cartItem.quantity).reduce((total, price) => total + price, 0);
            setCountItems(total);
            setTotalPrice(totalPrice);
        }

    }, [cartItems])


    const addItemToCard = (productToAdd) => {

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

    const increment = (product) => {
        const newTab = cartItems.map(cartItem => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
        setCartItems(newTab);

    }

    const decrement = (product) => {
        const newTab = cartItems.map(cartItem => cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
        setCartItems(newTab);

    }

    const removeItemToCard = (product) => {
        const newTab = cartItems.filter(item => item.id !== product.id)
        setCartItems(newTab);

    }


    const value = { isBagOpen, setBagOpen, addItemToCard, cartItems, countItems, increment, decrement, removeItemToCard, totalPrice };

    return <BagContext.Provider value={value}>{children}</BagContext.Provider>
}