import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Cart = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("cartItems in Cart component:", cartItems);
    console.log("products in Cart component:", products);
    
    // Create an array of cart data with product details
    const tempData = cartItems.map(item => ({
      ...item,
      product: products.find(product => product._id === item._id)
    })).filter(item => item.product); // Ensure we only keep items with valid product data

    setCartData(tempData);
    console.log("cartData after processing:", tempData);
  }, [cartItems, products]);

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_1fr_1fr] sm:grid-cols-[4fr_1.5fr_1fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img src={item.product.image[0]} alt={item.product.name} className='w-16 sm:w-20' />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{item.product.name}</p>
                  <p className='text-xs sm:text-lg font-medium'>{currency}{item.product.price}</p>
                  <p className='text-xs sm:text-lg'>Quantity: {item.quantity}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
