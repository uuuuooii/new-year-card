'use client';

import styled from '@emotion/styled';

export const Loading = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1;
`;

export const LoadingText = styled.div`
  width: 220px;
  white-space: nowrap;
  color: white;
  font-weight: 200;
  background: #4d100f;
  overflow: hidden;
  border-right: 3px solid;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  text-align: center;
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
