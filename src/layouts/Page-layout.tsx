import React from "react";
import PageContentSummarize from "../components/content/summarize/Summarize-content";

interface PageLayoutProps {
    bannerImage: React.FC;
    summarizeContent: React.FC;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ bannerImage: BannerImage, children }) => {
    return (
        <div>
            <BannerImage />
            <PageContentSummarize />
            <div>{children}</div>
        </div>
    );
};

export default PageLayout;
