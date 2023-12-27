import { css } from "@emotion/react";
import theme from "@components/lib/styles/theme";

export const buttonSize = {
  small: css`
    width: 50px;
    height: 30px;
  `,
  medium: css`
    width: 150px;
    height: 30px;
  `,
};

export const backButtonColorOfState = {
  normal: css`
    background-color: ${theme.color.black};
    color: ${theme.color.white};
    &:hover {
      background-color: #535050;
    }
  `,
};

export const whiteButtonColorOfState = {
  normal: css`
    background-color: ${theme.color.white};
    color: ${theme.color.black};
    border: 1px solid #7a7979;

    &:hover {
      background-color: #f8f8f8;
    }
  `,
};

export const brownButtonColorOfState = {
  normal: css`
    background-color: ${theme.color.brown};
    color: ${theme.color.white};
    &:hover {
      background-color: #5f3837;
    }
  `,
};

export const buttonType = {
  black: backButtonColorOfState,
  white: whiteButtonColorOfState,
  brown: brownButtonColorOfState,
};
