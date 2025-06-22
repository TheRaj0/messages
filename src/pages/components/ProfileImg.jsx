import { useState } from "react";

const ProfileImg = ({ src, alt, className }) => {
  const fallbackSrc = "/messages/default.jpg";
  const [imageSrc, setImageSrc] = useState(fallbackSrc);

  const handleLoad = () => {
    if (imageSrc === fallbackSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
      };
    }
  };

  return (
    <img 
      className={className || 'w-8 h-8 min-w-8 rounded-full overflow-hidden'}
      src={imageSrc}
      onLoad={handleLoad}
      alt={alt || "Profile Picture"}
    />
  );
};

export default ProfileImg;
