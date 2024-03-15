import React, { useContext } from "react";
import "./Production.css";
import {
  ProductContainer,
  ProductWrapper,
  ProductLeftWrapper,
  ProductLeftFilterWrapper,
  ProductMobileInputFilterWrapper,
  ProductSelectWrapper,
  ProductSelectWrapper2,
  ProductSelectParaWrapper,
  ProductSelectPara,
  ProductRightWrapper,
  ProductFilterWrapper,
  ProductResultWrapper,
  ProductBrandFilterWrapper,
  ProductBrandFilterWrapper3,
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
import ProductBrand from "./ProductBrand";
import { CatData1 } from "../../Helpers/CategoryData";

const Production = () => {
  const theme = extendTheme({ breakpoints });
  const {
    result,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    handleChange,
    selectedCategory,
  } = useContext(ShopContext);

  return (
    <ChakraProvider theme={theme}>
      <ProductContainer>
        <ProductWrapper>
          <ProductLeftWrapper>
            <ProductLeftFilterWrapper>
              <ProductMobileInputFilterWrapper>
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
                <ProductInputFilterWrapper2 style={{ marginTop: "1rem" }}>
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
              </ProductMobileInputFilterWrapper>
              <ProductSelectWrapper>
                <ProductSelectWrapper2 style={{ marginBottom: "0.5rem" }}>
                  <ProductSelectParaWrapper>
                    <ProductSelectPara>برند</ProductSelectPara>
                  </ProductSelectParaWrapper>
                  <select
                    id="brands"
                    value={selectedCategory}
                    onChange={handleChange}
                    className="select"
                  >
                    <option className="option" value="">
                      همه
                    </option>
                    <option value="iphone">Iphone</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiaomi">Xiaomi</option>
                    <option value="hp">HP</option>
                    <option value="lenovo">Lenovo</option>
                    <option value="apple">Mackbook</option>
                    <option value="intell">Intell</option>
                    <option value="nvidia">Nvidia</option>
                    <option value="vogati">All</option>
                    <option value="nova">Nova</option>
                    <option value="lg">LG</option>
                    <option value="adidas">Adidas</option>
                    <option value="puma">Puma</option>
                    <option value="nike">Nike</option>
                  </select>
                </ProductSelectWrapper2>

                <ProductSelectWrapper2>
                  <ProductSelectParaWrapper>
                    <ProductSelectPara>دسته بندی</ProductSelectPara>
                  </ProductSelectParaWrapper>
                  <select
                    id="brands"
                    value={selectedCategory}
                    onChange={handleChange}
                    className="select"
                  >
                    <option className="option" value="">
                      همه
                    </option>
                    <option className="option" value="cellphone">
                      {CatData1.text7}
                    </option>
                    <option className="option" value="mobile-accessory">
                      {CatData1.text8}
                    </option>
                    <option className="option" value="laptop">
                      {CatData1.text9}
                    </option>
                    <option className="option" value="laptop-accessory">
                      {CatData1.text10}
                    </option>
                    <option className="option" value="pc-accessory">
                      {CatData1.text11}
                    </option>
                    <option className="option" value="pot">
                      {CatData1.text2}
                    </option>
                    <option className="option" value="coffee">
                      {CatData1.text3}
                    </option>
                    <option className="option" value="iron">
                      {CatData1.text4}
                    </option>
                    <option className="option" value="refrigerator">
                      {CatData1.text5}
                    </option>
                    <option className="option" value="t-shirt">
                      {CatData1.text16}
                    </option>
                    <option className="option" value="shoes">
                      {CatData1.text17}
                    </option>
                    <option className="option" value="pencils">
                      {CatData1.text13}
                    </option>
                  </select>
                </ProductSelectWrapper2>
              </ProductSelectWrapper>
            </ProductLeftFilterWrapper>
            <ProductResultWrapper>{result}</ProductResultWrapper>
          </ProductLeftWrapper>
          <ProductRightWrapper>
            <ProductFilterWrapper>
              <ProductBrandFilterWrapper>
                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="iphone" brandName="Iphone" />
                  <ProductBrand brandValue="samsung" brandName="Samsung" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="xiaomi" brandName="Xiaomi" />
                  <ProductBrand brandValue="hp" brandName="HP" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="lenovo" brandName="Lenovo" />
                  <ProductBrand brandValue="apple" brandName="Macbook" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="intell" brandName="Intell" />
                  <ProductBrand brandValue="nvidia" brandName="Nvidia" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="vogati" brandName="Vogati" />
                  <ProductBrand brandValue="nova" brandName="Nova" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="samsung" brandName="Samsung" />
                  <ProductBrand brandValue="lg" brandName="LG" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="adidas" brandName="Adidas" />
                  <ProductBrand brandValue="puma" brandName="Puma" />
                </ProductBrandFilterWrapper3>

                <ProductBrandFilterWrapper3>
                  <ProductBrand brandValue="nike" brandName="Nike" />
                  <ProductBrand
                    brandValue="faber-castell"
                    brandName="Faber-Castell"
                  />
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
                <ProductInputFilterWrapper2 style={{ marginTop: "1rem" }}>
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
