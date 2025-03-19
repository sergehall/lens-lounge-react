// Layout Wrapper Component
import React from "react";
import PageLayout from "./PageLayout";
import {PageConfig} from "../config/PageConfig";


interface LayoutWrapperProps {
    pageConfig: PageConfig;
    children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ pageConfig, children }) => (
    <PageLayout
        bannerImage={pageConfig.bannerImage}
        summarizeContent={pageConfig.pageContentSummarize}
    >
        {children}
    </PageLayout>
);

export default LayoutWrapper;
