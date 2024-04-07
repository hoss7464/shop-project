import React, { createContext, useState, useEffect } from "react";
import { db1 } from "../db";
import ProductionMainComponent from "../Pages/ProductionPage/ProductionMainComponent";
//-----------------------------------------------------------------------------
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < db1.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : getDefaultCart();
  });
  const [selectedCategory, setSelectedCategory] = useState();
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [sortOrder, setSortOrder] = useState("cheap");

  //----------------------------------------------------------------------------
  //Toggle function on click :
  function toggle() {
    setIsOpen(!isOpen);
  }

  function toggle2() {
    setIsOpen2((prev) => !prev);
  }

  function toggle3() {
    setIsOpen3(!isOpen3);
  }

  function toggle4() {
    setIsOpen4(!isOpen4);
  }

  function toggle5() {
    setIsOpen5(!isOpen5);
  }
  //----------------------------------------------------------------------------
  //Toggle function on hover:
  const toggleHover = () => setHovered(true);
  const toggleHoverLeave = () => setHovered(false);
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

  // Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
  //input filter :
  const filteredItems = db1.filter(
    (myProduct) =>
      myProduct.product.toLowerCase().includes(query.toLowerCase()) ||
      myProduct.category.toLowerCase().includes(query.toLowerCase()) ||
      myProduct.brand.toLowerCase().includes(query.toLowerCase()) ||
      myProduct.header.toLowerCase().includes(query.toLowerCase())
  );
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  //radio filter :
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  //button filter :
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  //Sort function :
  const handleSort = (order) => {
    setSortOrder(order);
  };

  function filteredData(products, selected, query, minPrice, maxPrice) {
    let filteredProducts = products;

    //filtering input items :
    if (query) {
      filteredProducts = filteredItems.filter(({ product }) =>
        product.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (!selected) {
      filteredProducts = filteredItems;
    }

    //filtering price range :
    filteredProducts = filteredProducts.filter(
      ({ price }) => price >= minPrice && price <= maxPrice
    );

    //selected filter :
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, brand, product, price }) =>
          category === selected ||
          brand === selected ||
          product === selected ||
          price === selected
      );
    }

    return filteredProducts.map(
      ({
        id,
        product,
        brand,
        picture,
        header,
        paragraph,
        price,
        currentPrice,
        code,
        discount,
      }) => (
        <ProductionMainComponent
          key={Math.random()}
          product={product}
          brand={brand}
          picture={picture}
          header={header}
          paragraph={paragraph}
          price={price}
          currentPrice={currentPrice}
          code={code}
          discount={discount}
          myRoute={id}
        />
      )
    );
  }

  const result = filteredData(db1, selectedCategory, query, minPrice, maxPrice);

  //--------------------------------------------------------------------------

  const contextValue = {
    toggleHover,
    toggleHoverLeave,
    hovered,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalItem,
    updateCartItemCount,
    getTotalCartAmount,
    handleClick,
    handleChange,
    selectedCategory,
    handleInputChange,
    query,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    result,
    toggle,
    isOpen,
    toggle2,
    isOpen2,
    setIsOpen2,
    toggle3,
    isOpen3,
    toggle4,
    isOpen4,
    toggle5,
    isOpen5,
    handleSort,
    sortOrder,
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
