import React from "react";
import DefaultImageBanner from "../../../assets/images/image-banner-content.png";
import {
    ImageBannerContentContainer,
    ImageBannerContentImage,
    ImageBannerTextWrapper,
    ImageBannerContentTitle,
    ImageBannerContentDescription,
} from "./image-banner-content.style";

interface ImageBannerContentProps {
    imageUrl?: string;
    altText?: string;
    className?: string;
}

const ImageBanner: React.FC<ImageBannerContentProps> = ({
                                                            imageUrl = DefaultImageBanner, // Default fallback image
                                                            altText = "Default banner image", // Default alt text
                                                            className,
                                                        }) => {
    return (
        <ImageBannerContentContainer className={className}>
            <ImageBannerContentImage
                src={imageUrl}
                alt={altText}
                onError={(e) => {
                    e.currentTarget.src = DefaultImageBanner; // Fallback to default image
                }}
            />
            <ImageBannerTextWrapper>
                <ImageBannerContentTitle>Image Banner Title</ImageBannerContentTitle>
                <ImageBannerContentDescription>
                    This is a banner image description.
                </ImageBannerContentDescription>
            </ImageBannerTextWrapper>
        </ImageBannerContentContainer>
    );
};

export default ImageBanner;
