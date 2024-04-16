import React from "react";
import "./UserServices.css"
import {
  UServiceCompoWrapper3,
  UServiceCompoIconTextWrapper,
  UServiceCompoIconWrapper,
  UServiceCompoIcon,
  UServiceCompoTextWrapper,
  UServiceCompoText,
  USPriorityRadiobtnWrapper,
  USPriorityHeaderWrapper,
  USPriorityHeader,
  USRadiobtnWrapper,
  USRadiobtnWrapper2,
  USRadiobtnText,
  USRadioBtn,
  USSubmitAttachWrapper,
  USSubmithWrapper,
  USAttachWrapper,
  USAttachInput,
} from "./UserServicesElements";
import {
  PopupContainer,
  PupupMainWrapper,
  PupupCloseBtnWrapper,
  PupupCloseBtn,
} from "../UserCommentsPage/CommentsElements";
import MyCloseBtn from "../../../../Assets/Svg/CloseBtn2.svg";
import {
  CommentNav,
  CommentNavTextIconWrapper,
  CommentNavTextWrapper,
  CommentNavText,
  CommentNavIconWrapper,
  CommentNavIcon,
  CommentFormSubmitBtn,
} from "../UserCommentsPage/CommentsElements";
import {
  CommentFormContainer,
  CommentFormWrapper,
  MyCommentForm,
  CommentInputWrapper,
  CommentInput,
  CommentTextareaWrapper,
  CommentTextarea,
} from "../UserCommentsPage/CommentsElements";

const UsCard = ({
  usCardAlt,
  usCardSrc,
  usCardText,
  usCardWidth,
  usCardHeight,
  isOpenPopUp,
  togglePopup,
  usFormNavIcon,
}) => {
  return (
    <>
      <UServiceCompoWrapper3 onClick={togglePopup}>
        <UServiceCompoIconTextWrapper>
          <UServiceCompoIconWrapper>
            <UServiceCompoIcon
              alt={usCardAlt}
              src={usCardSrc}
              style={{ width: usCardWidth, height: usCardHeight }}
            />
          </UServiceCompoIconWrapper>
          <UServiceCompoTextWrapper>
            <UServiceCompoText>{usCardText}</UServiceCompoText>
          </UServiceCompoTextWrapper>
        </UServiceCompoIconTextWrapper>
      </UServiceCompoWrapper3>
      {isOpenPopUp && (
        <PopupContainer>
          <PupupMainWrapper>
            <PupupCloseBtnWrapper onClick={togglePopup}>
              <PupupCloseBtn alt="close btn" src={MyCloseBtn} />
            </PupupCloseBtnWrapper>
            <CommentFormContainer>
              <CommentFormWrapper>
                <MyCommentForm>
                  <CommentNav>
                    <CommentNavTextIconWrapper>
                      <CommentNavTextWrapper>
                        <CommentNavText>پاسخ به تیکت</CommentNavText>
                      </CommentNavTextWrapper>
                      <CommentNavIconWrapper>
                        <CommentNavIcon alt="bank icon" src={usFormNavIcon} />
                      </CommentNavIconWrapper>
                    </CommentNavTextIconWrapper>
                  </CommentNav>
                  <CommentInputWrapper>
                    <CommentInput placeholder="عنوان تیکت" />
                  </CommentInputWrapper>
                  <USPriorityRadiobtnWrapper>
                    <USRadiobtnWrapper>
                      <USRadiobtnWrapper2>
                        <USRadiobtnText>بسیار مهم</USRadiobtnText>
                        <USRadioBtn type="radio" name="prioritize" />
                      </USRadiobtnWrapper2>
                      <USRadiobtnWrapper2>
                        <USRadiobtnText>مهم</USRadiobtnText>
                        <USRadioBtn type="radio" name="prioritize" />
                      </USRadiobtnWrapper2>
                      <USRadiobtnWrapper2>
                        <USRadiobtnText>معمولی</USRadiobtnText>
                        <USRadioBtn type="radio" name="prioritize" />
                      </USRadiobtnWrapper2>
                    </USRadiobtnWrapper>
                    <USPriorityHeaderWrapper>
                      <USPriorityHeader>اولویت بندی</USPriorityHeader>
                    </USPriorityHeaderWrapper>
                  </USPriorityRadiobtnWrapper>
                  <CommentTextareaWrapper>
                    <CommentTextarea placeholder="متن تیکت" className="textarea" />
                  </CommentTextareaWrapper>
                  <USSubmitAttachWrapper>
                    <USSubmithWrapper>
                      <CommentFormSubmitBtn type="submit">
                        ارسال
                      </CommentFormSubmitBtn>
                    </USSubmithWrapper>
                    <USAttachWrapper>
                      <USAttachInput type="file" id="fileInput" />
                    </USAttachWrapper>
                  </USSubmitAttachWrapper>
                </MyCommentForm>
              </CommentFormWrapper>
            </CommentFormContainer>
          </PupupMainWrapper>
        </PopupContainer>
      )}
    </>
  );
};

export default UsCard;
