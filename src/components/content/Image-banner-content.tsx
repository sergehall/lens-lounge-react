import React from 'react';
import ImageBannerContent from '../../assets/images/image-banner-content.png';
import {ContentImage} from "./content.style";

interface ImageBannerContentProps {
    imageUrl: string;
    altText?: string;
    className?: string;
}

const ImageBanner: React.FC<ImageBannerContentProps> = ({
                                                            imageUrl,
                                                            altText = 'Banner Image',
                                                            className = '',
                                                        }) => {
    return (
        <ContentImage
            src={imageUrl || ImageBannerContent}
            alt={altText}
            className={className}
            onError={(e) => {
                e.currentTarget.src = ImageBannerContent; // Fallback image
            }}
        />
    );
};

export default ImageBanner;
