import { createContext, useState, useEffect } from 'react'
export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);
    }, [])



    const addToCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); // check if the item is already in the cart

        if (isItemInCart) {
            alert("found");
            setCartItems(
                cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem // otherwise, return the cart item
                )
            );

            localStorage.setItem("cartItems", JSON.stringify(cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem // otherwise, return the cart item
            ))); // if the item is not in the cart, add the item to the cart
        } else {
            alert("no found")
            setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
            localStorage.setItem("cartItems", JSON.stringify([...cartItems, { ...item, quantity: 1 }])); // if the item is not in the cart, add the item to the cart
        }
    };

    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id)); // if the quantity of the item is 1, remove the item from the cart
            localStorage.setItem("cartItems", JSON.stringify(
                cartItems.filter((cartItem) => cartItem.id !== item.id)
            )); // if the quantity of the item is 1, remove the item from the cart
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                        : cartItem
                )
            );

            localStorage.setItem("cartItems", JSON.stringify(
                cartItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                        : cartItem
                )
            ));
        }
    };


    const clearCart = () => {
        setCartItems([]); // set the cart items to an empty array
        localStorage.setItem("cartItems", JSON.stringify([])); // set the cart items to an empty array
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    


    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}