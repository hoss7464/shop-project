import React, { useContext, useState } from "react";
import {
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
import MyCommentNavIcon from "../../../../Assets/Svg/CoommentNavIcon.svg";
import { ShopContext } from "../../../../Context/shop-context";

const CommentForm = () => {
  const { setFormData } = useContext(ShopContext);
  const [inputText, setInputText] = useState("");
  const [textareaText, setTextareaText] = useState("");

  const commentHandleSubmit = (e) => {
    e.preventDefault();
    setFormData({ inputText, textareaText });
    setInputText("")
    setTextareaText("")
  };

  return (
    <>
      <CommentFormContainer>
        <CommentFormWrapper>
          <CommentNav>
            <CommentNavTextIconWrapper>
              <CommentNavTextWrapper>
                <CommentNavText>ارسال دیدگاه</CommentNavText>
              </CommentNavTextWrapper>
              <CommentNavIconWrapper>
                <CommentNavIcon alt="comment nav icon" src={MyCommentNavIcon} />
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
    </>
  );
};

export default CommentForm;
