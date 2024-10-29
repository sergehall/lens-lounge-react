import React from 'react';
import ImageBannerContent from '../../assets/images/image-banner-content.png';

interface ImageBannerContentProps {
    imageUrl: string;
    altText: string;
    className: string;
}

const ImageBanner: React.FC<ImageBannerContentProps> = ({ imageUrl, altText = "Banner Image", className = "" }) => {
    return (
            <div className="Image-banner-content">
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
