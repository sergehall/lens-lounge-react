import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {
    PageInsightContainer, PageInsightDescription, PageInsightImage, PageInsightTextContainer, PageInsightTitle,
} from "./pageInsight.style";
import {RootState} from "../../app/store";
import {pageContentMock, PageKey, PageKeys} from "./mocks/pageContentMock";
import {setDynamicPageContent, setDynamicTitle} from "../../app/slices/pageInsightSlice";


// **AI-based page summary hook**
const usePageSummary = (pageContent: string) => {
    const [summary, setSummary] = useState("Analyzing content...");

    useEffect(() => {
        const analyzePageContent = async () => {
            const response = await mockAIAnalysis(pageContent);
            setSummary(response);
        };

        analyzePageContent();
    }, [pageContent]);

    // Mock AI content analysis function
    const mockAIAnalysis = async (content: string): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`AI Summary: ${content.substring(0, 100)}...`);
            }, 1000);
        });
    };

    return summary;
};

// **Main PageContentSummarize component**
const PageInsight: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    // Retrieve Redux state
    const {title, imageUrl, pageContent} = useSelector((state: RootState) => state.pageInsight);

    // Generate AI summary
    const summary = usePageSummary(pageContent);

    // Set page title and content based on URL
    useEffect(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const formattedTitle = pathSegments.map(segment => segment.charAt(0).toUpperCase() + segment.slice(1)).join(" ") || "Home";

        // **Extract last segment of the path and get default page content**
        const lastPathSegment = pathSegments.at(-1) as PageKey | undefined;

        // Get default page content based on the last path segment
        const defaultContent = pageContentMock[lastPathSegment ?? PageKeys.home]?.pageContent;

        // Dispatch actions for title and content updates
        dispatch(setDynamicPageContent(defaultContent || pageContent));
        dispatch(setDynamicTitle(formattedTitle));

    }, [dispatch, location.pathname, pageContent]);

    return (
        <PageInsightContainer>
            <PageInsightImage src={imageUrl} alt="PageInsight Image"/>
            <PageInsightTextContainer>
                <PageInsightTitle>{title}</PageInsightTitle>
                <PageInsightDescription>{summary}</PageInsightDescription>
            </PageInsightTextContainer>
        </PageInsightContainer>
    );
};

export default PageInsight;