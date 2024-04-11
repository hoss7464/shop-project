import React, { useContext, useState, useEffect } from "react";
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
  CommentTextHolder,
  CommentTextTopicWrapper,
  CommentTextTopic,
  CommentTextParaWrapper,
  CommentTextPara,
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
  const {
    selectedProducts,
    toggleProductSelection,
    deleteProductById,
    toggle6,
    formData
  } = useContext(ShopContext);
  //We need to use this state in this component not in context because of several popup rendering
  const [showPopup, setShowPopup] = useState(false);

  const handleCheckboxChange = () => {
    toggleProductSelection(productId);
  };

  const handleDeleteClick = () => {
    // Check if the product is selected before deleting
    if (selectedProducts.includes(productId)) {
      deleteProductById(productId); // Call deleteProductById with productId
    }
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);
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
            <CommentComponent3IconsWrapper3 onClick={toggle6}>
              <CommentComponent3Icons alt="comment icon" src={MyCommentIcon1} />
            </CommentComponent3IconsWrapper3>
          </CommentComponent3IconsWrapper2>
        </CommentComponent3IconsWrapper>

        <CommentComponentContentWrapper>
          <CommentImgWrapper>
            <CommentImg alt="product picture" src={productPicture} />
          </CommentImgWrapper>
          <CommentIconWrapper onClick={handlePopupToggle}>
            <CommentIconWrapper2>
              <CommentIcon alt="comment icon" src={myCommentMenu1} />
            </CommentIconWrapper2>
            {showPopup && (
              <CommentTextHolder>
                <CommentTextTopicWrapper>
                  <CommentTextTopic>{formData.inputText}</CommentTextTopic>
                </CommentTextTopicWrapper>
                <CommentTextParaWrapper>
                  <CommentTextPara>{formData.textareaText}</CommentTextPara>
                </CommentTextParaWrapper>
              </CommentTextHolder>
            )}
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
