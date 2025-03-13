import { useEffect, useState } from "react";

export const usePageSummary = (pageContent: string) => {
    const [summary, setSummary] = useState("Analyzing content...");
    // export const pageConfig: Record<string, PageConfig> = {
    //     home: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Welcome to the homepage of Lens Lounge." />,
    //         component: Home,
    //     },
    //     showcase: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Explore your profile and shared posts." />,
    //         component: ShowcasePage,
    //     },
    //     whisperDialogs: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Your messages and chats." />,
    //         component: WhisperDialogsPage,
    //     },
    //     whisperContacts: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Your contacts and friends." />,
    //         component: WhisperContactsPage,
    //     },
    //     news: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Stay updated with the latest news." />,
    //         component: NewsPage,
    //     },
    //     technologies: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Learn about cutting-edge technologies." />,
    //         component: TechnologiesPage,
    //     },
    //     about: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Learn more about our mission and values." />,
    //         component: About,
    //     },
    //     contact: {
    //         bannerImage: () => <BannerImage imageUrl="/assets/images/default-image-banner.png" />,
    //         pageContent: () => <PageContentComponent content="Get in touch with us." />,
    //         component: Contact,
    //     },
    // };

    useEffect(() => {
        const analyzePageContent = async () => {
            const response = await mockAIAnalysis(pageContent);
            setSummary(response);
        };

        analyzePageContent();
    }, [pageContent]);

    const mockAIAnalysis = async (content: string): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`AI Summary: ${content.substring(0, 50)}...`);
            }, 1000);
        });
    };

    return summary;
};
