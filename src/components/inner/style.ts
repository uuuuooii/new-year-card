'use client';

import styled from '@emotion/styled';
import mediaQuery from '@components/lib/styles/theme/mediaQuery';

const Wrap = styled.div`
  padding: 0 30px;

  ${mediaQuery.tablet} {
    padding: 0;
  }
`;
export default Wrap;
