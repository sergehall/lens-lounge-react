import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDynamicPageContent, setDynamicTitle } from "../../../app/store";

export const usePageSummary = (pageContent: string) => {
    const [summary, setSummary] = useState("Analyzing content...");
    const location = useLocation();
    const dispatch = useDispatch();

    const pageContentDefault: Record<string, { pageContent: string }> = {
        home: {
            pageContent: "Welcome to the homepage of Lens Lounge.",
        },
        showcase: {
            pageContent: "Explore your profile and shared posts.",
        },
        whisperDialogs: {
            pageContent: "Your messages and chats.",
        },
        whisperContacts: {
            pageContent: "Your contacts and friends.",
        },
        news: {
            pageContent: "Stay updated with the latest news.",
        },
        technologies: {
            pageContent: "Learn about cutting-edge technologies.",
        },
        about: {
            pageContent: "Learn more about our mission and values.",
        },
        contact: {
            pageContent: "Get in touch with us.",
        },
    };

    useEffect(() => {
        const pathSegments = location.pathname.split("/").filter(Boolean);
        const formattedTitle = pathSegments
            .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
            .join(" ") || "Home";

        console.log(formattedTitle, "formattedTitle!!!!!!");

        // ✅ Fix: Use bracket notation for lookup
        if (formattedTitle in pageContentDefault) {
            dispatch(setDynamicPageContent(pageContentDefault[formattedTitle].pageContent));
        } else {
            dispatch(setDynamicPageContent(pageContent)); // ✅ Only set if no default exists
        }

        // ✅ Set the title dynamically
        dispatch(setDynamicTitle(formattedTitle));

        // ✅ Run AI analysis
        const analyzePageContent = async () => {
            const response = await mockAIAnalysis(pageContent);
            setSummary(response);
        };

        analyzePageContent();
    }, [pageContent, location.pathname, dispatch]); // ✅ Fix: Correct dependencies

    // Mock AI analysis function
    const mockAIAnalysis = async (content: string): Promise<string> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`AI Summary: ${content.substring(0, 50)}...`);
            }, 1000);
        });
    };

    return summary;
};

// import { useEffect, useState } from "react";
// import {useLocation} from "react-router-dom";
// import {setDynamicPageContent, setDynamicTitle} from "../../../app/store";
// import {useDispatch} from "react-redux";
//
// export const usePageSummary = (pageContent: string) => {
//     const [summary, setSummary] = useState("Analyzing content...");
//     const location = useLocation();
//     const dispatch = useDispatch();
//
//     const pageContentDefault = {
//         home: {
//             pageContent: "Welcome to the homepage of Lens Lounge.",
//         },
//         showcase: {
//             pageContent: "Explore your profile and shared posts.",
//         },
//         whisperDialogs: {
//             pageContent: "Your messages and chats.",
//         },
//         whisperContacts: {
//             pageContent: "Your contacts and friends.",
//         },
//         news: {
//             pageContent: "Stay updated with the latest news.",
//         },
//         technologies: {
//             pageContent: "Learn about cutting-edge technologies.",
//         },
//         about: {
//             pageContent: "Learn more about our mission and values.",
//         },
//         contact: {
//             pageContent: "Get in touch with us.",
//         },
//     };
//
//
//     useEffect(() => {
//         const pathSegments = location.pathname.split("/").filter(Boolean)
//         const formattedTitle = pathSegments
//             .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
//             .join(" ") || "Home";
//
//         console.log(formattedTitle, 'formattedTitle!!!!!!');
//         if(formattedTitle in pageContentDefault) {
//             dispatch(setDynamicPageContent(pageContentDefault.formattedTitle));
//         }
//         dispatch(setDynamicPageContent(pageContent));
//
//         const analyzePageContent = async () => {
//             const response = await mockAIAnalysis(pageContent);
//             setSummary(response);
//         };
//
//         analyzePageContent();
//     }, [pageContent]);
//
//     const mockAIAnalysis = async (content: string): Promise<string> => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(`AI Summary: ${content.substring(0, 50)}...`);
//             }, 1000);
//         });
//     };
//
//     return summary;
// };
