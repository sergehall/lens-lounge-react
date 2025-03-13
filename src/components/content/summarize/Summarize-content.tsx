import React, { useEffect } from "react";
import {
    SummarizeContainer,
    SummarizeDescription,
    SummarizeImage,
    SummarizeTextContainer,
    SummarizeTitle,
} from "./summarize.style";
import { usePageSummary } from "./use-page-summary";
import { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { setDynamicTitle } from "../../../app/store";


const PageContentSummarize: React.FC = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    // Retrieve Redux state
    const { title, imageUrl, pageContent } = useSelector(
        (state: RootState) => state.pageContent
    );

    // Generate AI summary
    const summary = usePageSummary(pageContent);

    // Extract and format title from URL whenever path changes
    useEffect(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const formattedTitle = pathSegments
            .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
            .join(" ") || "Home";

        dispatch(setDynamicTitle(formattedTitle));
    }, [dispatch, location.pathname]); // ✅ Runs whenever the URL changes

    return (
        <SummarizeContainer>
            <SummarizeImage src={imageUrl} alt="Summarize Image"/>
            <SummarizeTextContainer>
                <SummarizeTitle>{title}</SummarizeTitle> {/* ✅ Uses Redux title */}
                <SummarizeDescription>{summary}</SummarizeDescription>
            </SummarizeTextContainer>
        </SummarizeContainer>
    );
};

export default PageContentSummarize;
