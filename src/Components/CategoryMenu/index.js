import React, { useContext } from "react";
import {
  CategoryContainer,
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

const Category = ({ toggleHover, toggleHoverLeave }) => {
  const {handleClick, result} = useContext(ShopContext);

  return (
    <>
      <CategoryContainer
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHoverLeave}
      >
        <CategoryWrapper1>
          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text12}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text3}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text14}</CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text15}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text16}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text17}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text18}</CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>

          <CategoryWrapper2>
            <CategoryHeaderWrapper>
              <CategoryHeader>{CatData1.text1}</CategoryHeader>
            </CategoryHeaderWrapper>
            <CategoryLinkWrapper>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text2}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text3}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text4}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text5}</CategoryLink>
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
                  <button onClick={ handleClick} value="kitchen" >{CatData1.text8}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="electronic" >{CatData1.text9}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button>{CatData1.text10}</button>
                </CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">
                  <button>{CatData1.text11}</button>
                </CategoryLink>
                <CategoryLink to="/production">
                  <button onClick={ handleClick} value="">all</button>
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
