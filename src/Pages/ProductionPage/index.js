import React, { useContext, useMemo, useEffect, useState } from "react";
import {
  ProductContainer,
  ProductWrapper,
  ProductLeftWrapper,
  ProductRightWrapper,
} from "./ProductElements";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { breakpoints } from "../../Core-UI/Theme";
import { ShopContext } from "../../Context/shop-context";
import { db1 } from "../../db";

const Production = () => {

  const theme = extendTheme({ breakpoints });
  const {handleClick ,result} = useContext(ShopContext);

  return (
    <ChakraProvider theme={theme}>
      <ProductContainer>
        <ProductWrapper>
          <ProductLeftWrapper>
            {result}
          </ProductLeftWrapper>
          <ProductRightWrapper>

            <button onClick={ handleClick} value="cellphone" >cellphone</button>
            <button onClick={ handleClick} value="kitchen" >kitchen</button>
            <button onClick={ handleClick} value="electronic" >electronic</button>
          </ProductRightWrapper>
        </ProductWrapper>
      </ProductContainer>
    </ChakraProvider>
  );
};

export default Production;
