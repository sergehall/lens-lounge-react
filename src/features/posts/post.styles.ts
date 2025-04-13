import styled from "styled-components";

export const PostWrapper = styled.article`
  background-color: ${({ theme }) => theme.global.backgroundColor};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.global.boxShadowBackgroundColor};
  max-width: 600px;
  width: 100%;
  margin: 24px auto;
`;


// import styled from "styled-components";
//
// export const Wrapper = styled.article`
//     width: 100%;
//     max-width: 600px;
//     background-color: ${({ theme }) => theme.global.backgroundColor};
//     border-radius: 10px;
//     overflow: hidden;
//     box-shadow: ${({ theme }) => theme.global.boxShadow};
//     margin: 24px auto;
// `;
//
// export const Image = styled.img`
//     width: 100%;
//     height: auto;
//     display: block;
//     object-fit: cover;
// `;
//
// export const Actions = styled.div`
//     display: flex;
//     gap: 16px;
//     padding: 12px 16px;
//     align-items: center;
// `;
//
// export const ActionButton = styled.button<{ $active?: boolean }>`
//     background: none;
//     border: none;
//     cursor: pointer;
//     font-size: 1.25rem;
//     color: ${({ theme, $active }) =>
//             $active ? theme.highlights.red : theme.text.cyanBlue};
//     transition: color 0.3s ease;
//
//     &:hover {
//         color: ${({ theme }) => theme.links.hoverColor};
//     }
// `;
//
// export const Content = styled.div`
//     padding: 0 16px;
// `;
//
// export const Title = styled.h3`
//     font-size: 1.25rem;
//     color: ${({ theme }) => theme.text.colorLight};
//     margin: 8px 0 4px;
// `;
//
// export const Meta = styled.div`
//     font-size: 0.85rem;
//     color: ${({ theme }) => theme.text.colorMuted};
//     margin-bottom: 10px;
// `;
//
// export const Description = styled.p`
//     font-size: 1rem;
//     color: ${({ theme }) => theme.text.colorLight};
//     line-height: 1.5;
// `;
//
// export const Footer = styled.div`
//     padding: 12px 16px;
//     font-size: 0.85rem;
//     color: ${({ theme }) => theme.text.colorMuted};
//     display: flex;
//     justify-content: space-between;
//     border-top: 1px solid ${({ theme }) => theme.global.borderColor};
//     margin-top: 12px;
// `;
