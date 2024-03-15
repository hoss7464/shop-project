import React, { useContext } from "react";
import {
  ProductBrandFilterWrapper2,
  ProductBrandFilterButton,
} from "./ProductElements";
import { ShopContext } from "../../Context/shop-context";

const ProductBrand = ({ brandValue, brandName }) => {
  const { handleClick } = useContext(ShopContext);
  return (
    <>
      <ProductBrandFilterWrapper2>
        <ProductBrandFilterButton onClick={handleClick} value={brandValue}>
          {brandName}
        </ProductBrandFilterButton>
      </ProductBrandFilterWrapper2>
    </>
  );
};

export default ProductBrand;
