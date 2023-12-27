import React from "react";
import { ButtonStyle } from "./style";

interface ContentSelectButtonProps {
  children: React.ReactNode;
  isClick: boolean;
}

const ContentSelectButton = ({
  children,
  isClick,
}: ContentSelectButtonProps) => {
  return (
    <ButtonStyle type="button" isClick={isClick}>
      {children}
    </ButtonStyle>
  );
};

export default ContentSelectButton;
