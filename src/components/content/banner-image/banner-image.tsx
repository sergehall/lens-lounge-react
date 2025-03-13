import React from "react";
import defaultImageBanner from "../../../assets/images/default-image-banner.png";
import {
    ImageBannerContentContainer,
    ImageBannerContentImage,
    ImageBannerTextWrapper,
    ImageBannerContentTitle,
    ImageBannerContentDescription,
} from "./banner-image.style";

interface ImageBannerContentProps {
    imageUrl: string;
    altText?: string;
}

const BannerImage: React.FC<ImageBannerContentProps> = ({
                                                            imageUrl,
                                                            altText = "Default banner image",
                                                        }) => {
    return (
        <ImageBannerContentContainer>
            <ImageBannerContentImage
                src={imageUrl}
                alt={altText}
                onError={(e) => (e.currentTarget.src = defaultImageBanner)}
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

export default BannerImage;