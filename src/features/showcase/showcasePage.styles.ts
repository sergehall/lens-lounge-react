import styled from "styled-components";

export const ShowcaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.default};
    padding: ${({ theme }) => theme.spacing.default};
    border-radius: ${({ theme }) => theme.global.borderRadius};
    box-shadow: ${({ theme }) => theme.global.boxShadow};
`;

export const Label = styled.div`
  position: absolute;
  bottom: 12px;
  left: 16px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  z-index: 2;
`;

export const Image = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfileSection = styled.div`
    background-color: ${({ theme }) => theme.global.secondaryColor};
    border-radius: ${({ theme }) => theme.global.borderRadius};
`;

export const Grid = styled.div`
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;

export const Tile = styled.div<{ isFeatured?: boolean }>`
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border-radius: 12px;
    transition: transform 0.3s ease;
    display: flex;
    align-items: flex-end;
    background-color: ${({ theme }) => theme.global.backgroundColor};
    padding: 5px 20px;
    color: ${({theme}) => theme.text.white};
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    height: ${({theme}) => theme.tile.height};

    grid-column: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};
    grid-row: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};

    &:hover {
        transform: scale(1.03);

        .hover-reveal {
            filter: grayscale(0%) brightness(1);
        }
    }
`;

export const BlogsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.small10};
`;

export const PlaceholderProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${({theme}) => theme.global.secondaryColor};
    border-radius: ${({theme}) => theme.global.borderRadius};
    padding: ${({theme}) => theme.spacing.default};
`;

export const ActionButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing.small10};
    margin-top: ${({theme}) => theme.spacing.default};
`;

export const ActionButton = styled.button`
    background: ${({ theme }) => theme.global.backgroundColor};
    color: ${({ theme }) => theme.links.color};
    border: 2px solid #61dafb;
    border-radius: ${({ theme }) => theme.global.borderRadius};
    padding: 10px 40px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        box-shadow: ${({ theme }) => theme.global.boxShadowGlowOnSecondaryColor};
        color: ${({ theme }) => theme.links.hoverColor};
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const Divider = styled.hr`
    width: 100%;
    margin: ${({theme}) => theme.spacing.small10} 0;
    border: 0;
    border-top: 1px solid ${({theme}) => theme.global.backgroundColor};
`;


export const DividerText = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px 0;
    position: relative;

    &:before,
    &:after {
        content: "";
        flex: 1;
        height: 1px;
        background-color: ${({ theme }) => theme.global.backgroundColor};
        margin: 0 8px;
    }

    span {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.global.backgroundColor};
        white-space: nowrap;
    }
`;

export const HoverReveal = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 25%;
    filter: grayscale(50%) brightness(0.8);
    transition: filter 0.3s ease;
    z-index: 1;

    /* This is what changes on hover */
    ${Tile}:hover & {
        filter: grayscale(0%) brightness(1);
    }
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  pointer-events: none;
`;

// import styled from "styled-components";
//
// export const ShowcaseContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: ${({theme}) => theme.spacing.default};
//     padding: ${({theme}) => theme.spacing.default};
//     background-color: ${({theme}) => theme.global.backgroundColor};
//     border-radius: ${({theme}) => theme.global.borderRadius};
//     box-shadow: ${({theme}) => theme.global.boxShadow};
// `;
//
// export const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
// `;
//
// export const Grid = styled.div`
//     display: grid;
//     gap: 5px;
//     grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
// `;
//
// export const Tile = styled.div<{ isFeatured?: boolean }>`
//     position: relative;
//     cursor: pointer;
//     overflow: hidden;
//     border-radius: 12px;
//     transition: transform 0.3s ease;
//     display: flex;
//     align-items: flex-end;
//
//     grid-column: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};
//     grid-row: ${({ isFeatured }) => (isFeatured ? 'span 2' : 'span 1')};
//
//     &:hover {
//         transform: scale(1.03);
//
//         .hover-reveal {
//             filter: grayscale(0%) brightness(1);
//         }
//     }
// `;
//
// export const ProfileSection = styled.div`
//     background-color: ${({theme}) => theme.global.secondaryColor};
//     border-radius: ${({theme}) => theme.global.borderRadius};
//     padding: ${({theme}) => theme.spacing.default};
// `;
//
// export const BlogsSection = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: ${({theme}) => theme.spacing.small10};
// `;
//
// export const PlaceholderProfileContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     background-color: ${({theme}) => theme.global.secondaryColor};
//     border-radius: ${({theme}) => theme.global.borderRadius};
//     padding: ${({theme}) => theme.spacing.default};
// `;
//
// export const ActionButtonsWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: ${({theme}) => theme.spacing.small10};
//     margin-top: ${({theme}) => theme.spacing.default};
// `;
//
// export const ActionButton = styled.button`
//     background: ${({ theme }) => theme.global.backgroundColor};
//     color: ${({ theme }) => theme.links.color};
//     border: 2px solid #61dafb;
//     border-radius: ${({ theme }) => theme.global.borderRadius};
//     padding: 10px 40px;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: all 0.3s ease;
//
//     &:hover {
//         box-shadow: ${({ theme }) => theme.global.boxShadowGlowOnSecondaryColor};
//         color: ${({ theme }) => theme.links.hoverColor};
//     }
//
//     &:active {
//         transform: scale(0.95);
//     }
// `;
//
//
// export const Divider = styled.hr`
//     width: 100%;
//     margin: ${({theme}) => theme.spacing.small10} 0;
//     border: 0;
//     border-top: 1px solid ${({theme}) => theme.global.backgroundColor};
// `;
//
//
// export const DividerText = styled.div`
//     display: flex;
//     align-items: center;
//     text-align: center;
//     margin: 8px 0;
//     position: relative;
//
//     &:before,
//     &:after {
//         content: "";
//         flex: 1;
//         height: 1px;
//         background-color: ${({ theme }) => theme.global.backgroundColor};
//         margin: 0 8px;
//     }
//
//     span {
//         font-size: 0.8rem;
//         color: ${({ theme }) => theme.global.backgroundColor};
//         white-space: nowrap;
//     }
// `;
//
// export const HoverReveal = styled.div`
//     position: absolute;
//     bottom: 0;
//     width: 100%;
//     height: 25%;
//     filter: grayscale(50%) brightness(0.8);
//     transition: filter 0.3s ease;
//     z-index: 1;
//
//     /* This is what changes on hover */
//     ${Tile}:hover & {
//         filter: grayscale(0%) brightness(1);
//     }
// `;
//
// export const Overlay = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 25%;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
//   pointer-events: none;
// `;
//
// export const Label = styled.div`
//   position: absolute;
//   bottom: 12px;
//   left: 16px;
//   color: white;
//   font-weight: bold;
//   font-size: 1rem;
//   z-index: 2;
// `;
//
// export const Image = styled.img`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;