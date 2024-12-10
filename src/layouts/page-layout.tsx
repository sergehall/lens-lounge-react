import React from "react";
import ImageBanner from "../components/content/image-banner-content/Image-banner-content";
import Summarize from "../components/content/summarize/Summarize";
import {DynamicTitle} from "../components/content/summarize/dynamic-title";

interface PageLayoutProps {
    bannerImage: string;
    summaryDescription: string;
    children: React.ReactNode; // Specific route content
}

const PageLayout: React.FC<PageLayoutProps> = ({ bannerImage, summaryDescription, children }) => {
    return (
        <div>
            <ImageBanner imageUrl={bannerImage} className="Image-banner-content" altText="Image Banner" />
            <Summarize
                title={<DynamicTitle />}
                imageUrl="https://avatars.githubusercontent.com/u/87441904?s=200&v=4"
                description={summaryDescription}
            />
            <div>{children}</div>
        </div>
    );
};

export default PageLayout;
