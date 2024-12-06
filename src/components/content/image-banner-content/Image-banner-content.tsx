import React from "react";
import ImageBannerContent from "../../../assets/images/image-banner-content.png";
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
                                                            imageUrl,
                                                            altText,
                                                            className,
                                                        }) => {
    return (
        <ImageBannerContentContainer>
            <ImageBannerContentImage
                src={imageUrl || ImageBannerContent}
                alt={altText}
                className={className}
                onError={(e) => {
                    e.currentTarget.src = ImageBannerContent;
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
