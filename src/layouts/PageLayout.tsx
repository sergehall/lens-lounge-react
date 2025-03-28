import React from "react";
import PageContentSummarize from "../features/summarize/SummarizeContent";

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
