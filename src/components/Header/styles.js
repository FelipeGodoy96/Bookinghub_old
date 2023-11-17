import styled from "styled-components";

const media = {
    tablet: '@media(min-width: 640px)',
    laptop: '@media(min-width: 1024px)',
    desktop: '@media(min-width: 1280px)',
}

//    background-color: #1DBEB4;
//    border-bottom-left-radius: 5px;
//    border-bottom-right-radius: 5px;

export const HeaderStyledTag = styled.header`
    height: 5.8125rem;
    background-color: #FFF;
    position: fixed;
    width: 100%;
    padding: 1.25rem 0.8275rem 1.25rem 0.690rem;
    ${media.tablet} {
        padding: 1.25rem 2rem 1.25rem 2rem;
    }
    ${media.laptop} {
        padding: 1.25rem 3rem 1.25rem 3rem;
    }
    z-index: 1;
`