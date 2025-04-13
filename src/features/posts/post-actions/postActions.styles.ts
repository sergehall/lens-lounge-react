import styled from "styled-components";

export const ActionBar = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px 16px;
`;

export const Button = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  font-size: 1.3rem;
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.highlights.red : theme.text.colorDarkGray};
`;