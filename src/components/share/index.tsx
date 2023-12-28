import React, { useState } from 'react';
import Controller from './controller';
import Popup from './popup';
import * as S from './style';
import Modal from '../modal';

interface ShareProps {
  children: React.ReactNode;
  shareData: ShareData;
  onSuccess?: () => void;
  onError?: (error?: unknown) => void;
  onInteraction?: () => void;
  disabled?: boolean;
  testRef: React.RefObject<HTMLDivElement>;
}

const Share = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  disabled,
  testRef
}: ShareProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleNonNativeShare = () => {
    setOpenPopup(true);
  };
  return (

    <div>
      <Controller
        shareData={shareData}
        onInteraction={onInteraction}
        onSuccess={onSuccess}
        onError={onError}
        onNonNativeShare={handleNonNativeShare}
        disabled={disabled}
        testRef={testRef}
      >
        {children}
      </Controller>
      {openPopup ? (
        <Modal open={openPopup}>
          <Popup
            shareData={shareData}
            onClose={() => setOpenPopup(false)}
          />
        </Modal>
      ) : null}
    </div>

  );
};

export default Share;