import React from "react";
import {
  CategoryWrapper2,
  CategoryHeaderWrapper,
  CategoryHeader,
  CategoryLinkWrapper,
  CategoryLinkWrapper2,
  CategoryLink,
} from "./CategoryElements";

const CategoryComponents = ({
  CatHeader,
  CatPara1,
  CatPara2,
  CatPara3,
  CatPara4,
}) => {
  return (
    <>
      <CategoryWrapper2>
        <CategoryHeaderWrapper>
          <CategoryHeader>{CatHeader}</CategoryHeader>
        </CategoryHeaderWrapper>
        <CategoryLinkWrapper>
          <CategoryLinkWrapper2>
            <CategoryLink>{CatPara1}</CategoryLink>
          </CategoryLinkWrapper2>
          <CategoryLinkWrapper2>
            <CategoryLink>{CatPara2}</CategoryLink>
          </CategoryLinkWrapper2>
          <CategoryLinkWrapper2>
            <CategoryLink>{CatPara3}</CategoryLink>
          </CategoryLinkWrapper2>
          <CategoryLinkWrapper2>
            <CategoryLink>{CatPara4}</CategoryLink>
          </CategoryLinkWrapper2>
        </CategoryLinkWrapper>
      </CategoryWrapper2>
    </>
  );
};

export default CategoryComponents;
