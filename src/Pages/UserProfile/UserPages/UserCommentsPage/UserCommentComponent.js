import React, { useContext } from "react";
import {
  CommentComponentWrapper,
  CommentComponent3IconsWrapper,
  CommentComponent3IconsWrapper2,
  CommentComponent3IconsWrapper3,
  CommentComponent3Icons,
  CommentInputCheckWrapper,
  CommentInputCheck,
  CommentComponentContentWrapper,
  CommentParaWrapper,
  CommentPara,
  CommentIconWrapper,
  CommentIconWrapper2,
  CommentIcon,
  CommentImgWrapper,
  CommentImg,
} from "./CommentsElements";
import { ShopContext } from "../../../../Context/shop-context";
import MyTrashIcon2 from "../../../../Assets/Svg/TrashIcon2.svg";
import MyCommentIcon1 from "../../../../Assets/Svg/CommentIcon1.svg";
import myCommentMenu1 from "../../../../Assets/Svg/CommentMenu1.svg";

const UserCommentComponent = ({
  productPicture,
  productName,
  productCategory,
  productId,
}) => {
  const { selectedProducts, toggleProductSelection, deleteProductById } =
    useContext(ShopContext);

  const handleCheckboxChange = () => {
    toggleProductSelection(productId);
  };

  const handleDeleteClick = () => {
    // Check if the product is selected before deleting
    if (selectedProducts.includes(productId)) {
      deleteProductById(productId); // Call deleteProductById with productId
    }
  };
  return (
    <>
      <CommentComponentWrapper>
        <CommentComponent3IconsWrapper>
          <CommentComponent3IconsWrapper2>
            <CommentInputCheckWrapper>
              <CommentInputCheck
                type="checkbox"
                checked={selectedProducts.includes(productId)}
                onChange={handleCheckboxChange}
              />
            </CommentInputCheckWrapper>
            <CommentComponent3IconsWrapper3 onClick={handleDeleteClick}>
              <CommentComponent3Icons alt="trash icon" src={MyTrashIcon2} />
            </CommentComponent3IconsWrapper3>
            <CommentComponent3IconsWrapper3>
              <CommentComponent3Icons alt="comment icon" src={MyCommentIcon1} />
            </CommentComponent3IconsWrapper3>
          </CommentComponent3IconsWrapper2>
        </CommentComponent3IconsWrapper>

        <CommentComponentContentWrapper>
          <CommentImgWrapper>
            <CommentImg alt="product picture" src={productPicture} />
          </CommentImgWrapper>
          <CommentIconWrapper>
            <CommentIconWrapper2>
              <CommentIcon alt="comment icon" src={myCommentMenu1} />
            </CommentIconWrapper2>
          </CommentIconWrapper>
          <CommentParaWrapper>
            <CommentPara>{productName}</CommentPara>
          </CommentParaWrapper>
          <CommentParaWrapper>
            <CommentPara>{productCategory}</CommentPara>
          </CommentParaWrapper>
        </CommentComponentContentWrapper>
      </CommentComponentWrapper>
    </>
  );
};

export default UserCommentComponent;
