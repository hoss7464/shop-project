import React, { useContext } from "react";
import {
  CategoryContainer,
  AllCategoryWrapper,
  AllCategoryLink,
  CategoryWrapper1,
  CategoryWrapper2,
  CategoryHeaderWrapper,
  CategoryHeader,
  CategoryLinkWrapper,
  CategoryLinkWrapper2,
  CategoryLink,
} from "./CategoryElements";
import { CatData1 } from "../../Helpers/CategoryData";
import { ShopContext } from "../../Context/shop-context";

const Category = () => {
  const {handleClick, toggleHover, toggleHoverLeave} = useContext(ShopContext);

  return (
    <>
      <CategoryContainer
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHoverLeave}
      >
        <AllCategoryWrapper>
          <AllCategoryLink to="/production" >
          <button onClick={ handleClick} value="" >{CatData1.text19}</button>
          </AllCategoryLink>
        </AllCategoryWrapper>
        <CategoryWrapper1>
          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text12}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="pencils" >{CatData1.text13}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text15}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="t-shirt" >{CatData1.text16}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="shoes" >{CatData1.text17}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>

            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text1}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="pot" >{CatData1.text2}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="coffee" >{CatData1.text3}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="iron" >{CatData1.text4}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                <button onClick={ handleClick} value="refrigerator" >{CatData1.text5}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text6}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="cellphone" >{CatData1.text7}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="mobile-accessory" >{CatData1.text8}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="laptop" >{CatData1.text9}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="laptop-accessory" >{CatData1.text10}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="pc-accessory" >{CatData1.text11}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>
        </CategoryWrapper1>
      </CategoryContainer>
    </>
  );
};

export default Category;
