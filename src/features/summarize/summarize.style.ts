import styled from "styled-components";

export const SummarizeContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px;
    margin-bottom: 5px;
    max-width: 100%;
    background-color: ${({ theme }) => theme.global.secondaryColor};
    color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.summarize.boxShadow};
    box-sizing: border-box;

    @media (max-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
`;

export const SummarizeImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: ${({ theme }) => theme.global.borderRadius};
    object-fit: cover;
    background-color: ${({ theme }) => theme.highlights.white};
    margin-right: 15px;
    box-shadow: ${({ theme }) => theme.summarize.boxShadow};

    @media (max-width: 600px) {
        margin-right: 10px;
    }
`;

export const SummarizeTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.summarize.textGap};
    flex: 1;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 600px) {
        align-items: flex-start;
        text-align: left;
    }
`;

export const SummarizeTitle = styled.h2`
    font-size: ${({ theme }) => theme.summarize.titleFontSize};
    margin: 0;
    color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
    text-align: left;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.summarize.titleFontSizeMobile};
    }
`;

export const SummarizeDescription = styled.p`
    font-size: ${({ theme }) => theme.summarize.descriptionFontSize};
    color: ${({ theme }) => theme.text.colorDarkCharcoalBlue};
    margin: 0;
    text-align: left;

    @media (max-width: 600px) {
        font-size: ${({ theme }) => theme.summarize.descriptionFontSizeMobile};
    }
`;
