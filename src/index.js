import React from "react";
import "./Fonts/Shabnam-Light.ttf";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ShopContextProvider from "./Context/shop-context";

//---------------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();
