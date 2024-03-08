import React, { useState } from 'react';
import * as S from './style';

type ShareState = "pending" | "success" | "error";

interface PopupProps {
  shareData: ShareData;
  onClose: () => void;
  onError?: (error?: unknown) => void;
}

const Popup = ({
  shareData,
  onClose,
  onError
}: PopupProps) => {
  const [state, setState] = useState<ShareState>("pending");

  const copyClicked = async () => {
    try {
      await navigator.clipboard.writeText(shareData?.url || "");
      setState("success");
    } catch (err) {
      onError && onError(err);
      setState("error");
    }
  };

  const getButtonText = (state: ShareState) => {
    switch (state) {
      case "success":
        return "Link copied";
      case "pending":
      default:
        return "Copy link";
    }
  };
  return (
    <S.Wrap>
      <S.TitleWrap>
        <h3>
          {shareData.title}
        </h3>
        <button onClick={onClose}>
          <div aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g id="close">
                <path
                  id="x"
                  d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
                />
              </g>
            </svg>
          </div>
        </button>
      </S.TitleWrap>
      <S.CopyWrap>
        {state === "error" ? (
          <div>
            <p>
              Unable to copy to clipboard, please manually copy the
              url to share.
            </p>
          </div>
        ) : null}
        <S.Input
          value={shareData.url}
          readOnly
        />
        <S.Button
          onClick={copyClicked}
        >
          {getButtonText(state)}
        </S.Button>
      </S.CopyWrap>
    </S.Wrap>

  );
};

export default Popup;