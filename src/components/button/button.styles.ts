import styled from 'styled-components';

export const PrimaryButton = styled.button<{ primary?: boolean }>`
    background: ${({ primary }) => (primary ? 'blue' : 'gray')};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
`;

// Add this line to ensure TypeScript treats this as a module
export {};
