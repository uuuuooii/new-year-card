import React from 'react';

interface ControllerProps {
  children: React.ReactNode;
  shareData: ShareData;
  onSuccess?: () => void;
  onError?: (error?: unknown) => void;
  onNonNativeShare?: () => void;
  onInteraction?: () => void;
  disabled?: boolean;
}

const Controller = ({
  children,
  shareData,
  onInteraction,
  onSuccess,
  onError,
  onNonNativeShare,
  disabled,
}: ControllerProps) => {
  const handleOnClick = async () => {
    onInteraction?.();
    if (navigator?.share) {
      try {
        await navigator.share(shareData);
        onSuccess?.();
      } catch (err) {
        onError?.(err);
      }
    } else {
      onNonNativeShare?.();
    }
  };

  return (
    <button
      onClick={handleOnClick}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Controller;