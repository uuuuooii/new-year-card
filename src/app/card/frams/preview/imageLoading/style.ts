'use client';

import styled from '@emotion/styled';

export const Loading = styled.div`
  position: absolute;
  top: 20px;
  left: 36px;
`;

export const LoadingText = styled.div`
  width: 178px;
  white-space: nowrap;
  color: white;
  font-weight: 200;
  background: #4d100f;
  overflow: hidden;
  border-right: 3px solid;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
