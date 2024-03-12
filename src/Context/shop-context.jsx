import React, { createContext, useState } from "react";
import { db1 } from "../db";
import ProductionMainComponent from "../Pages/ProductionPage/ProductionMainComponent";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < db1.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //----------------------------------------------------------------------------
  //Adding a production into our cart:
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  //----------------------------------------------------------------------------
  //Removing a production from our cart:
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  //----------------------------------------------------------------------------
  //Display the count of selected productions on navbar addToCart button
  const getTotalItem = () => {
    let totalItem = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }

    return totalItem;
  };
  //----------------------------------------------------------------------------
  //There is an input in selected productions in add to cart page , tis function allows you to change the amount of that input manually
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  //----------------------------------------------------------------------------
  //Display the total price of all selected items:
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = db1.find((myProduct) => myProduct.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };
  //----------------------------------------------------------------------------
  //Filtering production based on category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //input filter :
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = db1.filter((myProduct) =>
    myProduct.product
      .toLocaleLowerCase()
      .indexOf(query.toLocaleUpperCase() !== -1)
  );

  //radio filter :
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //button filter :
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (!selected) {
      filteredProducts = filteredItems;
    }

    //filtering input items :
    if (query) {
      filteredProducts = filteredItems;
    }

    //selected filter :
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, brand, product }) =>
          category === selected || brand === selected || product === selected
      );
    }

    return filteredProducts.map(({category}) => ( 
      <ProductionMainComponent category={category} />
    ))
  }

  const result = filteredData(db1, selectedCategory, query)

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalItem,
    updateCartItemCount,
    getTotalCartAmount,
    handleClick,
    result,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
