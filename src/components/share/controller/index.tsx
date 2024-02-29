import React from 'react';
import { toJpeg } from 'html-to-image';

interface ControllerProps {
  children: React.ReactNode;
  onNonNativeShare?: () => void;
  disabled?: boolean;
  testRef: React.RefObject<HTMLDivElement>;
}

const Controller = ({
  children,
  onNonNativeShare,
  disabled,
  testRef
}: ControllerProps) => {

  const shareFile = (file: File, title: string, text: string) => {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator
        .share({
          files: [file],
          title,
          text,
        })
        .then(() => console.log("Share was successful."))
        .catch((error) => console.log("Sharing failed", error));
    } else {
      onNonNativeShare?.();
    }
  };


  const onClickCreateShareImage = async () => {
    if (testRef.current) {
      await toJpeg(testRef.current);
      await toJpeg(testRef.current);

      const dataUrl = await toJpeg(testRef.current, { quality: 0.95 });
      const blob = await fetch(dataUrl).then((res) => res.blob());
      const file = new File([blob], 'new_year_card.png', { type: blob.type });

      shareFile(file, "Title", "https://new-year-card-silk.vercel.app/");
    };
  };

  return (
    <button
      onClick={onClickCreateShareImage}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Controller;