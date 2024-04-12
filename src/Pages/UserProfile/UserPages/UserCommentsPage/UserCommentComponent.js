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
  PopupContainer,
  PupupMainWrapper,
  PupupCloseBtnWrapper,
  PupupCloseBtn,
  CommentFormContainer,
  CommentFormWrapper,
  CommentNav,
  CommentNavTextIconWrapper,
  CommentNavTextWrapper,
  CommentNavText,
  CommentNavIconWrapper,
  CommentNavIcon,
  MyCommentForm,
  CommentInputWrapper,
  CommentInput,
  CommentTextareaWrapper,
  CommentTextarea,
  CommentFormSubmitBtn,
} from "./CommentsElements";
import { ShopContext } from "../../../../Context/shop-context";
import MyTrashIcon2 from "../../../../Assets/Svg/TrashIcon2.svg";
import MyCommentIcon1 from "../../../../Assets/Svg/CommentIcon1.svg";
import myCommentMenu1 from "../../../../Assets/Svg/CommentMenu1.svg";
import MyCloseBtn from "../../../../Assets/Svg/CloseBtn2.svg";
import MyCommentNavIcon from "../../../../Assets/Svg/CoommentNavIcon.svg";

const UserCommentComponent = ({
  productPicture,
  productName,
  productCategory,
  productId,
  isOpenPopup,
  togglePopup,
}) => {

  const { selectedProducts, toggleProductSelection, deleteProductById } =
    useContext(ShopContext);

  //We need to use this state in this component not in context because of several popup rendering
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem(`commentData_${productId}`);
    return savedData ? JSON.parse(savedData) : { inputText: "", textareaText: "" };
  });
  const [inputText, setInputText] = useState("");
  const [textareaText, setTextareaText] = useState("");
  

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
  
  //Function for submit the message for into message holder
  const commentHandleSubmit = (e) => {
    e.preventDefault();
    setFormData({ inputText, textareaText });
    setInputText("");
    setTextareaText("");
  };
  
  // Save form data to local storage whenever formData changes
  useEffect(() => {
    localStorage.setItem(`commentData_${productId}`, JSON.stringify(formData));
  }, [formData, productId]);

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
            <CommentComponent3IconsWrapper3 onClick={togglePopup}>
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
      {isOpenPopup && (
        <PopupContainer>
          <PupupMainWrapper>
            <PupupCloseBtnWrapper onClick={togglePopup}>
              <PupupCloseBtn alt="close btn" src={MyCloseBtn} />
            </PupupCloseBtnWrapper>
            <CommentFormContainer>
              <CommentFormWrapper>
                <CommentNav>
                  <CommentNavTextIconWrapper>
                    <CommentNavTextWrapper>
                      <CommentNavText>ارسال دیدگاه</CommentNavText>
                    </CommentNavTextWrapper>
                    <CommentNavIconWrapper>
                      <CommentNavIcon
                        alt="comment nav icon"
                        src={MyCommentNavIcon}
                      />
                    </CommentNavIconWrapper>
                  </CommentNavTextIconWrapper>
                </CommentNav>
                <MyCommentForm onSubmit={commentHandleSubmit}>
                  <CommentInputWrapper>
                    <CommentInput
                      placeholder="عنوان دیدگاه"
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </CommentInputWrapper>
                  <CommentTextareaWrapper>
                    <CommentTextarea
                      placeholder="متن دیدگاه"
                      value={textareaText}
                      onChange={(e) => setTextareaText(e.target.value)}
                    />
                  </CommentTextareaWrapper>
                  <CommentFormSubmitBtn>ارسال</CommentFormSubmitBtn>
                </MyCommentForm>
              </CommentFormWrapper>
            </CommentFormContainer>
          </PupupMainWrapper>
        </PopupContainer>
      )}
    </>
  );
};

export default UserCommentComponent;
