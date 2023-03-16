import styled from "styled-components";

const media = {
    tablet: '@media(min-width: 640px)',
    laptop: '@media(min-width: 1024px)',
    desktop: '@media(min-width: 1280px)',
}

export const FooterComponent = styled.footer`
    background-color: #1DBEB4;
    height: 3.625rem;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 1.09375rem 1.25rem 1.09375rem 1.25rem;
    ${media.tablet} {
        padding: 1.09375rem 1.875rem 1.09375rem 1.875rem;
    }
    ${media.laptop} {
        padding: 1.09375rem 3.125rem 1.09375rem 3.125rem;
    }
    color: #FFF;
    font-size: 14pt;
    z-index: 1;
`