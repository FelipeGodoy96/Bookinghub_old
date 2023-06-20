import styled from "styled-components";

const media = {
    tablet: '@media(min-width: 640px)',
    laptop: '@media(min-width: 1024px)',
    desktop: '@media(min-width: 1280px)',
}

export const ButtonComponent = styled.button`
    background-color: ${props => props.variant == 'primary' ? "#1DBEB4" : props.variant == 'secondary' ? "#F3F1ED" : props.variant == 'alternative' ? "#FFF" : "#FFF"};
    color: ${props => props.variant == 'primary' ? "#FFF" : props.variant == 'secondary' ? "#1DBEB4" : props.variant == 'alternative' ? "#1DBEB4" : "#FFF"};
    border: ${props => props.variant == 'primary' ? "none" : props.variant == 'secondary' ? "1px solid #1DBEB4" : props.variant == 'alternative' ? "1px solid #545776" : "none"};
    border-radius: 0.3125rem;
    font-size: 16pt;
    height: 2.5rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    width: ${props => props.width};
    &:hover {
        background-color: ${props => props.variant == 'primary' ? "#383B58" : props.variant == 'secondary' ? "#383B58" : props.variant == 'alternative' ? "#F3F1ED" : "#FFF"};
        color: ${props => props.variant == 'primary' ? "#1DBEB4" : props.variant == 'secondary' ? "#FFF" : props.variant == 'alternative' ? "#F3F1ED" : "#FFF"};
        border: ${props => props.variant == 'primary' ? "none" : props.variant == 'secondary' ? "none" : props.variant == 'alternative' ? "1px solid #545776" : "#FFF"};
    }
`