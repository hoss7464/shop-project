import React, { useContext } from "react";
import {
  ProductContainer,
  ProductWrapper,
  ProductLeftWrapper,
  ProductRightWrapper,
  ProductFilterWrapper,
  ProductBrandFilterWrapper,
  ProductBrandFilterWrapper2,
  ProductBrandFilterWrapper3,
  ProductBrandFilterButton,
  ProductInputFilterWrapper,
  ProductInputFilterWrapper2,
  ProductInputFilterLabelWrapper,
  ProductInputFilterLabel,
  ProductInputFilterWrapper3,
  ProductInputFilter,
} from "./ProductElements";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { breakpoints } from "../../Core-UI/Theme";
import { ShopContext } from "../../Context/shop-context";

const Production = () => {
  const theme = extendTheme({ breakpoints });
  const { handleClick, result, minPrice, maxPrice, setMinPrice, setMaxPrice } =
    useContext(ShopContext);

  return (
    <ChakraProvider theme={theme}>
      <ProductContainer>
        <ProductWrapper>
          <ProductLeftWrapper>{result}</ProductLeftWrapper>
          <ProductRightWrapper>
            <ProductFilterWrapper>
              <ProductBrandFilterWrapper>
                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="iphone"
                    >
                      Iphone
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="samsung"
                    >
                      Samsung
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="xiaomi"
                    >
                      Xiaomi
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton onClick={handleClick} value="hp">
                      HP
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="lenovo"
                    >
                      Lenovo
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="apple"
                    >
                      Macbook
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="intell"
                    >
                      Intell
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="nvidia"
                    >
                      Nvidia
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="vogati"
                    >
                      Vogati
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="nova"
                    >
                      Nova
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="samsung"
                    >
                      Samsung
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton onClick={handleClick} value="lg">
                      LG
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="adidas"
                    >
                      Adidas
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="puma"
                    >
                      Puma
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="nike"
                    >
                      Nike
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                  <ProductBrandFilterWrapper2>
                    <ProductBrandFilterButton
                      onClick={handleClick}
                      value="faber-castell"
                    >
                      Faber-Castell
                    </ProductBrandFilterButton>
                  </ProductBrandFilterWrapper2>
                </ProductBrandFilterWrapper3>
              </ProductBrandFilterWrapper>

              <ProductInputFilterWrapper>
                <ProductInputFilterWrapper2>
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>از</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
                <ProductInputFilterWrapper2 style={{marginTop: "1rem"}} >
                  <ProductInputFilterLabelWrapper>
                    <ProductInputFilterLabel>تا</ProductInputFilterLabel>
                  </ProductInputFilterLabelWrapper>
                  <ProductInputFilterWrapper3>
                    <ProductInputFilter
                      type="text"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </ProductInputFilterWrapper3>
                </ProductInputFilterWrapper2>
              </ProductInputFilterWrapper>
            </ProductFilterWrapper>
          </ProductRightWrapper>
        </ProductWrapper>
      </ProductContainer>
    </ChakraProvider>
  );
};

export default Production;
