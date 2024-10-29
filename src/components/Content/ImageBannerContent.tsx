import React from 'react';
import ImageBannerContent from '../../assets/images/image-banner-content.png';

interface ImageBannerContentProps {
    imageUrl: string;
    altText: string;
    className: string;
}

const ImageBanner: React.FC<ImageBannerContentProps> = ({ imageUrl, altText = "Banner Image", className = "Image-banner-content" }) => {
    return (
            <div className={className}>
                <img
                    src={imageUrl || ImageBannerContent}
                    alt={altText}
                    onError={(e) => {
                        e.currentTarget.src = ImageBannerContent;
                    }}
                />
            </div>
    );
};

export default ImageBanner;
