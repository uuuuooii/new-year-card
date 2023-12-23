import { css } from '@emotion/react';
import weights from './wights';

const title = {
  t01: css`
    font-size: 1.563rem;
    line-height: 120%;
    ${weights.semibold}
  `,
  t02: css`
    font-size: 1.25rem;
    line-height: 120%;
    ${weights.semibold}
  `,
};

const subtitle = {
  s01: css`
    font-size: 1rem;
    ${weights.regular}
  `,
};

const size = { title, subtitle };

export default size;
