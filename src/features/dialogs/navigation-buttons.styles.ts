import styled from "styled-components";

export const ButtonSegment = styled.div`
    padding: 8px;
    display: flex;
    justify-content: center;
    gap: 8px;
    border-top: 1px solid #ddd;
    background-color: #f1f1f1;

    position: sticky; /* Keeps the buttons at the bottom */
    bottom: 0;

    button {
        flex: 1; /* Makes buttons take up equal width */
        padding: 12px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        font-size: 16px;
        cursor: pointer;
        text-align: center;

        &:hover {
            background-color: #0056b3;
        }
    }

    /* Responsive Design for Mobile Screens */
    @media (max-width: 800px) {
        flex-direction: column; /* Stacks buttons vertically on small screens */
        button {
            flex: none; /* Removes the equal width constraint */
            width: 100%; /* Makes buttons full width */
            font-size: 14px; /* Adjust font size for smaller screens */
        }
    }
`;