import React from "react";
import defaultImageBanner from "../../../assets/images/default-image-banner.png";
import {
    ImageBannerContentContainer,
    ImageBannerContentImage,
    ImageBannerTextWrapper,
    ImageBannerContentTitle,
    ImageBannerContentDescription,
} from "./image-banner-content.style";

interface ImageBannerContentProps {
    imageUrl: string;
    altText: string;
    className: string;
}

const ImageBanner: React.FC<ImageBannerContentProps> = ({
                                                            imageUrl = defaultImageBanner,
                                                            altText = "Default banner image",
                                                            className,
                                                        }) => {
    return (
        <ImageBannerContentContainer className={className}>
            <ImageBannerContentImage
                src={imageUrl}
                alt={altText}
                onError={(e) => {
                    e.currentTarget.src = defaultImageBanner; // Fallback to default image
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
