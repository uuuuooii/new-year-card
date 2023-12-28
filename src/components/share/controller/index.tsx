import React from 'react';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

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

  const dataURLtoFile = (dataurl: string, filename: string) => {
    let arr = dataurl.split(",");
    let match = arr[0].match(/:(.*?);/);
    let mimeType = match ? match[1] : null;
    let decodedData = atob(arr[1]);
    let lengthOfDecodedData = decodedData.length;
    let u8array = new Uint8Array(lengthOfDecodedData);

    while (lengthOfDecodedData--) {
      u8array[lengthOfDecodedData] =
        decodedData.charCodeAt(lengthOfDecodedData);
    }
    mimeType = mimeType || "application/octet-stream";
    return new File([u8array], filename, { type: mimeType });
  };

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
      console.log(`Your system doesn't support sharing files.`);
      onNonNativeShare?.();
    }
  };


  const onClickCreateShareImage = () => {
    const downloadImgElement = document.querySelector("#downloadImg");
    if (!downloadImgElement) {
      console.error("Element with ID 'downloadImg' not found");
      return;
    }

    toJpeg(downloadImgElement as HTMLElement, { quality: 0.95 }).then((dataUrl) => {
      const file = dataURLtoFile(dataUrl, "new_year_card.png");
      shareFile(file, "Title", "https://new-year-card-silk.vercel.app/");
    });
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