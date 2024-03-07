import React from "react";
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

const Category = ({ toggleHover, toggleHoverLeave }) => {
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
                <CategoryLink to="/production">{CatData1.text7}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text8}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text9}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text10}</CategoryLink>
              </CategoryLinkWrapper2>
              <CategoryLinkWrapper2>
                <CategoryLink to="/production">{CatData1.text11}</CategoryLink>
              </CategoryLinkWrapper2>
            </CategoryLinkWrapper>
          </CategoryWrapper2>
        </CategoryWrapper1>
      </CategoryContainer>
    </>
  );
};

export default Category;
