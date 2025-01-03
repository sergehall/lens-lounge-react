// Layout Wrapper Component
import PageLayout from "./Page-layout";
import {PageConfig} from "../config/Page-сonfig";

export const LayoutWrapper: React.FC<{
    layoutConfig: PageConfig;
    children: React.ReactNode;
}> = ({ layoutConfig, children }) => (
    <PageLayout
        bannerImage={layoutConfig.bannerImage}
        summaryDescription={layoutConfig.summaryDescription}
    >
        {children}
    </PageLayout>
);
