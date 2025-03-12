import React from "react";

interface SummaryDescriptionProps {
    text: string;
}

const SummaryDescription: React.FC<SummaryDescriptionProps> = ({ text }) => {
    return <p className="summary-description">{text}</p>;
};

export default SummaryDescription;
