import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from "../components/Title";
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([...products]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevance');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
  
    // If search is active, filter by search term
    if (showSearch && search) {
      productsCopy = productsCopy.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Apply category filter if selected
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
  
    // Apply subcategory filter if selected
    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }
  
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = [...filterProducts]; // Create a copy to sort
    switch (sortType) {
      case 'low-high':
        fpCopy.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fpCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // Relevance sort, do nothing as products are already filtered
        break;
    }
    setFilterProducts(fpCopy);
  };

  // Initialize filterProducts with all products on component mount
  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, search, showSearch, products]);
  
  useEffect(() => {
    sortProduct();
  }, [sortType, filterProducts]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTER BY
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="dropdown icon" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Anime</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="AOT" onChange={toggleCategory} /> Attack On Titan
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="OP" onChange={toggleCategory} /> One Piece
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="BC" onChange={toggleCategory} /> Black Clover
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="JJK" onChange={toggleCategory} /> Jujutsu Kaisen
            </p>
          </div>
        </div>

        {/* Sub-category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Item Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Mug" onChange={toggleSubCategory} /> Mug
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Poster" onChange={toggleSubCategory} /> Poster
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Keychain" onChange={toggleSubCategory} /> Keychain
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Necklace" onChange={toggleSubCategory} /> Necklace
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Keycaps" onChange={toggleSubCategory} /> Keycaps
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value="Hoodies" onChange={toggleSubCategory} /> Hoodies
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevance">Sort by Relevance</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
