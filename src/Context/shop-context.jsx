import React, { createContext, useState, useEffect } from "react";
import { db1 } from "../db";
import ProductionMainComponent from "../Pages/ProductionPage/ProductionMainComponent";
//-----------------------------------------------------------------------------
export const ShopContext = createContext(null);
//-----------------------------------------------------------------------------
//Setting all ids in array of product equal to 0
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < db1.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
//-----------------------------------------------------------------------------
//Setting Local time and date for choosen product in userprofile/orders page
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("fa-IR");
const formattedTime = currentDate.toLocaleTimeString("fa-IR");

//-----------------------------------------------------------------------------

const ShopContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : { inputText: '', textareaText: '' };
  });

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

  function toggle6() {
    setIsOpen6(!isOpen6);
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
  //Function for filtering chosen items in userprofile
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  //Filtering and adding items if the id > 0
  const filteringProducts = db1.filter((myData2) => cartItems[myData2.id] > 0);

  // Sort the products based on sortOrder
  const sortedProducts =
    sortOrder === "expensive"
      ? [...filteringProducts].sort((a, b) => b.price - a.price)
      : [...filteringProducts].sort((a, b) => a.price - b.price);

  // Filter the products based on searchQuery
  const filteredAndSortedProducts = sortedProducts.filter((product) =>
    product.product.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //--------------------------------------------------------------------------
  //Function to toggle choosen product for delete process in userprofile/usercomments page
  const toggleProductSelection = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        return [...prevSelectedProducts, productId];
      }
    });
  };

  // Function to delete  selected products more than one product(delete by delete icon on navbar) in userprofile/usercomments page
  const deleteSelectedProducts = () => {
    const updatedCartItems = { ...cartItems };
    selectedProducts.forEach((productId) => {
      // Set the value of selected product ID to 0
      updatedCartItems[productId] = 0;
    });

    // Update the local storage with the modified cart items
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Update the state
    setCartItems(updatedCartItems);
    setSelectedProducts([]);
  };

  // Function to delete product by its ID when we choose one prduct to delete in userprofile/usercomments page
  const deleteProductById = (productId) => {
    const updatedCartItems = { ...cartItems };
    updatedCartItems[productId] = 0;

    // Update the local storage with the modified cart items
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Update the state
    setCartItems(updatedCartItems);
  };
  
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
    formattedDate,
    formattedTime,
    handleSearchInputChange,
    filteredAndSortedProducts,
    searchQuery,
    selectedProducts,
    toggleProductSelection,
    deleteSelectedProducts,
    deleteProductById,
    toggle6,
    isOpen6,
    formData, 
    setFormData,

  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
