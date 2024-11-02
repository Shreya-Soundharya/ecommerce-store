import { createContext, useState, useEffect } from "react";
import { products } from '../assets/assets';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item._id === product._id);
            let updatedCart;
            
            if (existingItem) {
                updatedCart = prevItems.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCart = [...prevItems, { _id: product._id, quantity: 1 }];
            }
            
            console.log("Updated cartItems after addToCart:", updatedCart);
            return updatedCart;
        });
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => prev.filter(item => item._id !== itemId)); // Use _id for filtering
    };

    const updateCartQuantity = (id, quantity) => {
        if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            removeFromCart(id);
        } else {
            setCartItems((prev) => 
                prev.map(item => 
                    item._id === id ? { ...item, quantity } : item
                )
            );
        }
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    useEffect(() => {
        console.log(cartItems); // For debugging
    }, [cartItems]);

    useEffect(() => {
        console.log("Products data:", products);
    }, []);
    

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart, // Ensure to provide removeFromCart in context
        updateCartQuantity, // Add updateCartQuantity to context
        getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
